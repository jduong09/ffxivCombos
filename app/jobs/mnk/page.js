import HeaderComponent from '@/components/htmlComponent/header';
import Combos from '@/components/jobCombos/meleeDps/combos';
import MeleeDpsRoleActions from '@/components/jobCombos/meleeDps/meleeDpsRoleActions';
import FooterComponent from '@/components/htmlComponent/footer';

export default async function MonkPage() {
  const normalArray = ["Bootshine", "True Strike", "Snap Punch"];
  const burstArray = ["Riddle of Earth", "Meditation", "Bootshine", "Steel Peak", "Six-sided Star", "Twin Snakes", "Snap Punch", "Dragon Kick"];
  const dungeonPackArray = ["Meditation", "Arm of the Destroyer", "Howling Fist", "Four-point Fury", "Rockbreaker"];
  const defensiveActions = ["Second Wind", "Bloodbath", "Riddle of Earth"];
  const roleActions = ["Feint", "True North"];
  const jobSpecificActions = ["Riddle of Fire", "Riddle of Earth", "Riddle of Wind", "Mantra", "Brotherhood"];
  return (
    <div>
      <HeaderComponent jobAcronym='MNK' jobName='monk' />
      <main>
        <Combos jobName='monk' normalArray={normalArray} burstArray={burstArray} dungeonPackArray={dungeonPackArray} />
        <MeleeDpsRoleActions jobName='monk' defensiveActions={defensiveActions} roleActions={roleActions} jobSpecificActions={jobSpecificActions} />
      </main>
      <FooterComponent />
    </div>
  )
}