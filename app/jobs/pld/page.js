import React from 'react';
import styles from '../../page.module.css';
import ClassIcon from '../../../components/classIcon';

export default async function PaladinHome() {
  return (
    <main className={styles.main}>
      <div className={styles.jobs}>This is the Paladin Page.</div>
      <ClassIcon />
    </main>
  )
}