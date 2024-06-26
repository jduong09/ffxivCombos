import styles from '@/app/page.module.css';
import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const DefensiveActions = ({ jobName, firstPack, secondPack }) => {
  const listFirstPack = firstPack.map((actionName, idx) => {
      return (
        <li key={idx}>
          <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
        </li>
      );
  });

  const listSecondPack = secondPack.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['healer'][jobName][actionName]['icon']['id']}.png`} />
      </li>
    );
  });

  const renderFirstPack = () => {
    if (jobName === "scholar") {
      return (
        <div className={styles.info}>Scholar can utilize an Aetherflow Stack to use Sacred Soil. In dungeons, we can start the pull with <b>Recitation</b> with <b>Succor</b>. This will ensure the tank gets a massive shield. Use Expedient with Whispering Dawn, and heal using succor as necessary.</div>
      )
    } else if (jobName === "white mage") {
      return (
        <div className={styles.info}>Asylum is a much longer cooldown than Scholar&apos;s Sacred Soil, so utilize it on the first pull. The goal of a healer is to maximize damage on while healing, so we want to use oGCDs heals first. If you feel confident letting the tank drop down to near 0, then use <b>Benediction</b>. <b>Tetragrammaton</b> is our other oGCD to use.</div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div className={styles.info}>Start with Collective Unconscious, but cancel immediately to focus on damage. Earthly Star next, and then <b>Neutral Sect</b> </div>
      )
    } else {
      return (
        <div className={styles.info}>As I understand, Sage&apos;s healing comes mainly from DEALING DAMAGE. <b>Kardia&apos;s</b> ability text states that restoring HP after casting certain magic attacks&apos;. So using Sage&apos;s damage ability, <b>Dosis</b>, will cure the person with the effect Kardion by a potency of 170. Can start the pull with <b>Eukrasia</b> with <b>Eukrasian Diagnosis</b>. We can also start with <b>Kerachole</b>.</div>
      )
    }
  }

  const renderSecondPack = () => {
    if (jobName === "scholar") {
      return (
        <div className={styles.info}>Should be able to use <b>Sacred Soil</b> again, combine that with <b>Protraction</b>. Use <b>Expedient</b> with <b>Emergency Tactics</b> + <b>Succor</b> to do some raw healing.</div>
      );
    } else if (jobName === "white mage") {
      return (
        <div className={styles.info}>On second pull, white mage should have some lillies to use <b>Afflatus Solace</b>. If more healing is necessary, than use <b>Liturgy of the Bell</b>.</div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div className={styles.info}>On second pack we can use <b>Exaltation</b> on the tank, and we should have excess to <b>Horoscope</b> after using a number of cards. Use any <b>Essential Dignity</b> stacks before using a GCD such as <b>Benefic II</b></div>
      )
    } else {
      return (
        <div className={styles.info}>On second pull, you should have some addersgall stack to use <b>Zoe</b> with <b>Taurochole</b>.</div>
      )
    }
  }

  const renderTankBuster = () => {
    if (jobName === "scholar") {
      return (
        <div className={styles.info}>Scholar has access to <b>Recitate</b>. This will give our next shield a guarenteed critical, so very big shield. This should be enough usually, if its a multi-tankbuster, we can combine this with damage mitigation tool, such as <b>Whispering Dawn</b>.</div>
      )
    } else if (jobName === "white mage") {
      return (
        <div className={styles.info}>White Mage&apos;s shield ability is <b>Divine Benison</b>. I like to combine this with <b>Aquaveil</b> for some shield and damage mitigation. Adding a <b>Regen</b> is nice to have, guarenteeing that tanks will have some healing after.</div>
      )
    } else if (jobName === "astrologian") {
      return (
        <div className={styles.info}>Astrologian uses <b>Neutral Sect</b>, which will erect a barrier when using either <b>Aspected Benefic</b> or <b>Aspected Helios</b>. So combine it with <b>Aspected Benefic</b> for tankbusters.</div>
      )
    } else {
      return (
        <div className={styles.info}>Sages tankbuster mitigation is <b>Eukrasia</b> and <b>Eukrasian Diagnosis</b>. If the person who got hit with the tankbuster needs some healing, we can follow that up with <b>Taurochole</b>.</div>
      )
    }
  }

  return (
    <div className={classPageStyles.tankDefensiveActions}>
      <h2>Defensive Cooldowns</h2>
      <div className={styles.info}>In dungeons, combine defensive cooldowns for each pack.</div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>First Pack</h4>
        <ul className={classPageStyles.listTankDefensive}>{listFirstPack}</ul>
        {renderFirstPack()}
      </div>
      <div className={classPageStyles.tankDefensivePacks}>
        <h4>Second Pack</h4>
        <ul className={classPageStyles.listTankDefensive}>{listSecondPack}</ul>
        {renderSecondPack()}
      </div>
      <div className={classPageStyles.tankDefensiveActions}>
        <h2>Tankbusters</h2>
        <div className={styles.info}>Tankbusters will be used by the enemy in boss fights usually. Many times they are telegraphed with an indicator, sometimes they are not. Each healer has different tools to handle these.</div>
        {renderTankBuster()}
      </div>
    </div>
  );
}

export default DefensiveActions;