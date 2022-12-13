import { useNavigate, useParams } from "@solidjs/router"
import { Show, createRenderEffect, createSignal, onCleanup, For } from "solid-js"
import { Loader } from "../../components/Loader"
import { fetchTorrents, fetchSpecific, download } from "../../utils/functions"
import './Info.css'

export function Info() {
    const navigate = useNavigate();
    const params = useParams()
    const [details, setDetails] = createSignal<SpecificMovie>();
    const [torrents, setTorrents] = createSignal<Torrent[]>([])
  
    createRenderEffect(() => {
      const abortController = new AbortController();
      async function fetch() {
        await fetchSpecific<SpecificMovie>("movie", params.id, abortController.signal).then(async res => {
          const details = res;
          if(details.imdb_id) {
            const torrents = await fetchTorrents(details.imdb_id, abortController.signal);
            setTorrents(torrents);
          }
          setDetails(details);
        }).catch(() => {
          navigate("/movies");
          return;
        });
      }

      fetch();

      onCleanup(() => abortController.abort());
    })

  return (
    <Show when={details()} fallback={<Loader />}>
      <div class="specific">
        <picture>
          <source media="(max-width: 1200px)" srcset={"https://image.tmdb.org/t/p/w1280" + details()?.backdrop_path}/>
          <img src={"https://image.tmdb.org/t/p/w500" + details()?.poster_path}/>
        </picture>
        <div>
          <h1>{details()?.title} <span>({details()?.release_date.slice(0,4)})</span></h1>
          <h2>Overview</h2>
          <p>{details()?.overview}</p>
          <h2>Downloads</h2>
          <Show when={torrents().length !== 0}>
            <div class="torrents">
              <For each={torrents()}>{torrent => {
                  const name = details()?.title?.replace(/ /g, ".") + "." + torrent.quality + "." + torrent.type.toUpperCase() + "-ZENITH";
                  return <button onClick={() => download(torrent.url, name)}>{torrent.quality} {torrent.type.toUpperCase()}</button>
              }}</For>
            </div>
          </Show>
        </div>
      </div>
    </Show>
  )
}
