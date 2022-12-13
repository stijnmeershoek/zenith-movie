type Fetch<T> = {
    page: number,
    results: T[]
    total_pages: number,
    total_results: number,
}

type Torrent = {
    url:                string;
    hash:               string;
    quality:            string;
    type:               string;
    seeds:              number;
    peers:              number;
    size:               string;
    size_bytes:         number;
    date_uploaded:      string;
    date_uploaded_unix: number;
}


type SpecificMovie = {
    adult:                 boolean;
    backdrop_path:         string | null;
    belongs_to_collection: Object | null;
    budget:                number;
    genres:                Genre[];
    homepage:              string | null;
    id:                    number;
    imdb_id:               string | null;
    original_language:     string;
    original_title:        string;
    overview:              string | null;
    popularity:            number;
    poster_path:           string | null;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number | null;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string | null;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

type SpecificTV = {
    backdrop_path:        string | null;
    created_by:           CreatedBy[];
    episode_run_time:     number[];
    first_air_date:       string;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        string;
    last_episode_to_air:  LastEpisodeToAir;
    name:                 string;
    next_episode_to_air:  null;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string | null;
    production_companies: Network[];
    production_countries: ProductionCountry[];
    seasons:              Season[];
    spoken_languages:     SpokenLanguage[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

type Movie = {
    poster_path:       string | null;
    adult:             boolean;
    overview:          string;
    release_date:      string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    original_language: string;
    title:             string;
    backdrop_path:     string | null;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
}

type TV = {
    poster_path:       string | null;
    popularity:        number;
    id:                number;
    backdrop_path:     string | null;
    vote_average:      number;
    overview:          string;
    first_air_date:    string;
    origin_country:    string[];
    genre_ids:         number[];
    original_language: string[];
    vote_count:        number;
    name:              string;
    original_name:     string;
}

type Genre = {
    id:   number;
    name: string;
}

type ProductionCompany = {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

type ProductionCountry = {
    iso_3166_1: string;
    name:       string;
}

type SpokenLanguage = {
    iso_639_1: string;
    name:      string;
}

type CreatedBy = {
    id:           number;
    credit_id:    string;
    name:         string;
    gender:       number;
    profile_path: string;
}

type LastEpisodeToAir = {
    air_date:        Date;
    episode_number:  number;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    season_number:   number;
    still_path:      string;
    vote_average:    number;
    vote_count:      number;
}

type Network = {
    name:           string;
    id:             number;
    logo_path:      null | string;
    origin_country: string;
}

type Season = {
    air_date:      Date;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   string;
    season_number: number;
}
