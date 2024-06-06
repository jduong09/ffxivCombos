import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';
import HeaderComponent from '@/components/htmlComponent/header';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function DarkKnightPage() {
  const normalArray = ["Hard Slash", "Syphon Strike", "Souleater"];
  const burstArray = ["Edge of Shadow", "Shadowbringer", "Shadowbringer", "Edge of Shadow", "Edge of Shadow", "Blood Weapon", "Delirium", "Bloodspiller", "Salted Earth", "Bloodspiller", "Salt and Darkness","Bloodspiller", "Carve and Spit","Edge of Shadow",];
  const firstPack = ["Arm's Length", "Shadow Wall", "The Blackest Night"];
  const secondPack = ["Rampart", "Reprisal", "Oblation", "The Blackest Night"];
  return (
    <div>
      <HeaderComponent jobAcronym='DRK' jobName='dark knight' />
      <main>
        <TankPageCombos jobName='dark knight' normalArray={normalArray} burstArray={burstArray} />
        <DefensiveCooldowns jobName='dark knight' firstPack={firstPack} secondPack={secondPack}  />
      </main>
      <FooterComponent />
    </div>
  )
}