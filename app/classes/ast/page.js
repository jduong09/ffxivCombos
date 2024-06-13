import HeaderComponent from '@/components/htmlComponent/header';
import HealerCombo from '@/components/jobCombos/healer/healerCombo';
import DefensiveActions from '@/components/jobCombos/healer/defensiveActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function AstrologianPage() {
  const normalArray = ["Combust III", "Malefic IV"];
  const firstPack = ["Earthly Star", "Aspected Benefic", "Exaltation", "Macrocosmos", "Microcosmos"];
  const secondPack = ["Aspected Benefic", "Neutral Sect", "Essential Dignity", "Celestial Intersection"];
  return (
    <div>
      <HeaderComponent jobAcronym='AST' jobName='astrologian' />
      <main>
        <HealerCombo jobName='astrologian' normalArray={normalArray} />
        <DefensiveActions jobName='astrologian' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
}