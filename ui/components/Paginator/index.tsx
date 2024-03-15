import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';

import { NAV_SEARCH_PARAMS } from '@/utils/constants/searchParams';

import styles from './Paginator.module.css';

type Props = {
  total: number;
};

export default function Paginator({ total }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push: navigateTo } = useRouter();

  const totalPages = Math.ceil(total / 10);
  const currentSearch = searchParams.get(NAV_SEARCH_PARAMS.search)!;

  function handlePageChange({ selected }: { selected: number }) {
    const searchParams = new URLSearchParams();
    searchParams.set(NAV_SEARCH_PARAMS.search, currentSearch);

    if (selected > 0) {
      searchParams.set(NAV_SEARCH_PARAMS.page, (selected + 1).toString());
    }

    navigateTo(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      breakLabel="..."
      pageRangeDisplayed={2}
      previousLabel="<"
      nextLabel=">"
      className={styles.paginator}
      pageClassName={styles.item}
      activeClassName={styles.activeItem}
      onPageChange={handlePageChange}
    />
  );
}
