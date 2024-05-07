import styles from '../page.module.css';
import landingPage from '@/app/landingPage.module.css';
import jobStyles from '@/app/jobs/job.module.css';
import HeaderComponent from '@/components/htmlComponent/header';
import Image from 'next/image';

export default function Jobs() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        {/*
        <ul className={jobStyles.listJobs}>
          <li>
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
          </li>
          <li>
            <div>
              <h2>Healers</h2>
              <ul>
                <li><a href="/jobs/sch">Scholar</a></li>
                <li><a href="/jobs/whm">White Mage</a></li>
                <li><a href="/jobs/ast">Astrologian</a></li>
                <li><a href="/jobs/sge">Sage</a></li>
              </ul>
            </div>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>*/}
        <div className={jobStyles.divMain}>
          <ul className={jobStyles.listClassesContainer}>
            <li className={jobStyles.listItemClassContainer}>
              <ul className={jobStyles.listFourSquares}>
                <li className={jobStyles.book}>
                  <a href="/jobs/gnb">
                    <div className={jobStyles.cover}>
                      <h3>Gunbreaker</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/pld">
                    <div className={jobStyles.cover}>
                      <h3>Paladin</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/pld">
                    <div className={jobStyles.cover}>
                      <h3>Warrior</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/pld">
                    <div className={jobStyles.cover}>
                      <h3>Dark Knight</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
              </ul>
            </li>


            <li className={jobStyles.listItemClassContainer}>
              <ul className={jobStyles.listFourSquares}>
                <li className={jobStyles.book}>
                  <a href="/jobs/sch">
                    <div className={jobStyles.cover}>
                      <h3>Scholar</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/gunbreaker.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>White Mage</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/paladin.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/ast">
                    <div className={jobStyles.cover}>
                      <h3>Astrologian</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/warrior.png' alt='class icon for warrior' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/sge">
                    <div className={jobStyles.cover}>
                      <h3>Sage</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/darkknight.png' alt='class icon for dark knight' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}