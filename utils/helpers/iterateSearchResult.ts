import { Movie } from '@/utils/types/Movie';
import { api } from '../api';
import { loadAdditionalData } from '../constants/additionalLoad';

export default async function iterateSearchResult(items: any[]): Promise<Movie[]> {
  const movies: Movie[] = [];

  // It's bettere to use .map iterator here for sure, but I wanted to load additional data to display
  for (const movie of items) {
    let id = '';

    const newEntries = Object.entries(movie).map(([field, value]) => {
      const newField = field[0].toLowerCase() + field.slice(1);

      if (newField === 'poster' && value === 'N/A') return [newField, null];

      if (newField === 'imdbID') {
        id = value as string;
      }

      return [newField, value];
    });

    if (loadAdditionalData) {
      const additional = await api.getAdditionalData({ id });

      newEntries.push(...Object.entries(additional));
    }

    movies.push(Object.fromEntries(newEntries));
  }

  return movies;
}
