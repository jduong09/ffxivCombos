import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function RedMagePage() {
  const normalArray = ["Verthunder", "Verfire", "Jolt", "Veraero", "Verstone"];
  const burstArray = ["Verthunder", "Verfire", "Jolt", "Veraero", "Verstone", "Corps-a-corps", "Riposte", "Zwerchhau", "Redoublement", "Displacement", "Fleche", "Acceleration", "Verthunder", "Verfire"];
  const dungeonPackArray = ["Embolden", "Scatter", "Acceleration", "Contre Sixte", "Impact"];
  const defensiveActions = ["Verraise"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  return (
    <div>
      
      <HeaderComponent jobAcronym='RDM' jobName='red mage' />
      <main>
        <Combos jobName='red mage' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='red mage' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
      <FooterComponent />
    </div>
  )
}