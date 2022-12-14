import { useNavigate, useParams } from "@solidjs/router"
import { Show, createRenderEffect, createSignal, onCleanup, For, createMemo } from "solid-js"
import { Loader } from "../../components/Loader"
import { fetchTorrents, fetchSpecific, download } from "../../utils/functions"
import './Info.css'

interface Props {
  urlType: "tv" | "movie"
}

export function Info(props: Props) {
    const navigate = useNavigate();
    const params = useParams()
    const [details, setDetails] = createSignal<SpecificMovie | SpecificTV>();
    const [torrents, setTorrents] = createSignal<Torrent[]>([]);
    const title = createMemo(() => {let detail = details(); return isMovie(detail) ? detail.title : detail?.name});
    const date = createMemo(() => {let detail = details(); return isMovie(detail) ? detail.release_date : detail?.first_air_date});
    
  
    createRenderEffect(() => {
      const abortController = new AbortController();
      async function fetch() {
        const details = await fetchSpecific<SpecificMovie | SpecificTV>(props.urlType, params.id, abortController.signal).catch(() => {
          navigate(`${props.urlType === "tv" ? "/shows" : "/movies"}`);
        });
        if(!details) {
          navigate(`${props.urlType === "tv" ? "/shows" : "/movies"}`);
          return;
        } else {
          if(isMovie(details) && details.imdb_id) {
            const torrents = await fetchTorrents(details.imdb_id, abortController.signal);
            setTorrents(torrents);          
          }
          setDetails(details);
        }
      }

      fetch();

      onCleanup(() => abortController.abort());
    })

    function isMovie(movie: any): movie is SpecificMovie{
      return (movie as SpecificMovie)?.title !== undefined;
    }

  return (
    <Show when={details()} fallback={<Loader />}>
      <div class="specific">
        <picture>
          <source media="(max-width: 1200px)" srcset={"https://image.tmdb.org/t/p/w1280" + details()?.backdrop_path}/>
          <img src={"https://image.tmdb.org/t/p/w500" + details()?.poster_path}/>
        </picture>
        <div>
          <h1>{title()}<span>({date()?.slice(0,4)})</span></h1>
          <h2>Overview</h2>
          <p>{details()?.overview}</p>
          <h2>Downloads</h2>
          <Show when={torrents().length !== 0} fallback={<p>No torrents are currently available.</p>}>
            <div class="torrents">
              <For each={torrents()}>{torrent => {
                  const name = title()?.replace(/ /g, ".") + "." + torrent.quality + "." + torrent.type.toUpperCase() + "-ZENITH";
                  return <button onClick={() => download(torrent.url, name)}>{torrent.quality} {torrent.type.toUpperCase()}</button>
              }}</For>
            </div>
          </Show>
        </div>
      </div>
    </Show>
  )
}
