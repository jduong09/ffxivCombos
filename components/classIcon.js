import React from 'react';

const ClassIcon = async () => {
  const pld = {
    actions: {
      "Fast Blade": {
        icon: {
          set: '000000',
          id: '000158'
        },
      },
      "Riot Blade": {
        icon: {
          set: '000000',
          id: '000156'
        }
      },
      "Rage of Halone": {
        icon: {
          set: '000000',
          id: '000156'
        }
      },
      "Royal Authority": {
        icon: {
          set: '000000',
          id: '000156'
        }
      },
      "Holy Spirit": {
        icon: {
          set: '002000',
          id: '002514'
        }
      },
      "Fight or Flight": {
        icon: {
          set: '000000',
          id: '000166'
        }
      },
      "Spirits Within": {
        icon: {
          set: '002000',
          id: '002503'
        }
      },
      "Expiacion": {
        icon: {
          set: '002000',
          id: '002951'
        }
      },
      "Circle of Scorn": {
        icon: {
          set: '000000',
          id: '000161'
        }
      },
      "Requiescat": {
        icon: {
          set: '002000',
          id: '002513'
        }
      },
      "Intervene": {
        icon: {
          set: '002000',
          id: '002520'
        }
      },
      "Goring Blade": {
        icon: {
          set: '002000',
          id: '002506'
        }
      },
      "Confiteor": {
        icon: {
          set: '002000',
          id: '002518'
        }
      },
      "Blade of Faith": {
        icon: {
          set: '002000',
          id: '002952'
        }
      },
      "Blade of Truth": {
        icon: {
          set: '002000',
          id: '002953'
        }
      },
      "Blade of Valor": {
        icon: {
          set: '002000',
          id: '002954'
        }
      },
      "Atonement": {
        icon: {
          set: '002000',
          id: '002519'
        }
      },
    }
  }

  const burstArray = ["Fight or Flight", "Holy Spirit", "Expiacion", "Circle of Scorn", "Requiescat", "Intervene", "Goring Blade", "Confiteor", "Intervene", "Blade of Faith", "Blade of Truth", "Blade of Valor", "Atonement", "Atonement"];
  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <h3>{actionName}</h3>
        <img className='icon' src={`https://xivapi.com/i/${pld.actions[actionName]['icon']['set']}/${pld.actions[actionName]['icon']['id']}.png`} />
      </li>
    )
  })
  return (
    <main>
      <h1>Class Icon</h1>
      <div id="div-basic-combo">
        <h2>1 - 2 - 3 Combo</h2>
        <ul>
          <li>
            <h3>Fast Blade</h3>
            <img className='icon' src='https://xivapi.com/i/000000/000158.png'/>
          </li>
          <li>
            <h3>Riot Blade</h3>
            <img className='icon' src='https://xivapi.com/i/000000/000156.png'/>
          </li>
          <li>
            <h3>Rage of Halone/Royal Authority</h3>
            <img className='icon' src='https://xivapi.com/i/000000/000155.png'/>
          </li>
          <li>Grants Free MP</li>
          <li>
            <h3>Holy Spirit</h3>
            <img className='icon' src='https://xivapi.com/i/002000/002514.png'/>
          </li>
        </ul>
      </div>
      <div id="div-burst">
        <h2>Burst Combo</h2>
        <ul>{listItemsBurst}</ul>
      </div>
    </main>
  )
}

export default ClassIcon;