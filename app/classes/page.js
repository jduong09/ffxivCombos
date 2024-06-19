import styles from '../page.module.css';
import classStyles from '@/app/classes/classes.module.css';
import HeaderComponent from '@/components/htmlComponent/header';
import Image from 'next/image';

export default function Classes() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div className={classStyles.divMain}>
          <ul className={classStyles.listFourSquares}>
            <li className={classStyles.book}>
              <a href="/classes/gnb">
                <div className={classStyles.cover}>
                  <h3>Gunbreaker</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/gunbreaker_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/pld">
                <div className={classStyles.cover}>
                  <h3>Paladin</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/paladin_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/war">
                <div className={classStyles.cover}>
                  <h3>Warrior</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/warrior_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/drk">
                <div className={classStyles.cover}>
                  <h3>Dark Knight</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/dark_knight_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/sch">
                <div className={classStyles.cover}>
                  <h3>Scholar</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/scholar.png' alt='class icon for gunbreaker' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/scholar_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/whm">
                <div className={classStyles.cover}>
                  <h3>White Mage</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/whitemage.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/white_mage_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/ast">
                <div className={classStyles.cover}>
                  <h3>Astrologian</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/astrologian.png' alt='class icon for warrior' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/astrologian_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/sge">
                <div className={classStyles.cover}>
                  <h3>Sage</h3>
                  <Image className={classStyles.imageClassIcon} src={'/classIcons/sage.png'} width='0' height='0' sizes='100vw' alt='class icon sage' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/sage_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/mnk">
                <div className={classStyles.cover}>
                  <h3>Monk</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/monk.png' alt='class icon for gunbreaker' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/monk_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/nin">
                <div className={classStyles.cover}>
                  <h3>Ninja</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/ninja.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/ninja_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/sam">
                <div className={classStyles.cover}>
                  <h3>Samurai</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/samurai.png' alt='class icon for warrior' />
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/samurai_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/drg">
                <div className={classStyles.cover}>
                  <h3>Dragoon</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/dragoon.png' alt='class icon for dark knight' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/dragoon_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/rpr">
                <div className={classStyles.cover}>
                  <h3>Reaper</h3>
                  <Image className={classStyles.imageClassIcon} src={'/classIcons/reaper.png'} width='0' height='0' sizes='100vw' alt='class icon sage' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/reaper_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/blm">
                <div className={classStyles.cover}>
                  <h3>Black Mage</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/blackmage.png' alt='class icon for gunbreaker' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/black_mage_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/rdm">
                <div className={classStyles.cover}>
                  <h3>Red Mage</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/redmage.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/red_mage_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/smn">
                <div className={classStyles.cover}>
                  <h3>Summoner</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/summoner.png' alt='class icon for warrior' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/summoner_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/mch">
                <div className={classStyles.cover}>
                  <h3>Machinist</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/machinist.png' alt='class icon for gunbreaker' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/machinist_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/dnc">
                <div className={classStyles.cover}>
                  <h3>Dancer</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/dancer.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/dancer_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
            <li className={classStyles.book}>
              <a href="/classes/brd">
                <div className={classStyles.cover}>
                  <h3>Bard</h3>
                  <img className={classStyles.imageClassIcon} src='https://xivapi.com/cj/1/bard.png' alt='class icon for paladin' />
                  <span>Check out Guide</span>
                </div>
                <div className={classStyles.content}>
                  <span>Check out Guide</span>
                  <Image className={classStyles.contentImageSoppo} src={'/poses_generic/bard_06_19_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}