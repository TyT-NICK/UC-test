'use client';

import { useState } from 'react';
import Image from 'next/image';

import person from '~/icons/person.svg';

import styles from './Person.module.css';

const defaultName = 'Artem Kuroptev';

export default function Person() {
  const [name, setName] = useState(defaultName);

  function handleClick() {
    const name = prompt('Enter your name');

    if (!name) return;

    setName(name);
  }

  return (
    <div className={styles.person} onClick={handleClick} role="button">
      <Image src={person} alt="person icon" />

      <span>{name}</span>
    </div>
  );
}
