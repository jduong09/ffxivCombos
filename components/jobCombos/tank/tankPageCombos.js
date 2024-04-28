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
      <div className={jobStyles.jobActionsContainer}>
        <h2>Burst Combo</h2>
        <div className={jobStyles.jobActionCombo}>
          <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
          {/*
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default TankPageCombos;