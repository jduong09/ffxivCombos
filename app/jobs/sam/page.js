import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function SamuraiPage() {
  const normalArray = ["Hakaze", "Jinpu", "Shifu"];
  const burstArray = ["Hakaze", "Jinpu", "Shifu", "Hakaze", "Jinpu", "Higanbana", "Kasha", "Meikyo Shisui", "Shifu", "Yukikaze", "Midare Setsugekka", "Tsubame-gaeshi", "Kasha", "Ikishoten", "Ogi Namikiri", "Kaeshi: Namikiri", "Hissatsu: Shinten", "Hissatsu: Senei", "Hissatsu: Senei"];
  const dungeonPackArray = ["Fuko", "Mangetsu", "Fuko", "Oka", "Tenka Goken", "Tsubame-gaeshi", "Hissatsu: Kyuten", "Hissatsu: Kyuten", "Hissatsu: Guren"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Third Eye"];
  const roleActions = ["Feint", "True North"];

  return (
    <div>
      <HeaderComponent jobAcronym='SAM' jobName='samurai' />
      <main>
        <Combos jobName='samurai' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='samurai' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={[]} />
      </main>
      <FooterComponent />
    </div>
  )
}