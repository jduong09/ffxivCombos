import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';
import HeaderComponent from '@/components/htmlComponent/header';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function NinjaPage() {
  const normalArray = ["Spinning Edge", "Spinning Edge", "Aeolian Edge"];
  const burstArray = ["Hide", "Trick Attack", "Mug", "Huraijin", "Ten Chi Jin", "Chi", "Ten", "Jin", "Chi", "Kassatsu", "Ten", "Jin", "Dream Within a Dream", "Ten", "Chi"];
  const dungeonPackArray = ["Ten", "Jin", "Chi", "Death Blossom", "Hakke Mujinsatsu", "Hellfrog Medium", "Kassatsu", "Chi", "Ten"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Shade Shift"];
  const roleActions = ["Feint", "True North"];
  const jobSpecificActions = ["Suiton", "Trick Attack", "Mug"];
  return (
    <div>
      <HeaderComponent jobAcronym='NIN' jobName='ninja' />
      <main>
        <Combos jobName='ninja' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='ninja' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={jobSpecificActions} />
      </main>
      <FooterComponent />
    </div>
  )
}