import Home from '@/ui/views/Home';
import { getMovies } from '@/utils/data/getMovies';
import { SearchParams } from '@/utils/types/SearchParams';

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { page = 0, search } = searchParams;

  const { items, total } = await getMovies({ page, search });

  return <Home items={items} total={total} search={search} />;
}
