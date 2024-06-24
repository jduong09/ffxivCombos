import HeaderComponent from '@/components/htmlComponent/header';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function WhiteMagePage() {
  const normalArray = ["Dia", "Glare III", "Assize"];
  const firstPack = ["Asylum", "Regen", "Benediction", "Aquaveil", "Divine Benison", "Temperance"];
  const secondPack = ["Asylum", "Regen", "Divine Benison", "Afflatus Solace", "Liturgy of the Bell"];
  return (
    <div>
      <HeaderComponent jobAcronym='WHM' jobName='whitemage' />
      <main>
        <HealerCombo jobName='white mage' normalArray={normalArray} />
        <DefensiveActions jobName='white mage' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
}