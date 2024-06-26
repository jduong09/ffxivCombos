import HeaderComponent from '@/components/htmlComponent/header';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function GunbreakerPage() {
  const normalArray = ["Keen Edge", "Brutal Shell", "Solid Barrel"];
  const burstArray = ["No Mercy", "Double Down", "Sonic Break", "Bow Shock", "Blasting Zone", "Gnashing Fang", "Jugular Rip","Rough Divide", "Savage Claw", "Abdomen Tear","Rough Divide", "Wicked Talon", "Eye Gouge", "Bloodfest", "Burst Strike", "Hypervelocity", "Burst Strike", "Hypervelocity"];
  const dungeonArray = ["Demon Slice", "Demon Slaughter"];
  const firstPack = ["Arm's Length", "Nebula", "Aurora", "Heart of Corundum"];
  const secondPack = ["Rampart", "Reprisal", "Aurora", "Heart of Corundum", "Camouflage"];
  return (
    <div>
      <HeaderComponent jobAcronym='gnb' jobName='gunbreaker' />
      <main>
        <TankPageCombos jobName='gunbreaker' normalArray={normalArray} burstArray={burstArray} dungeonArray={dungeonArray} />
        <DefensiveCooldowns jobName='gunbreaker' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  )
} 