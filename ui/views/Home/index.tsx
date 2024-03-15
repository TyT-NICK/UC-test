import Movies from '@/ui/components/Movies';
import SearchInfo from '@/ui/components/SearchInfo';
import Welcoming from '@/ui/components/Welcoming';
import { Movie } from '@/utils/types/Movie';

type Props = {
  items?: Movie[];
  total?: number;
  search?: string;
};

export default function Home({ search, items = [], total = 0 }: Props) {
  const noResult = search && total === 0;

  return (
    <main>
      {search && <SearchInfo search={search} total={total} />}

      {!search && <Welcoming />}

      {total > 0 && <Movies movies={items} total={total} />}
    </main>
  );
}
