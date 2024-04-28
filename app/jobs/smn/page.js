import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/magicalRangedDps/combos';
import MagicalRangedDpsRoleActions from '@/components/jobCombos/magicalRangedDps/magicalRangedDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function SummonerPage() {
  const normalArray = ["Ruin III", "Aethercharge", "Gemshine", "Summon Ruby"];
  const burstArray = ["Aethercharge", "Summon Ruby", "Summon Topaz", "Summon Emerald", "Energy Drain", "Energy Drain"];
  const dungeonPackArray = ["Outburst", "Precious Brilliance", "Summon Ruby", "Ruby Outburst", "Aethercharge", "Painflare", "Painflare", "Dreadwyrm Trance", "Astral Flare", "Deathflare"];
  const defensiveActions = ["Resurrection"];
  const roleActions = ["Lucid Dreaming", "Surecast", "Swiftcast"];
  return (
    <div>
      <HeaderComponent jobAcronym='SMN' jobName='summoner' />
      <main>
        <Combos jobName='summoner' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MagicalRangedDpsRoleActions jobName='summoner' defensiveActions={defensiveActions} roleActions={roleActions} />
      </main>
      <FooterComponent />
    </div>
  )
}