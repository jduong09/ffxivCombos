import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';
import HeaderComponent from '@/components/htmlComponent/header';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function DragoonPage() {
  const normalArray = ["True Thrust", "Vorpal Thrust", "Full Thrust"];
  const burstArray = ["Battle Litany", "Lance Charge", "Life Surge", "Stardiver", "True Thrust", "High Jump", "Mirage Dive", "Vorpal Thrust", "Disembowel", "Jump", "Chaos Thrust", "Wheeling Thrust", "Fang and Claw"];
  const dungeonPackArray = ["Battle Litany", "Dragonfire Dive", "Geirskogul", "Nastrond", "Life Surge", "Stardiver", "Nastrond", "Nastrond"];
  const defensiveActions = ["Second Wind", "Bloodbath"];
  const roleActions = ["Feint", "True North"];
  const jobSpecificActions = ["Battle Litany", "Dragon Sight"];
  return (
    <div>
      <HeaderComponent jobAcronym='DRG' jobName='dragoon' />
      <main>
        <Combos jobName='dragoon' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='dragoon' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={jobSpecificActions} />
      </main>
      <FooterComponent />
    </div>
  )
}