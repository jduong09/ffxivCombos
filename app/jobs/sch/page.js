import HeaderComponent from '@/components/htmlComponent/header';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function ScholarPage() {
  const normalArray = ["Bio II", "Broil IV"];
  const firstPack = ["Sacred Soil", "Recitation", "Adloquium", "Expedient"];
  const secondPack = ["Sacred Soil", "Excogitation", "Expedient", "Protraction"];
  return (
    <div>
      <HeaderComponent jobAcronym='SCH' jobName='scholar' />
      <main>
        <HealerCombo jobName='scholar' normalArray={normalArray} />
        <DefensiveActions jobName='scholar' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
}