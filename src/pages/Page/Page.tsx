import { createRenderEffect, createSignal, For, Match, onCleanup, Show, Switch } from "solid-js";
import { GridCard, ListCard } from "../../components/Card";
import { Loader } from "../../components/Loader";
import { fetchPopular, search } from "../../utils/functions";

interface Props {
    urlType: "tv" | "movie"
}

export function Page<T extends Movie | TV>(props: Props) {
    const [view, setView] = createSignal("grid");
    const [page, setPage] = createSignal(1);
    const [query, setQuery] = createSignal("");
    const [popular, setPopular] = createSignal<Fetch<T>>()
    const [filtered, setFiltered] = createSignal<Fetch<T>>()

    createRenderEffect(() => {
      const abortController = new AbortController();
      async function fetch() {
        const res = await fetchPopular<T>(props.urlType, page(), abortController.signal);
        setPopular(res);
        setFiltered(res);
      }

      fetch();

      onCleanup(() => abortController.abort())
    })
  
    async function handleSearch(e: SubmitEvent) {
      e.preventDefault();

      if(query() === "") {
        setFiltered(popular());
        return;
      }
      
      const abortController = new AbortController();
      const res = await search<T>(props.urlType, page(), query(), abortController.signal);
      setPopular(res);
      setFiltered(res);
      setQuery("");
    }

    return (<>
      <header>
        <div class="view-buttons">
          <button class={`${view() === "grid" ? "active" : ""}`} onClick={() => setView('grid')}>
            <svg aria-hidden="true" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"></path></svg>
          </button>
          <button class={`${view() === "list" ? "active" : ""}`} onClick={() => setView('list')}>
            <svg aria-hidden="true" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M64 144c26.5 0 48-21.5 48-48s-21.5-48-48-48S16 69.5 16 96s21.5 48 48 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48-208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"></path></svg>
          </button>
        </div>
        <form class="search" onSubmit={handleSearch}>
          <input type="text" placeholder="Search for a movie" value={query()} onInput={({target}) => setQuery((target as HTMLInputElement).value)} />
        </form>
      </header>
      <section class="card-grid" style={{"gap": `${view() === 'grid' ? "1.25rem" : "0.75rem"}`}}>
        <Show when={filtered()?.results.length !== 0} fallback={<Loader />}>
          <Switch>
            <Match when={view() === "grid"}>
              <For each={filtered()?.results}>{data => (
                <GridCard data={data} />
              )}</For>
            </Match>
            <Match when={view() === "list"}>
              <For each={filtered()?.results}>{data => (
                <ListCard data={data} />
              )}</For>
            </Match>
          </Switch>
        </Show>
      </section>  
      <footer>
        <button onClick={() => setPage(page() - 1)} disabled={page() === 1}>Previous</button>
        <span>{page()}</span>
        <button onClick={() => setPage(page() + 1)} disabled={page() === (filtered()?.total_pages!)}>Next</button>
      </footer>
    </>)
  }