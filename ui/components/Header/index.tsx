import Image from 'next/image';

import SearchBar from '@/ui/components/SearchBar';
import Person from '@/ui/components/Person';

import logo from '~/images/logo.webp';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image src={logo} alt="logo" />

        <SearchBar />

        <Person />
      </div>
    </header>
  );
}
