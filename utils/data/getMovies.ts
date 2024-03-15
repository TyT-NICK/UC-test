import { SearchParams } from '../types/SearchParams';

const apiUrl = process.env.API_URL!;
const apiKey = process.env.API_KEY!;

export async function getMovies({ search, page = 0 }: SearchParams) {
  if (!search) return;

  const searchParams = new URLSearchParams();
  searchParams.set('apiKey', apiKey);
  searchParams.set('s', search);

  if (page !== 0) {
    searchParams.set('page', page.toString());
  }

  try {
    const res = await fetch(`${apiUrl}?${searchParams.toString()}`);
    const data = await res.json();

    if (data.Response !== 'True') {
      throw new Error(data.Error);
    }

    return {
      items: data.Search,
      total: data.totalResults,
    };
  } catch (e) {
    console.error(e);
  }
}
