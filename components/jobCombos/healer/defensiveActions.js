import jobStyles from '@/app/jobs/job.module.css';
import { ffxivActions } from '@/app/api';

const DefensiveActions = ({ jobName, firstPack, secondPack }) => {
  const listFirstPack = firstPack.map((actionName, idx) => {
      return (
        <li key={idx}>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      );
  });

  const listSecondPack = secondPack.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const renderFirstPack = () => {
    if (jobName === "scholar") {
      return (
        <div>Scholar can utilize an Aetherflow Stack to use Sacred Soil. In dungeons, we can start the pull with <b>Recitation</b> with <b>Succor</b>. This will ensure the tank gets a massive shield. Use Expedient with Whispering Dawn, and heal using succor as necessary.</div>
      )
    } else if (jobName === "white mage") {
      return (
        <div>Asylum is a much longer cooldown than Scholar's Sacred Soil, so utilize it on the first pull. The goal of a healer is to maximize damage on while healing, so we want to use oGCDs heals first. If you feel confident letting the tank drop down to near 0, then use <b>Benediction</b>. <b>Tetragrammaton</b> is our other oGCD to use.</div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div>Start with Collective Unconscious, but cancel immediately to focus on damage. Earthly Star next, and then <b>Neutral Sect</b> </div>
      )
    } else {
      return (
        <div>This pull is up to the user. Depending on who you are playing with, healer-wise, you may want to wait to use skills. Say its a white mage, they will start with a 4 second stun. Following that stun, we can let ourselves get damaged very low and then use Bloodwhetting to heal ourselves back up. Bloodwhetting with Inner Release + Decimate will heal us back to full. Follow this up with Vengeance and Arm's Length to finish the pack.</div>
      )
    }
  }

  const renderSecondPack = () => {
    if (jobName === "scholar") {
      return (
        <div>Should be able to use <b>Sacred Soil</b> again, combine that with <b>Protraction</b>. Use <b>Expedient</b> with <b>Emergency Tactics</b> + <b>Succor</b> to do some raw healing.</div>
      );
    } else if (jobName === "white mage") {
      return (
        <div>On second pull, white mage should have some lillies to use <b>Afflatus Solace</b>. If more healing is necessary, than use <b>Liturgy of the Bell</b>.</div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div>Dark Knight will use Rampart + Reprisal on second pack. Once these mits are up, we can use Dark Missionary, and Oblation and The Blackest Night.</div>
      )
    } else {
      return (
        <div>Similar to the first pack, gauge what your healer is doing and you can use no mitigation until you drop low and want to get back to full health with bloodwhetting and AOE damage. Use equillibrium as necessary, and dont forget Rampart + Reprisal.</div>
      )
    }
  }

  return (
    <div className={jobStyles.tankDefensiveActions}>
      <h2>Defensive Cooldowns</h2>
      <div>In dungeons, combine defensive cooldowns for each pack.</div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>First Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listFirstPack}</ul>
        {renderFirstPack()}
      </div>
      <div className={jobStyles.tankDefensivePacks}>
        <h4>Second Pack</h4>
        <ul className={jobStyles.listTankDefensive}>{listSecondPack}</ul>
        {renderSecondPack()}
      </div>
    </div>
  )
}

export default DefensiveActions;