import Movies from '@/ui/components/Movies';
import NoResult from '@/ui/components/NoResult';
import SearchInfo from '@/ui/components/SearchInfo';
import Welcoming from '@/ui/components/Welcoming';
import { getMovies } from '@/utils/data/getMovies';

type Props = {
  page: number;
  search?: string;
};

export default async function Home({ search, page }: Props) {
  const { items = [], total = 0 } = await getMovies({ page, search });

  const noResult = search && total === 0;

  return (
    <main>
      {search && <SearchInfo search={search} total={total} />}

      {!search && <Welcoming />}

      {noResult && <NoResult />}

      {total > 0 && <Movies movies={items} total={total} />}
    </main>
  );
}
