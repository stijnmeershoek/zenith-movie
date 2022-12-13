export async function request<T>(url: string,  signal: AbortSignal, page?: number): Promise<T> {
    const res = await fetch(`https://api.themoviedb.org/3${url}api_key=c91380e87602d7394898bced749c5ef8&language=en-US${page ? `&page=${page}` : ""}`, {
      signal: signal
    });
    if(!res.ok) {
      return Promise.reject(new Error(res.statusText))
    }
    const json: T = await res.json();
    return Promise.resolve(json);
}

export async function search<T>(type: "tv" | "movie", page: number, query: string, signal: AbortSignal) {
  return await request<Fetch<T>>(`/search/${type}?query=${query}&`, signal, page);
}

export async function fetchPopular<T>(type: "tv" | "movie", page: number, signal: AbortSignal) {
  return await request<Fetch<T>>(`/trending/${type}/week?`, signal, page);
}

export async function fetchSpecific<T>(type:"tv" | "movie", id: string, signal: AbortSignal) {
  return await request<T>(`/${type}/${id}?`,signal);
}

export async function fetchTorrents(id: string, signal: AbortSignal): Promise<Torrent[]> {
  const res = await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${id}&quality=720p,1080p,2160p`, {
    signal: signal
  })

  const json = await res.json();

  if (!json.data.movies || json.data.movies[0].torrents.length <= 0) return Promise.reject('No torrents available.');

  const torrents: Torrent[] = json.data.movies[0].torrents;
  return Promise.resolve(torrents);
};

export function download(url: string, name: string) {
  fetch(url)
    .then((resp) => resp.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${name}.torrent`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
};
