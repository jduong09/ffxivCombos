import styles from '@/app/page.module.css';
import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const MeleeDpsCombos = ({ jobName, normalArray, burstArray, dungeonPackArray }) => {
  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });
  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsDungeon = dungeonPackArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['meleeDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderBurstDiv = () => {
    if (jobName === 'monk') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Burst Combo</h2>
            <div className={styles.info}>In burst, we will want to reach 3 beast chakra and both nadi, in order to use <b>Masterful Blitz</b> and get <b>Tornado Kick</b>/<b>Phantom Rush</b> used. Before starting the burst, we want to have Disciplined Fist buff up. <b>Perfect Balance</b> and then using an action that grants three different chakras, Opo-opo, Coeurl, and Raptor, followed up with <b>Masterful Blitz</b>, will execute <b>Flint Strike</b>, opening up the lunar nadi.</div>
            <div className={styles.info}>Then we use <b>Perfect Balance</b> again, and this type we are looking for a total of 2 different beast chakras. <b>Celestial Revolution</b> will be able to be used, and the lunar nadi will be opened. Finally we can use one more <b>Perfect Balance</b>, use 3 unique beast chakras and finish the burst with <b>Tornado Kick</b>, our highest potency move.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-mnk-burst" src="https://www.youtube.com/embed/Nbj6q4WweJo?si=VWJBNDIZhgIxO36i" title='Monk burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === 'ninja') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Burst Combo</h2>
            <div className={styles.info}>Ninjas burst will start by making sure we have Huton buff. Post lvl 60, we can start the burst with <b>Huraijin</b>, giving us the Huton buff. From here, we can use <b>Ten Chi Jin</b>, allowing us to mudras as ninjutsu actions. Note: You cannot move when using <b>Ten Chi Jin</b>. We will use <b>Ten</b> (Fuma Shuriken) - <b>Chi</b> (Raiton) - <b>Jin</b> (Suiton), allowing us to use <b>Trick Attack</b>, followed up with <b>Mug</b></div>
            <div className={styles.info}>Now we have our Huton Buff, and the enemy is weakened, we can use <b>Kassatsu</b> and execute <b>Hyosho Ranryu</b>, and apply our dot with <b>Doton</b>. Any leftover mudra cooldowns in the burst window can be used on <b>Raiton</b> with <b>Fleeting Raiju</b>. Make sure to weave in <b>Bhavacakra</b> and <b>Dream within a Dream</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-nin-burst" src="https://www.youtube.com/embed/5Ry_goPaGgI?si=coGgFCiXtzXO6q0O" title='Ninja burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === 'samurai') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Burst Combo</h2>
            <div className={styles.info}>Samurai will actively have Fugetsu and Fuka buffs up, and in preparation they should have a <b>Meikyo Shisui</b> ready to be used and <b>Tsubame-gaeshi</b>. Start with <b>Meikyo Shisui</b>, and use <b>Gekko</b>, <b>Yukikaze</b>, and <b>Kasha</b> in any order. This will grant us 3 Sen, allowing us to use <b>Midare Setsugekka</b>. Follow that up with <b>Tsubame-gaeshi</b>.</div>
            <div className={styles.info}>While we are executing those 3 moves to get our Sen, remember to use oGCD&apos;s that will cost Kenki gauge, specifically <b>Hissatsu:Senei</b> when it&apos;s off cooldown, and <b>Hissatsu: Shinten</b>.</div>
            <div className={styles.info}>Then use <b>Ikishoten</b> to increase Kenki Gauge by 50 for more <b>Hissatsu: Senei</b>, but to allow uss to use <b>Ogi Namikiri</b> followed up by <b>Kaeshi: Namikiri</b>. This should give sus 3 stacks up meditation, allowing us to finish the burst phase with <b>Shoha</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-sam-burst" src="https://www.youtube.com/embed/f6h-ytPJrl0?si=l27utMmyRN9j4sm9" title='Samurai burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === 'dragoon') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Burst Combo</h2>
            <div className={styles.info}>The first thing to do is use <b>Battle Litany</b> to give raidwide damage buffs. You should have been building up your Dragon Gauge with <b>Geirskogul</b>. While under Life of the Dragon we can use <b>Life Surge</b> to guarentee next action is critical damage, and follow up with <b>Stardiver</b>, our most potent move. Utilize <b>Nastrond</b> while the dragon gauge is decreasing, and maintain our normal combo.</div>
            <div className={styles.info}>Weave in <b>High Jump</b>, followed up with <b>Mirage Dive</b> and <b>Spineshatter Dive.</b></div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-drg-burst" src="https://www.youtube.com/embed/cTuQLU6TXh4?si=_yUEkGxRcPz3REGm" title='Dragoon burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>   
      )
    } else {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>Burst Combo</h2>
            <div className={styles.info}>In burst phase, Reaper will utilize <b>Arcane Circle</b> as a raidwide buff. Use <b>Enshroud</b> when your shroud gauge is 50, allowing us to use enhanced moves. <b>Gluttony</b> grants 2 stacks of soul reaver, allowing us to use <b>Void Reaping</b> followed up by <b>Cross Reaping</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-rpr-burst" src="https://www.youtube.com/embed/E5-VtdcHJFg?si=mmJq_-zdG8MYn9LY" title='Reaper burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div> 
      )
    }
  }

  const renderNormalDiv = () => {
    if (jobName === 'monk') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>In general, Monk&apos;s attack abilities can only be executed in a certain form, which starts from <b>Bootshine</b>, and will continue to combo into other forms. Start with <b>Bootshine</b> and enter raptor form, and that will allow you to use <b>True Strike</b>. True Strike will turn change you form to Coeurl. Follow up True Strike with <b>Snap Punch</b> from the target&apos;s flank.</div>
            <div className={styles.info}>Outside of the general combo, certain forms will allow you to use separate abilities. Monk has a DoT, <b>Demolish</b>. This can only be executed in Coeurl form. So we get there by doing <b>Bootshine</b> - <b>True Strike</b> - <b>Demolish</b>.</div>
            <div className={styles.info}>The other thing to manage for Monk is the buff Disciplined Fist. Disciplined Fist effect increases damage effect by 15%, and lasts 15 seconds. So every 15 seconds, we need to to use <b>Bootshine</b> - <b>Twin Snakes</b> - <b>Snap Punch</b> to maintain Disciplined Fist.</div>
          </div>
        </div>
      )
    } else if (jobName === 'ninja') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Ninjas normal 1-2-3 is <b>Spinning Edge</b> - <b>Gust Slash</b> - <b>Aeolian Edge</b> (rear).</div>
            <div className={styles.info}>Ninjas use ninjutsus called mudras for a myriad of purposes, and one of them is a buff that will reduce weaponskill cooldowns. We will need to use <b>Huton</b>, which will require us to use 3 mudras and end on the Ten mudra.</div>
          </div>
        </div>
      )
    } else if (jobName === 'samurai') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Samurai&apos;s normal combo can be a few different things, because we want to create Sen. To create Sen, we use 3 different combos, which in turn grant 3 different Sen. The first Ka is Fuka, which is granted by <b>Hakaze</b> - <b>Shifu</b> - <b>Kasha</b> (flank). Fuka will reduce weaponskill cast time and recast time. Always keep Fuka buff up.</div>
            <div className={styles.info}>The other buff that needs to always be up is Fugetsu. This is gained by doing <b>Hakaze</b> - <b>Jinpu</b> - <b>Gekko</b> (rear). Fugetsu will give us increased damage dealt by 13%. Finishing the combo with <b>Gekko</b> will grant Getsu.</div>
            <div className={styles.info}>The final Sen to get is Setsu, which is accomplished by 2 actions, <b>Hakaze</b> with <b>Yukikaze</b>. Performing this will gives us 3 unique Sen, allowing massive single target damage with <b>Midare Setsugekka</b>.</div>
          </div>
        </div>
      )
    } else if (jobName === 'dragoon') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Dragoon&apos;s have a buff, Power Surge, that will increase damage dealt by 10%. This is achieved through the combo <b>True Thrust</b> - <b>Vorpal Thrust</b> - <b>Disembowel</b>. Use this to keep that buff up, it is a 30 second buff.</div>
            <div className={styles.info}>The normal combo will be <b>True Thrust</b> - <b>Vorpal Thrust</b> - <b>Full Thrust</b>, which at later levels will combo into <b>Fang and Claw</b>.</div>
            <div className={styles.info}>At level 50, Dragoon can use <b>Chaos Thrust</b> after <b>Disembowel</b>, to influct a 40 potent DoT for 24 seconds. This will grant Wheel in Motion, allowing us to finish the combo with <b>Wheeling Thrust.</b></div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div className={styles.info}>Reaper&apos;s normal combo is <b>Slice</b> - <b>Waxing Slice</b> - <b>Infernal Slice</b>. Lots of slicing. Use <b>Shadow of Death</b> to inflict Death&apos;s Design on the enemy, increase damage you do by 10%.</div>
            <div className={styles.info}>Use <b>Blood Stalk</b> with <b>Gibbet</b> (flank) or <b>Gallows</b> (rear).</div>
          </div>
        </div>
      )
    }
  }

  const renderDungeonDiv = () => {
    if (jobName === 'monk') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>In dungeon packs, we will do similar things to our single target moves. <b>Arm of the Destroyer</b> changes our form to raptor, followed up with <b>Four-point Fury</b> to change to Coeurl form, and finished up with <b>Rockbreaker</b>.</div>
          </div>
        </div>
      )
    } else if (jobName === 'ninja') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>AOE moves for ninja are <b>Death Blossom</b> followed up by <b>Hakke Mujinsatsu</b>. Reminder to keep Huton buff by either starting with <b>Huraijin</b> or using mudras before the pull begins. Expend your Ninki gauge with <b>Hellfrog Medium</b>. Mudras should be used to execute <b>Katon</b> and if you have <b>Kassatsu</b>, then execute <b>Goka Mekkyaku</b>.</div>
          </div>
        </div>
      )
    } else if (jobName === 'samurai') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>Samurais in dungeon packs will utilize two different combos in order to gather 2 different Sens in order to use a final move. Start with <b>Fuga</b> and then use either <b>Mangetsu</b> for Getsu, or <b>Oka</b> for Ka Sen. Once we have our two sen, use <b>Iaijutsu</b>, and execute <b>Tenka Goken</b>.</div>
            <div className={styles.info}>Weave in <b>Hissatsu: Guren</b>, <b>Hissatsu: Kyuten</b> when you have the Kenki Gauge for it.</div>
          </div>
        </div>
      )
    } else if (jobName === 'dragoon') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>Dragoon have access to <b>Doom Spike</b> at level 40. Prior to that, the pre-Dragoon class, Lancer will have to use single target moves at all times. <b>Doom Spike</b> is followed up with <b>Sonic Thrust</b>, which is an attack that AOEs in a line in front of the user. At level 72, finish the combo with <b>Coerthan Torment</b>.</div>
            <div className={styles.info}>Utilize oGCD&apos;s, most of Dragoon&apos;s kit are AOEs. <b>Geirskogul</b> is on a 30 second cooldown, and <b>Dragonfire Dive</b> is on a 120 second cooldown.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div className={styles.info}>For dungeons, use <b>Spinning Scythe</b> with <b>Nightmare Scythe</b>. Use <b>Whorl of Death</b> to increase damage you do to the pack. At 50 soul gauge, use <b>Grim Swathe</b> with <b>Guillotine</b>.</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={classPageStyles.divMainContainer}>
      {renderBurstDiv()}
      {renderNormalDiv()}
      {renderDungeonDiv()}
    </div>
  );
}

export default MeleeDpsCombos;