import HeaderComponent from '@/components/htmlComponent/header';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function PaladinPage() {
  const normalArray = ["Fast Blade", "Riot Blade", "Royal Authority"];
  const burstArray = ["Fight or Flight", "Holy Spirit", "Expiacion", "Circle of Scorn", "Requiescat", "Intervene", "Goring Blade", "Confiteor", "Intervene", "Blade of Faith", "Blade of Truth", "Blade of Valor", "Atonement", "Atonement"];
  const dungeonArray = ["Total Eclipse", "Prominence", "Holy Circle"];
  const firstPack = ["Arm's Length", "Sentinel", "Holy Sheltron"];
  const secondPack = ["Rampart", "Reprisal", "Bulwark", "Holy Sheltron"];
  return (
    <div>
      <HeaderComponent jobAcronym='PLD' jobName='paladin' />
      <main>
        <TankPageCombos jobName='paladin' normalArray={normalArray} burstArray={burstArray} dungeonArray={dungeonArray} />
        <DefensiveCooldowns jobName='paladin' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
}