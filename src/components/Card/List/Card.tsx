
import { useNavigate } from '@solidjs/router';
import { Show, createMemo } from 'solid-js';
import '../Card.css'

interface Props {
    data: Movie | TV
}

export function ListCard(props: Props) {
  const navigate = useNavigate()
  const title = createMemo(() => isMovie(props.data) ? props.data.title : props.data.original_name);

  function isMovie(movie: any): movie is Movie{
    return (movie as Movie).title !== undefined;
  }

  return (
    <article class="list-card" onClick={() => navigate(`${props.data.id}`)}>
      <Show when={props.data.poster_path !== null} fallback={<img src="/missing.jpg" alt='image not found' />}>
          <img src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path} alt={title()} />
      </Show>
      <section aria-label='movie info' class="info">
        <h2>{title()}</h2>
        <p>{props.data.overview}</p>
      </section>
    </article>
  );
}
