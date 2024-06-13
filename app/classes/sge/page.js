import HeaderComponent from '@/components/htmlComponent/header';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function SagePage() {
  const normalArray = ["Kardia", "Dosis"];
  const firstPack = ["Kerachole", "Zoe", "Haima"];
  const secondPack = ["Taurochole", "Pneuma", "Druochole" ];
  return (
    <div>
      <HeaderComponent jobAcronym='SGE' jobName='sage' />
      <main>
        <HealerCombo jobName='sage' normalArray={normalArray} />
        <DefensiveActions jobName='sage' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
}