"use client";

import { useEffect, useRef, useState } from 'react';
import styles from '../page.module.css';
import jobStyles from '@/app/jobs/job.module.css';
import HeaderComponent from '@/components/htmlComponent/header';

const useMutationObserver = (
  ref,
  callback,
  options = {
    attributes: true,
  }
) => useEffect(() => {
  if (ref.current) {
    const observer = new MutationObserver(callback);
    observer.observe(ref.current, options);
    return () => observer.disconnect();
  }

}, [ref]);

export default function Jobs() {
  const tankRef = useRef();

  const mutationCallback = (mutationsList) => {
    for (let mutation of mutationsList) {
      console.log(mutation);
      if (mutation.type === 'attributes' && mutation.attributeName === 'name') {
        if (mutation.target.checked === true) {
          console.log('Set Timeout and then uncheck');
          setTimeout(() => {
            setTankIsChecked(false);
            console.log(mutation.target.checked)
          }, 5000)
        } 
      }
    }
  }
  useMutationObserver(tankRef, mutationCallback);
  const [tankIsChecked, setTankIsChecked] = useState(false);
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div>
          <h2>Tanks</h2>
          <div className={jobStyles.curtain}>
            <div className={jobStyles.curtainWrapper}>
              <input ref={tankRef} className={jobStyles.curtainInput} type='checkbox' checked={tankIsChecked} onChange={() => setTankIsChecked(!tankIsChecked)} />
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelLeft}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
              </div>
              <div className={jobStyles.curtainContent}>
                <ul>
                  <li><a href="/jobs/pld">Paladin</a></li>
                  <li><a href="/jobs/war">Warrior</a></li>
                  <li><a href="/jobs/gnb">Gunbreaker</a></li>
                  <li><a href="/jobs/drk">Dark Knight</a></li>
                </ul>
              </div>
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelRight}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Healers</h2>
          <div className={jobStyles.curtain}>
            <div className={jobStyles.curtainWrapper}>
              <input ref={tankRef} className={jobStyles.curtainInput} type='checkbox' checked={tankIsChecked} onChange={() => setTankIsChecked(!tankIsChecked)} />
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelLeft}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
              </div>
              <div className={jobStyles.curtainContent}>
                <ul>
                  <li><a href="/jobs/sch">Scholar</a></li>
                  <li><a href="/jobs/whm">White Mage</a></li>
                  <li><a href="/jobs/ast">Astrologian</a></li>
                  <li><a href="/jobs/sge">Sage</a></li>
                </ul>
              </div>
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelRight}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Ranged DPS</h2>
          <div className={jobStyles.curtain}>
            <div className={jobStyles.curtainWrapper}>
              <input ref={tankRef} className={jobStyles.curtainInput} type='checkbox' checked={tankIsChecked} onChange={() => setTankIsChecked(!tankIsChecked)} />
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelLeft}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
              </div>
              <div className={jobStyles.curtainContent}>
                <ul>
                  <li><a href="/jobs/blm">Black Mage</a></li>
                  <li><a href="/jobs/smn">Summoner</a></li>
                  <li><a href="/jobs/mch">Machinist</a></li>
                  <li><a href="/jobs/dnc">Dancer</a></li>
                  <li><a href="/jobs/rdm">Red Mage</a></li>
                </ul>
              </div>
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelRight}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Melee DPS</h2>
          <div className={jobStyles.curtain}>
            <div className={jobStyles.curtainWrapper}>
              <input ref={tankRef} className={jobStyles.curtainInput} type='checkbox' checked={tankIsChecked} onChange={() => setTankIsChecked(!tankIsChecked)} />
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelLeft}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
              </div>
              <div className={jobStyles.curtainContent}>
                <ul>
                  <li><a href="/jobs/sam">Samurai</a></li>
                  <li><a href="/jobs/nin">Ninja</a></li>
                  <li><a href="/jobs/mnk">Monk</a></li>
                  <li><a href="/jobs/drg">Dragoon</a></li>
                  <li><a href="/jobs/rpr">Reaper</a></li>
                </ul>
              </div>
              <div className={`${jobStyles.curtainPanel} ${jobStyles.curtainPanelRight}`}>
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}