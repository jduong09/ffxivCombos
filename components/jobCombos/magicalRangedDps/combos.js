import classStyles from '@/app/classes/classes.module.css';
import classPageStyles from '@/app/classes/classPage.module.css';
import { ffxivActions } from '@/app/api';

const Combos = ({ jobName, normalArray, burstArray, dungeonPackArray }) => {
  const listItemsNormal = normalArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });
  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const listItemsDungeon = dungeonPackArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={classStyles.jobIcon} src={`https://xivapi.com/i/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['set']}/${ffxivActions.jobActions['magicalRangedDps'][jobName][actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  });

  const renderBurstDiv = () => {
    if (jobName === 'red mage') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div>Red Mage's burst phase will start with the party buff in <b>Embolden</b>. From here, the burst depends on the Mage's Balance Gauge. <b>Acceleration</b> will remove the cast time of the next spell, so if you need white mana then use <b>Veraero</b>, and <b>Verthunder</b> if black mana is needed.</div>
            <div><b>Acceleration</b> will make the the spell's buff activate 100% of the time, so use either <b>Verfire</b> or <b>Verstone</b> follow up. If you have not reached the 50/50 mana threshold for the melee combo, continueing with the ranged attacks.</div>
            <div>Once we have over 50/50 mana, use <b>Corps-a-corps</b> to get into melee range and then use <b>Riposte</b> - <b>Zwerchhau</b> - <b>Redoublement</b>. This will grant us 3 mana stacks, allowing us to use either <b>Verflare</b> or <b>Verholy</b>. Use the correct one to guarentee the next proc.</div>
            <div>While doing this burst, weave in the two oGCD's, <b>Fleche</b> and <b>Contre Sixte</b>.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else if (jobName === 'summoner') {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div>Start the burst with <b>Ruin III</b>. Enter Bahamut Phase with <b>Summon Bahamut</b>, which enters Dreadwyrm Trance and summons Demi-Bahamut. Follow this up with <b>Searing Light</b>, giving the party a damage buff of 3%.</div>
            <div>Next we will use <b>Astral Impulse</b>, weaving in Energy Drain, <b>Astral Impulse</b>, weaving in <b>Enkindle Bahamut</b> with <b>Fester</b>. One more <b>Astral Impulse</b> followed by <b>Deathflare</b> and <b>Fester</b>.</div>
            <div>Next we summon Titan, use <b>Summon Titan II</b> and use <b>Topaz Rite</b> with <b>Mountain Buster</b> 4 times.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboWithVideo}>
          <div className={classPageStyles.divInfo}>
            <h2>2 Minute Window</h2>
            <div>For Black Mage's burst, we will start with <b>Sharpcast</b> - <b>Thunder IV</b> to ensure we can use a thunder spell again and get the DoT. Follow this up with <b>Ley Lines</b>, and then <b>Blizzard III</b> - <b>Blizzard IV</b>.</div>
            <div>Go into fire moves, <b>Fire III</b> into 3 casts of <b>Fire IV</b>. To keep our astral fire, use <b>Paradox</b>. Depending on the mana, use <b>Fire IV</b> and <b>Manafont</b> to restore some mana.</div>
            <div>Reapply the DoT, use polyglot in astral fire phase, and when almost out of mana, use <b>Despair</b> to expend all mana. Follow this up with <b>Blizzard III</b> and repeat the loop from the start.</div>
          </div>
          <div className={classPageStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
          <ul className={classPageStyles.listJobAction}>{listItemsBurst}</ul>
        </div>
      )
    }
  }

  const renderNormalDiv = () => {
    if (jobName === 'red mage') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div>Red Mage's kit revolves around the buff Dualcast. This buff is granted upon casting any spell with a cast time. This buff will make the next spell require no time to cast.</div>
            <div>Therefore, we will normally use <b>Jolt</b> because it has the lower cooldown, and this will allow us to dualcast into either <b>Verthunder</b> or <b>Veraero</b>.</div>
            <div>Both <b>Verthunder</b> and <b>Veraero</b> have a 50% chance of granting a buff, which will allow the use of <b>Verfire</b> and <b>Verstone</b>, respectively.</div>
          </div>
        </div>
      )
    } else if (jobName === 'summoner') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div>Summoner uses <b>Ruin</b> mainly, and summons different carbuncles to execute attacks. <b>Aethercharge</b> increases the potency of Ruin-based moves by 50. <b>Aethercharge</b> will grant Ruby Arcanum, Topaz Arcanum and Emerald Arcanum.</div>
            <div>Here, we can summon from these three pets, Ifrit, Garuda and Titan. This will allow us to use <b>Gemshine</b> based on which element we summoned.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsNormal}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Normal Combo</h2>
            <div>Black Mage's normal combo is gathering Umbral Hearts through using <b>Blizzard IV</b> and going from <b>Blizzard III</b> to <b>Fire III</b>. Doing this enters Astral Fire state, allowing us to use <b>Fire IV</b> where those spells will consume no MP.</div>
            <div>Black Mage has two DoT spells, <b>Thunder III</b> and <b>Thunder IV</b>. Use <b>Thunder IV</b> at the start of the pack, and for each tick of the 18 second DoT, there is a 3% chance the next thunder spell will have no cast time and no mp. If this chance happens, use <b>Thunder III</b> to reapply the debuff.</div>
            <div>Black Mage will also manage Polyglot, at a max of 2 stored. This will allow Black Mage to use <b>Xenoglossy</b> for Single Target, and <b>Foul</b> for groups of enemies.</div>
          </div>
        </div>
      )
    }
  };

  const renderDungeonDiv = () => {
    if (jobName === 'red mage') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div>Red Mage's AOE attacks are opposite to how you use their single target attacks. <b>Scatter</b> is the longer cooldown ability, so we will use either <b>Verthunder II</b> or <b>Veraero II</b>, get the dualcast and then use <b>Scatter</b>.</div>
            <div>Contre Sixte is an AOE oGCD, so use when off cooldown, and if you are maxing on balance gauge, dive in and use <b>Moulinet</b></div>
            <div>Moulinet will add mana stack, so at 3 stacks we either use <b>Verflare</b> or <b>Verholy</b>.</div>
          </div>
        </div>
      )
    } else if (jobName === 'summoner') {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div>For dungeon packs, use <b>Ruin IV</b>.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classPageStyles.divComboNoVideo}>
          <ul className={classPageStyles.listJobAction}>{listItemsDungeon}</ul>
          <div className={classPageStyles.divInfo}>
            <h2>Dungeon Combos</h2>
            <div>Black Mage's AOE will start with <b>Blizzard III</b> into <b>Blizzard IV</b> to get the 3 Umbral Hearts. Enter Astral Fire with <b>High Fire II</b> and expend Mana by recasting <b>High Fire II</b>.</div>
            <div>When almost out of mana, use <b>Flare</b> and expend all mana. Use any polyglot stacks with <b>Foul</b>.</div>          </div>
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

export default Combos;