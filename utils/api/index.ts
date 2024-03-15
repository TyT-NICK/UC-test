import { MOVIE_SEARCH_PARAMS } from '../constants/searchParams';

const apiUrl = process.env.API_URL!;
const apiKey = process.env.API_KEY!;

export const api = {
  getMovies: async function ({ page, search }: { page: number; search: string }) {
    const searchParams = new URLSearchParams();
    searchParams.set(MOVIE_SEARCH_PARAMS.apiKey, apiKey);
    searchParams.set(MOVIE_SEARCH_PARAMS.search, search);

    if (page !== 0) {
      searchParams.set(MOVIE_SEARCH_PARAMS.page, page.toString());
    }

    const res = await fetch(`${apiUrl}?${searchParams.toString()}`);
    const data = await res.json();

    return data;
  },

  getAdditionalData: async function ({ id }: { id: string }) {
    const searchParams = new URLSearchParams();
    searchParams.set(MOVIE_SEARCH_PARAMS.apiKey, apiKey);
    searchParams.set(MOVIE_SEARCH_PARAMS.id, id);

    const res = await fetch(`${apiUrl}?${searchParams.toString()}`);

    const data = await res.json();

    return { plot: data.Plot, rating: data.imdbRating };
  },
};
