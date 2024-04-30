import styles from '../page.module.css';
import HeaderComponent from '@/components/htmlComponent/header';

export default function Jobs() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div>
          <h2>Tanks</h2>
          <ul>
            <li><a href="/jobs/pld">Paladin</a></li>
            <li><a href="/jobs/war">Warrior</a></li>
            <li><a href="/jobs/gnb">Gunbreaker</a></li>
            <li><a href="/jobs/drk">Dark Knight</a></li>
          </ul>
        </div>
        <div>
          <h2>Healers</h2>
          <ul>
            <li><a href="/jobs/sch">Scholar</a></li>
            <li><a href="/jobs/whm">White Mage</a></li>
            <li><a href="/jobs/ast">Astrologian</a></li>
            <li><a href="/jobs/sge">Sage</a></li>
          </ul>
        </div>
        <div>
          <h2>Ranged DPS</h2>
          <ul>
            <li><a href="/jobs/blm">Black Mage</a></li>
            <li><a href="/jobs/smn">Summoner</a></li>
            <li><a href="/jobs/mch">Machinist</a></li>
            <li><a href="/jobs/dnc">Dancer</a></li>
            <li><a href="/jobs/rdm">Red Mage</a></li>
          </ul>
        </div>
        <div>
          <h2>Melee DPS</h2>
          <ul>
            <li><a href="/jobs/sam">Samurai</a></li>
            <li><a href="/jobs/nin">Ninja</a></li>
            <li><a href="/jobs/mnk">Monk</a></li>
            <li><a href="/jobs/drg">Dragoon</a></li>
            <li><a href="/jobs/rpr">Reaper</a></li>
          </ul>
        </div>
      </main>
    </div>
  )
}