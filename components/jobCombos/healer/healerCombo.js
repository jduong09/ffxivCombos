import React from 'react';
import jobStyles from '../../../app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const HealerCombo = ({ jobName, normalArray }) => {
  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  return (
    <div>
      <div className={jobStyles.trademark}>All icons are property of SQUARE-ENIX Ltd 1 second ago all rights reserved</div>
      <div className={jobStyles.jobActionsContainer}>
        <h2>DoT + GCD Combo</h2>
        <div className={jobStyles.jobActionCombo}>
          <ul className={jobStyles.listJobAction}>{listItemsNormal}</ul>
          {/*
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-normal" src="http://www.youtube.com/embed//jeKN0lqrfg4" title="paladin normal combo" allowFullScreen/>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default HealerCombo;