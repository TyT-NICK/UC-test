import SearchInfo from '@/ui/components/SearchInfo';
import Welcoming from '@/ui/components/Welcoming';
import { Movie } from '@/utils/types/Movie';

type Props = {
  items?: Movie[];
  total?: number;
  search?: string;
};

export default function Home({ items, search, total = 0 }: Props) {
  const noResult = search && total === 0;

  return (
    <main>
      {search && <SearchInfo search={search} total={total} />}
      {!search && <Welcoming />}
    </main>
  );
}
