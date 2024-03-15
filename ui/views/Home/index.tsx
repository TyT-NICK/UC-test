import { Movie } from '@/utils/types/Movie';

type Props = {
  items?: Movie[];
  total?: number;
  search?: string;
};

export default function Home({ items, search, total }: Props) {
  return null;
}
