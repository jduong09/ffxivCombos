import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function BlackMagePage() {
  const normalArray = ["Blizzard III", "Blizzard IV", "Fire IV"];
  const burstArray = ["Sharpcast", "Ley Lines", "Thunder IV", "Blizzard III", "Blizzard IV", "Fire IV", "Fire IV", "Fire IV", "Paradox", "Fire IV", "Amplifier", "Xenoglossy", "Fire IV", "Despair", "Xenoglossy", "Blizzard III", "Thunder III"];
  const dungeonPackArray = ["Sharpcast", "Thunder IV", "Triplecast", "Blizzard III", "Blizzard IV", "High Fire II", "High Fire II", "High Fire II", "High Fire II", "Foul", "Manafont", "High Fire II", "Thunder IV", "Flare"];
  const defensiveActions = ["Manaward"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  const jobSpecificActions = ["Ley Lines", "Aetherial Manipulation", "Between the Lines"];
  return (
    <div>
      <HeaderComponent jobAcronym='BLM' jobName='blackmage' />
      <main>
        <Combos jobName='black mage' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='black mage' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={jobSpecificActions} />
      </main>
      <FooterComponent />
    </div>
  )
}