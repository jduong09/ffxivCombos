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

  const renderBurstDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div>
          <h2>Gunbreaker: 2 Minute Window</h2>
          <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
          <div>The key to Gunbreaker's burst combo is having 3 cartridges in the powder gauge. You obtain 1 cartridge for each 1-2-3 combo, and 3 cartridges for using the skill "Bloodfest". The goal is to either have <b>BloodFest</b> ready when <b>No Mercy</b> is coming off cooldown, or to have 3 cartridges in the powder gauge already prepared.</div>
          <div>Once you are prepared to enter the burst, you use <b>No Mercy</b> followed by either <b>Double Down</b> or <b>Gnashing Fang</b> combo. In this burst, we need to use our oGCDs <b>Sonic Break</b> <b>Blasting Zone</b> <b>Bow Shock</b>.</div>
          {/*
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>*/}``
        </div>
      );
    } else if (jobName === "paladin") {
      return (
        <div>
          <h2>2 Minute Window</h2>
          <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
          <div>For Paladin, we want to optimize our burst by timing our 1-2-3 combo to finish right before <b>Fight or Flight</b> comes off cooldown. This will give us 1 free use of <b>Holy Spirit</b> to start our burst window. This will also give us 3 atonements to use at the end of the burst window.</div>
          <div>If done correctly, we sohuld fit our whole combo in and finish with 2 of the 3 atonements used in the burst window.</div>
        </div>
      )
    } else if (jobName === "dark knight") {
      <div>
        <h2>2 Minute Window</h2>
        <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
        <div>Dark Knight's burst window requires you to have the buff Darkside up. This means that we need MP, because we will use <b>Edge of Darkness</b> (3000 MP).</div>
        <div>Once we have Darkside up, we can start our burst window. Burn through our MP with Edge of Darkness Spam, weaving in our oGCDs (Carve and Spit & Bloodspiller). Then we can use Delirium to get 3 non-mp costing bloodspillers.</div>
      </div>
    } else {
      return (
        <div>
          <h2>2 Minute Window</h2>
          <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
          <div>Warriors burst window is fairly simple. It's called Fell Cleave spam. We will start by buffing our damage with <b>Inner Release</b>. Follow that up with our biggest potency attack, <b>Primal Rend</b>.</div>
          <div>Using Inner Release, we execute 3 <b>Fell Cleaves</b>, follow that up with a upheaval, and then use Infuriate to increase our beast gauge and execute the upgraded Fell Cleave, <b>Inner Chaos</b>.</div>
        </div>
      )
    }
  }

  const renderNonBurstDiv = () => {
    if (jobName === "gunbreaker") {
      return (
        <div>
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
      <div className={jobStyles.jobActionsContainer}>
        <h2>1 - 2 - 3 Combo</h2>
        <div className={jobStyles.jobActionCombo}>
          <ul className={jobStyles.listJobAction}>{listItemsNormal}</ul>
          {/*
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-normal" src="http://www.youtube.com/embed//jeKN0lqrfg4" title="paladin normal combo" allowFullScreen/>
          </div>*/}
        </div>
      </div>
      {renderBurstDiv()}
      {renderNonBurstDiv()}
    </div>
  )
}

export default TankPageCombos;