import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';


export default async function BardPage() {
  const normalArray = ["Windbite", "Venomous Bite", "Heavy Shot", "Straight Shot"];
  const burstArray = ["Raging Strikes", "Battle Voice", "Empyreal Arrow", "Barrage", "Straight Shot", "Sidewinder", "Heavy Shot", "Straight Shot", "Bloodletter", "Bloodletter", "Bloodletter"];
  const dungeonPackArray = ["Venomous Bite", "Windbite", "Quick Nock", "Quick Nock", "Quick Nock", "Shadowbite", "Rain of Death", "Rain of Death", "Rain of Death", "Apex Arrow"];
  const defensiveActions = ["Second Wind", "Troubadour"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <HeaderComponent jobAcronym='BRD' jobName='bard' />
      <main>
        <Combos jobName='bard' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='bard' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
      <FooterComponent />
    </div>
  )
}