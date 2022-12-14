
import { useNavigate } from '@solidjs/router';
import { Show, createMemo } from 'solid-js';
import '../Card.css'

interface Props {
    data: Movie | TV
}

export function GridCard(props: Props) {
  const navigate = useNavigate()
  const title = createMemo(() => isMovie(props.data) ? props.data.title : props.data.original_name);
  const date = createMemo(() => isMovie(props.data) ? props.data.release_date : props.data.first_air_date);

  function isMovie(movie: any): movie is Movie{
    return (movie as Movie).title !== undefined;
  }

  return (
    <article class="grid-card" onClick={() => navigate(`${props.data.id}`)}>
      <Show when={props.data.poster_path !== null} fallback={<img src={`${new URL('/missing.jpg', import.meta.url).href}`} alt='image not found' />}>
          <img src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path} alt={title()} />
      </Show>
      <section aria-label='movie info' class="info">
        <div>
          <h2>{title()}</h2>
          <div><Show when={isMovie(props.data) && props.data.adult}><span>18+</span><div class="line"></div></Show><span>{props.data.vote_average}/10</span><div class="line"></div><time datetime={date()}>{date()?.slice(0,4)}</time></div>
        </div>
        <p>{props.data.overview}</p>
      </section>
    </article>
  );
}
