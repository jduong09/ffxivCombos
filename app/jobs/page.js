import styles from '../page.module.css';
import jobStyles from '@/app/jobs/job.module.css';
import HeaderComponent from '@/components/htmlComponent/header';
import Image from 'next/image';

export default function Jobs() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
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
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/gnb_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
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
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/pld_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
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
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/war_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
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
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/drk_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
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
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/scholar.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/sch_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>White Mage</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/whitemage.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/whm_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/ast">
                    <div className={jobStyles.cover}>
                      <h3>Astrologian</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/astrologian.png' alt='class icon for warrior' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/ast_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/sge">
                    <div className={jobStyles.cover}>
                      <h3>Sage</h3>
                      <Image className={jobStyles.imageClassIcon} src={'/classIcons/sage.png'} width='0' height='0' sizes='100vw' alt='class icon sage' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/sch_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li className={jobStyles.listItemClassContainer}>
              <ul className={jobStyles.listSixSquares}>
                <li className={jobStyles.book}>
                  <a href="/jobs/sch">
                    <div className={jobStyles.cover}>
                      <h3>Monk</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/monk.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/mnk_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>Ninja</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/ninja.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/nin_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/ast">
                    <div className={jobStyles.cover}>
                      <h3>Samurai</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/samurai.png' alt='class icon for warrior' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/sam_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/sge">
                    <div className={jobStyles.cover}>
                      <h3>Dragoon</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/dragoon.png' alt='class icon for dark knight' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/drg_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/sge">
                    <div className={jobStyles.cover}>
                      <h3>Reaper</h3>
                      <Image className={jobStyles.imageClassIcon} src={'/classIcons/reaper.png'} width='0' height='0' sizes='100vw' alt='class icon sage' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/rpr_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li className={jobStyles.listItemClassContainer}>
              <ul className={jobStyles.listSixSquares}>
                <li className={jobStyles.book}>
                  <a href="/jobs/sch">
                    <div className={jobStyles.cover}>
                      <h3>Black Mage</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/blackmage.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/blm_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>Red Mage</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/redmage.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/rdm_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/ast">
                    <div className={jobStyles.cover}>
                      <h3>Summoner</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/summoner.png' alt='class icon for warrior' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/smn_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/sch">
                    <div className={jobStyles.cover}>
                      <h3>Machinist</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/machinist.png' alt='class icon for gunbreaker' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/mch_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>Dancer</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/dancer.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/dnc_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
                    </div>
                  </a>
                </li>
                <li className={jobStyles.book}>
                  <a href="/jobs/whm">
                    <div className={jobStyles.cover}>
                      <h3>Bard</h3>
                      <img className={jobStyles.imageClassIcon} src='https://xivapi.com/cj/1/bard.png' alt='class icon for paladin' />
                    </div>
                    <div className={jobStyles.content}>
                      <span>Check out Guide</span>
                      <Image className={jobStyles.contentImageSoppo} src={'/poses_generic/brd_generic_05_08_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
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