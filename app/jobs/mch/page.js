import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/physicalRangedDps/combos';
import PhysicalRangedDpsRoleActions from '@/components/jobCombos/physicalRangedDps/physicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';


export default async function MachinistPage() {
  const normalArray = ["Split Shot", "Slug Shot", "Clean Shot"];
  const burstArray = ["Automaton Queen", "Barrel Stabilizer", "Wildfire", "Hypercharge", "Reassemble", "Drill", "Heat Blast", "Heat Blast", "Gauss Round", "Heat Blast", "Heat Blast", "Gauss Round", "Gauss Round", "Air Anchor", "Chain Saw"];
  const dungeonPackArray = ["Spread Shot", "Reassemble", "Bioblaster", "Ricochet", "Hypercharge", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Auto Crossbow", "Ricochet", "Ricochet"];
  const defensiveActions = ["Second Wind", "Tactician", "Dismantle"];
  const roleActions = ["Peloton", "Head Graze"];
  return (
    <div>
      <HeaderComponent jobAcronym='MCH' jobName='machinist' />
      <main>
        <Combos jobName='machinist' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <PhysicalRangedDpsRoleActions jobName='machinist' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
      <FooterComponent />
    </div>
  )
}