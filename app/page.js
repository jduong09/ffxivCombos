"use client";

import styles from "./page.module.css";
import Image from "next/image";
import landingPage from "@/app/landingPage.module.css";
import HeaderComponent from "@/components/htmlComponent/header";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <main className={styles.main}>
        <div className={landingPage.divHero}>
          <div>
            <h1>From Sprout to Blossomed Player</h1>
            <div className={styles.info}>Soppo&apos;s Guide is filled with dps combos, dungeons pack rotation advice, role action use and job glam.</div>
          </div>
          <div className={landingPage.heroImageContainer}>
            <Image className={landingPage.heroGIF} src={'/black_mage_burst.gif'} width='276' height='156' alt='gif of soppo black mage burst combo' unoptimized={true}/>
          </div>
        </div>
        <div className={landingPage.divStruggles}>
          <ul className={landingPage.listStruggles}>
            <li>
              <h3>Forgot Rotations?</h3>
              <div className={landingPage.divImageContainer}>
                <Image id='img-thinking' className={landingPage.imageStruggles} src={'/emotes/soppo_thinking_crop.png'} width='547' height='845' alt='emote soppo thinking' />
              </div>
            </li>
            <li>
              <h3>Bottom of Damage List?</h3>
              <div className={landingPage.divImageContainer}>
                <Image id='img-confused' className={landingPage.imageStruggles} src={'/emotes/soppo_confused_crop.png'} width='818' height='806' alt='emote soppo confused' />
              </div>
            </li>
            <li>
              <h3>Always Floor Tank?</h3>
              <div className={landingPage.divImageContainer}>
                <Image id='img-play-dead' className={landingPage.imageStruggles} src={'/emotes/soppo_play_dead_crop.png'} width='634' height='622' alt='emote soppo play dead' />
              </div>
            </li>
          </ul>
          <div>
            <div>
              <h2>Helpful for any type of player!</h2>
              <span className={styles.info}>With this guide, new players can learn a combo for when the fight begins, 2-minute bursts, or what AOE attacks to use between dungeons.</span>
              <span className={styles.info}>Returning players can brush up on combos as well, reminding themselves of tank mitigations to use in dungeon packs, and healer skills to combine.</span>
            </div>
            <div>
              <a href='/classes'>Check out Classes</a>
            </div>
          </div>
        </div>
        <div className={landingPage.divHousing}>
          <div>
            <h2>Browse Soppo&apos;s housing progress over time!</h2>
            <span className={styles.info}>With Dawntrail on the horizon, Soppo will provide outfits to their little housing journey. Try out the little minigame, find the sleeping Soppo in the images!</span>
            <a href='/housing'>Browse Housing Blogs</a>
          </div>
          <ul className={landingPage.listHousingImages}>
            <li>
              <Image className={landingPage.imageHousing} src={'/housing/house_front.png'} width='0' height='0' sizes="100vw" alt='image of soppos house' />
            </li>
            <li>
              <Image className={landingPage.imageHousing} src={'/housing/house_front_side.png'} width='0' height='0' sizes="100vw" alt='image of house picnic area' />
            </li>
          </ul>
        </div>
        <div className={landingPage.divFashion}>
          <div>
            <h2>Soppo&apos;s Gallery of Fashion</h2>
            <span className={styles.info}>Browse Soppos closet, chalk full of outfits for tanks, healers and damage dealers!</span>
            <a className={landingPage.linkFashion} href='/fashion'>Check out Fashion</a>
          </div>
          <div className={landingPage.slider}>
            <a href='#slide-1'></a>
            <a href='#slide-2'></a>
            <a href='#slide-3'></a>
            <a href='#slide-4'></a>
            <a href='#slide-5'></a>
            <ul className={landingPage.slides}>
              <li id='slide-1'>
                <Image className={landingPage.imageFashion} src={'/fashion/soppo_astrologian_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of astrologian soppo' />
              </li>
              <li id='slide-2'>
                <Image className={landingPage.imageFashion} src={'/fashion/soppo_black_mage_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of black mage soppo' />
              </li>
              <li id='slide-3'>
                <Image className={landingPage.imageFashion} src={'/fashion/soppo_dragoon_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of dragoon soppo' />
              </li>
              <li id='slide-4'>
                <Image className={landingPage.imageFashion} src={'/fashion/soppo_gunbreaker_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of gunbreaker soppo' />
              </li>
              <li id='slide-5'>
                <Image className={landingPage.imageFashion} src={'/fashion/soppo_machinist_4_29_24.png'} width='0' height='0' sizes="100vw" alt='image of machinist soppo' />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
