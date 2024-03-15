import Home from '@/ui/views/Home';
import { SearchParams } from '@/utils/types/SearchParams';

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const { page = 0, search } = searchParams;

  return <Home />;
}
