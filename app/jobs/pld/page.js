import React from 'react';
import styles from '../../page.module.css';
import jobStyles from '../job.module.css';
import PaladinCombos from '../../../components/jobCombos/paladin';

export default async function PaladinHome() {
  return (
    <main className={styles.main}>
      <div className={styles.jobs}>This is the Paladin Page.</div>
      <PaladinCombos />
    </main>
  )
}