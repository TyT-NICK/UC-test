import { Suspense } from 'react';

import Home from '@/ui/views/Home';
import { SearchParams } from '@/utils/types/SearchParams';

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { page = 0, search = '' } = searchParams;

  return (
    <Suspense fallback={<p>Loading content...</p>} key={JSON.stringify({ page, search })}>
      <Home page={page} search={search} />
    </Suspense>
  );
}
