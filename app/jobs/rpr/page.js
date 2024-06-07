import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function ReaperPage() {
  const normalArray = ["Slice", "Waxing Slice", "Infernal Slice"];
  const burstArray = ["Arcane Circle", "Shadow of Death", "Blood Stalk", "Gibbet", "Blood Stalk", "Gallows", "Enshroud", "Void Reaping", "Cross Reaping", "Void Reaping", "Cross Reaping", "Void Reaping"];
  const dungeonPackArray = ["Arcane Circle", "Whorl of Death", "Spinning Scythe", "Nightmare Scythe", "Grim Swathe", "Guillotine"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Arcane Crest"];
  const roleActions = ["Feint", "True North"];
  const jobSpecificActions = ["Arcane Crest", "Arcane Circle"];
  return (
    <div>
      <HeaderComponent jobAcronym='RPR' jobName='reaper' />
      <main>
        <Combos jobName='reaper' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='reaper' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={jobSpecificActions} />
      </main>
      <FooterComponent />
    </div>
  )
}