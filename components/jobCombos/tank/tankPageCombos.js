import React from 'react';
import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const TankPageCombos = ({ jobName, normalArray, burstArray }) => {

  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['tank'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderNormalDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div>
          <div>Gunbreaker's normal combo of <b>Keen Edge</b> - <b>Brutal Shell</b> - <b>Solid Barrel</b> is simple enough. Using this combo gives the Gunbreaker a barrier, and also restores their own hp. The other benefit of the 1-2-3 combo is at the combo action of Solid barrel will add a cartridge to your powder gauge for when you need it in burst phase.</div>
          <div>A couple of things to remember when playing gunbreaker. We should always be using our 1-2-3 combo while not in burst phase. If we are ever going to be capped on cartridges, remember to use <b>Burst Strike</b> followed by <b>Hypervelocity</b>. Finally, one of our defensive mitigation skills, <b>Heart of Stone</b> (<b>Heart of Corundum</b> at higher levels). When using either ability while under the buff <b>Brutal Shell</b> from the 1-2-3 combo, we can give the effects to another party member.</div>
        </div>
      )
    } else if (jobName === "paladin") {
      return (
        <div>
          <div>Paladin's normal combo at early levels does not grant any buffs or benefits. When <b>Royal Authority</b> is unlocked at level 60, finishing the <b>Fast Blade</b> - <b>Riot Blade</b> - <b>Royal Authority</b> combo grants Paladin 3 stacks of <b>Sword Oath</b> and <b>Divine Might</b>.</div>
          <div>The 3 stacks of Sword's Oath grant the Paladin the ability to use <b>Atonement</b>, a GCD attack that will restore MP. The other buff we get is Divine Might, will will allow us to use one <b>Holy Spirit</b> or <b>Holy Circle</b> without the cast time, making those spells instant for one attack.</div>
          <div>In general, use atonement when it is available, and always use your instant cast of <b>Holy Spirit</b> or <b>Holy Circle</b></div>
        </div> 
      )
    } else if (jobName === "dark knight") {
      return (
        <div>
          <div>Dark Knight's 1-2-3 combo of <b>Hard Slash</b> - <b>Syphon Strike</b> - <b>Souleater</b> restore both HP and MP, while increasing the Blood Gauge by 20 for one successful combo.</div>
          <div>Due to how MP expensive Dark Knight's damage output is, it is important to do the combo correctly. When Dark Knight's Blood Gauge has reached 50, we can cast <b>Bloodspiller</b>.</div>
        </div>
      )
    } else {
      return (
        <div>
          <div><b>Heavy Swing</b> - <b>Maim</b> - <b>Storm's Path</b> grants the Warrior 30 Beast Gauge, and restores their own HP by a potency of 250.</div>
          <div>The Beast Gauge will be used for the burst combo, where we use a bunch of Fell Cleave's. Outside of the normal 1-2-3 combo, there is a 1-2-3 combo that will grant the user increased damage, which is <b>Heavy Swing</b> - <b>Maim</b> - <b>Storm's Eye</b>.</div>
          <div>Finishing this combo gives the Warrior <b>Surging Tempest</b>, granting increased damage by 10% for 30 seconds. We can do this combo twice and max the duration to 60 seconds.</div>
        </div>
      )
    }
  }

  const renderBurstDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div className={jobStyles.divComboWithVideo}>
          <h2>Gunbreaker: 2 Minute Window</h2>
          <div className={jobStyles.divInfo}>
            <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
            <div>The key to Gunbreaker's burst combo is having 3 cartridges in the powder gauge. You obtain 1 cartridge for each 1-2-3 combo, and 3 cartridges for using the skill "Bloodfest". The goal is to either have <b>BloodFest</b> ready when <b>No Mercy</b> is coming off cooldown, or to have 3 cartridges in the powder gauge already prepared.</div>
            <div>Once you are prepared to enter the burst, you use <b>No Mercy</b> followed by either <b>Double Down</b> or <b>Gnashing Fang</b> combo. In this burst, we need to use our oGCDs <b>Sonic Break</b> <b>Blasting Zone</b> <b>Bow Shock</b>.</div>
          </div>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
        </div>
      );
    } else if (jobName === "paladin") {
      return (
        <div className={jobStyles.divComboWithVideo}>
          <h2>2 Minute Window</h2>
          <div className={jobStyles.divInfo}>
            <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
            <div>For Paladin, we want to optimize our burst by timing our 1-2-3 combo to finish right before <b>Fight or Flight</b> comes off cooldown. This will give us 1 free use of <b>Holy Spirit</b> to start our burst window. This will also give us 3 atonements to use at the end of the burst window.</div>
            <div>If done correctly, we should fit our whole combo in and finish with 2 of the 3 atonements used in the burst window.</div>
          </div>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
        </div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div className={jobStyles.divComboWithVideo}>
          <h2>2 Minute Window</h2>
          <div className={jobStyles.divInfo}>
            <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
            <div>Dark Knight's burst window requires you to have the buff Darkside up. This means that we need MP, because we will use <b>Edge of Darkness</b> (3000 MP).</div>
            <div>Once we have Darkside up, we can start our burst window. Burn through our MP with Edge of Darkness Spam, weaving in our oGCDs (Carve and Spit & Bloodspiller). Then we can use Delirium to get 3 non-mp costing bloodspillers.</div>
          </div>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
        </div>
      )
    } else {
      return (
        <div className={jobStyles.divComboWithVideo}>
          <h2>2 Minute Window</h2>
          <div className={jobStyles.divInfo}>
            <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
            <div>Warriors burst window is fairly simple. It's called Fell Cleave spam. We will start by buffing our damage with <b>Inner Release</b>. Follow that up with our biggest potency attack, <b>Primal Rend</b>.</div>
            <div>Using Inner Release, we execute 3 <b>Fell Cleaves</b>, follow that up with a upheaval, and then use Infuriate to increase our beast gauge and execute the upgraded Fell Cleave, <b>Inner Chaos</b>.</div>
          </div>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
        </div>
      )
    }
  }

  const renderNonBurstDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div className={jobStyles.divNonBurst}>
          <h2>Non 2-Minute Window</h2>
          <div>While <b>No Mercy</b> is on cooldown (60 seconds), we should be able to get in one <b>Gnashing Fang</b> combo, and one use of <b>Blasting Zone</b>. It is relatively simple, use our normal 1-2-3 combo to obtain cartridges, and try to have 3 cartridges in the powder gauge for when No Mercy is going to be used.</div>
        </div>
      )
    } else if (jobName === "paladin") {
      return (
        <div>
          <h2>Non 2-Minute Window</h2>
          <div>While we wait our next burst window, paladin will spam the 1-2-3 combo, and use any free <b>Holy Spirit</b> procs we get. Use atonement when it is available.</div>
          <div>The key thing to remember for non-burst window is to time the 1-2-3 combo to end when <b>Fight or Flight</b> is coming off cooldown. The 1-2-3 combo should take 6 seconds, so we should be starting our last 1-2-3 combo when Fight or Flight has 6 seconds of cooldown left.</div>
        </div>
      )
    } else if (jobName === "dark knight") {
      return (
        <div>
          <h2>Non 2-Minute Window</h2>
          <div>After our burst window is on finished, we need to be mindful of our mana. This is particularly important because we use mana for tank buster mitigation with <b>The Blackest Night</b>. We should always have Darkside up, as it gives us 10% increase in damage.</div>
          <div><b>Blood Weapon</b> is our go to ability in order to restore our mana. It will grant us 5 stacks of Blood Weapon, which will restore MP when using weapon skills. Combo this ability with our normal 1-2-3 and get our mana to max for the next burst window.</div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Non 2-Minute Window</h2>
          <div>Warriors non burst window is fairly simple. We want to use one <b>Upheaval</b> when it comes off cooldown, and keep our <b>Surging Tempest</b> buff up, which we get from combo finishing with Storm's Eye. So we have our normal 1-2-3 combo, with occasionally using <b>Storm's Eye</b> instead of <b>Storm's Path`</b>.</div>
        </div>
      )
    }
  }

  return (
    <div>
      {renderBurstDiv()}
      {renderNonBurstDiv()}
      <div className={jobStyles.divNormal}>
        <h2>Normal Combo</h2>
        <ul className={jobStyles.listJobAction}>{listItemsNormal}</ul>
        {renderNormalDiv()}
      </div>
    </div>
  )
}

export default TankPageCombos;