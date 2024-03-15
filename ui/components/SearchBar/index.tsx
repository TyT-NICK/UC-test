'use client';

import { ChangeEvent, useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { NAV_SEARCH_PARAMS } from '@/utils/constants/searchParams';

import search from '~/icons/search.svg';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push: navigateTo } = useRouter();

  const [value, setValue] = useState(searchParams.get('search') || '');

  function handleSearch() {
    if (!value) {
      return navigateTo(pathname);
    }

    const searchParams = new URLSearchParams();
    searchParams.set(NAV_SEARCH_PARAMS.search, value);

    navigateTo(`${pathname}?${searchParams.toString()}`);
  }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setValue(value);
  }

  function handleKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        className={styles.input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Image src={search} alt="search icon" onClick={handleSearch} className={styles.searchIcon} />
    </div>
  );
}
