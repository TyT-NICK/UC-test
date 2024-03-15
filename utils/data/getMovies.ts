import { SearchParams } from '../types/SearchParams';
import { MOVIE_SEARCH_PARAMS } from '../constants/searchParams';
import iterateSearchResult from '../helpers/iterateSearchResult';
import { Movie } from '@/utils/types/Movie';

const apiUrl = process.env.API_URL!;
const apiKey = process.env.API_KEY!;

type ReturnType = {
  items?: Movie[];
  total?: number;
  error?: any;
};

export async function getMovies({ search, page = 0 }: SearchParams): Promise<ReturnType> {
  if (!search) {
    return {
      error: new Error('No argument provided'),
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set(MOVIE_SEARCH_PARAMS.apiKey, apiKey);
  searchParams.set(MOVIE_SEARCH_PARAMS.search, search);

  if (page !== 0) {
    searchParams.set(MOVIE_SEARCH_PARAMS.page, page.toString());
  }

  try {
    const res = await fetch(`${apiUrl}?${searchParams.toString()}`);
    const data = await res.json();

    if (data.Response !== 'True') {
      throw new Error(data.Error);
    }

    return {
      items: iterateSearchResult(data.Search),
      total: Number.parseInt(data.totalResults),
    };
  } catch (e: any) {
    console.error(e);

    return {
      error: e,
    };
  }
}
