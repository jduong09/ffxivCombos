import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';


export default async function DancerPage() {
  const normalArray = ["Cascade", "Fountain"];
  const burstArray = ["Cascade", "Reverse Cascade", "Fan Dance", "Fan Dance III", "Cascade", "Fountain", "Fountainfall", "Fan Dance II"];
  const dungeonPackArray = ["Windmill", "Bladeshower", "Windmill", "Rising Windmill", "Fan Dance II", "Fan Dance III"];
  const defensiveActions = ["Second Wind", "Shield Samba"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <HeaderComponent jobAcronym='DNC' jobName='dancer' />
      <main>
        <Combos jobName='dancer' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='dancer' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
      <FooterComponent />
    </div>
  )
}