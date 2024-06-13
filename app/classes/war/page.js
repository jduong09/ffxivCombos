import HeaderComponent from '@/components/htmlComponent/header';
import TankPageCombos from '@/components/jobCombos/tank/tankPageCombos';
import DefensiveCooldowns from '@/components/jobCombos/tank/defensiveCooldown';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function WarriorPage() {
  const normalArray = ["Heavy Swing", "Maim", "Storm's Eye"];
  const burstArray = ["Inner Release", "Primal Rend", "Fell Cleave", "Upheaval", "Fell Cleave","Onslaught", "Fell Cleave","Onslaught", "Infuriate", "Fell Cleave", "Heavy Swing", "Maim", "Storm's Eye"];
  const dungeonArray = ["Overpower", "Mythril Tempest"];
  const firstPack = ["Arm's Length", "Vengeance", "Bloodwhetting"];
  const secondPack = ["Rampart", "Reprisal", "Equilibrium", "Thrill of Battle"];
  return (
    <div>
      <HeaderComponent jobAcronym='WAR' jobName='warrior' />
      <main>
        <TankPageCombos jobName='warrior' normalArray={normalArray} burstArray={burstArray} dungeonArray={dungeonArray} />
        <DefensiveCooldowns jobName='warrior' firstPack={firstPack} secondPack={secondPack} />
      </main>
      <FooterComponent />
    </div>
  );
}