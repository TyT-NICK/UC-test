import { SearchParams } from '../types/SearchParams';
import { MOVIE_SEARCH_PARAMS } from '../constants/searchParams';
import iterateSearchResult from '../helpers/iterateSearchResult';
import { Movie } from '@/utils/types/Movie';
import { api } from '../api';

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

  try {
    const data = await api.getMovies({ page, search });

    if (data.Response !== 'True') {
      throw new Error(data.Error);
    }

    return {
      items: await iterateSearchResult(data.Search),
      total: Number.parseInt(data.totalResults),
    };
  } catch (e: any) {
    console.error(e);

    return {
      error: e,
    };
  }
}
