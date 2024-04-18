import React from 'react';
import jobStyles from '../../app/jobs/job.module.css';

const PaladinCombos = async () => {
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
      "Total Eclipse": {
        icon: {
          set: '002000',
          id: '002511'
        }
      },
      "Shield Bash": {
        icon: {
          set: '000000',
          id: '000154'
        }
      },
      "Iron Will": {
        icon: {
          set: '002000',
          id: '002505'
        }
      },
      "Shield Lob": {
        icon: {
          set: '000000',
          id: '000164'
        }
      },
      "Sheltron": {
        icon: {
          set: '002000',
          id: '002510'
        }
      },
      "Sentinel": {
        icon: {
          set: '000000',
          id: '000151'
        }
      },
      "Prominence": {
        icon: {
          set: '002000',
          id: '002516'
        }
      },
      "Cover": {
        icon: {
          set: '002000',
          id: '002501'
        }
      },
      "Hallowed Ground": {
        icon: {
          set: '002000',
          id: '002502'
        }
      },
      "Bulwark": {
        icon: {
          set: '000000',
          id: '000167'
        }
      },
      "Divine Veil": {
        icon: {
          set: '002000',
          id: '002508'
        }
      },
      "Clemency": {
        icon: {
          set: '002000',
          id: '002509'
        }
      },
      "Intervention": {
        icon: {
          set: '002000',
          id: '002512'
        }
      },
      "Passage of Arms": {
        icon: {
          set: '002000',
          id: '002515'
        }
      },
      "Holy Circle": {
        icon: {
          set: '002000',
          id: '002517'
        }
      },
      "Holy Sheltron": {
        icon: {
          set: '002000',
          id: '002950'
        }
      },
    }
  }

  const roleActions = {
    "Rampart": {
      icon: {
        set: '000000',
        id: '000801'
      }
    },
    "Reprisal": {
      icon: {
        set: '000000',
        id: '000806'
      }
    },
    "Interject": {
      icon: {
        set: '000000',
        id: '000808'
      }
    },
    "Low Blow": {
      icon: {
        set: '000000',
        id: '000802'
      }
    },
    "Provoke": {
      icon: {
        set: '000000',
        id: '000803'
      }
    },
    "Arm's Length": {
      icon: {
        set: '000000',
        id: '000822'
      }
    },
    "Shirk": {
      icon: {
        set: '000000',
        id: '000810'
      }
    },
  }

  const burstArray = ["Fight or Flight", "Holy Spirit", "Expiacion", "Circle of Scorn", "Requiescat", "Intervene", "Goring Blade", "Confiteor", "Intervene", "Blade of Faith", "Blade of Truth", "Blade of Valor", "Atonement", "Atonement"];
  const listItemsBurst = burstArray.map((actionName, idx) => {
    return (
      <li key={idx}>
        <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${pld.actions[actionName]['icon']['set']}/${pld.actions[actionName]['icon']['id']}.png`} alt={`Action Icon: ${actionName}`} />
      </li>
    )
  })
  return (
    <main>
      <div className={jobStyles.trademark}>All icons are property of SQUARE-ENIX Ltd 1 second ago all rights reserved</div>
      <div className={jobStyles.jobActionsContainer}>
        <h2>1 - 2 - 3 Combo</h2>
        <div className={jobStyles.jobActionCombo}>
          <ul className={jobStyles.listJobAction}>
            <li>
              <img className={jobStyles.jobIcon} src='https://xivapi.com/i/000000/000158.png'/>
            </li>
            <li>
              <img className={jobStyles.jobIcon} src='https://xivapi.com/i/000000/000156.png'/>
            </li>
            <li>
              <img className={jobStyles.jobIcon} src='https://xivapi.com/i/000000/000155.png'/>
            </li>
            <li>
              <img className={jobStyles.jobIcon} src='https://xivapi.com/i/002000/002514.png'/>
            </li>
          </ul>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-normal" src="http://www.youtube.com/embed//jeKN0lqrfg4" title="paladin normal combo" allowFullScreen/>
          </div>
        </div>
      </div>
      <div className={jobStyles.jobActionsContainer}>
        <h2>Burst Combo</h2>
        <div className={jobStyles.jobActionCombo}>
          <ul className={jobStyles.listJobAction}>{listItemsBurst}</ul>
          <div className={jobStyles.videoContainer}>
            <iframe id="video-pld-burst" src="https://www.youtube.com/embed/i-hsMqDW2-c" title='paladin burst combo' allowFullScreen/>
          </div>
        </div>
      </div>
      <div className={jobStyles.tankDefensiveActions}>
        <h2>Defensive Cooldowns</h2>
        <div>In dungeons, combine defensive cooldowns for each pack.</div>
        <div className={jobStyles.tankDefensivePacks}>
          <h4>First Pack</h4>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${roleActions['Arm\'s Length']['icon']['set']}/${roleActions['Arm\'s Length']['icon']['id']}.png`} />
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${pld['actions']['Sentinel']['icon']['set']}/${pld['actions']['Sentinel']['icon']['id']}.png`} />
          <div>
            Arm's Length + Sentinel
          </div>
        </div>
        <div className={jobStyles.tankDefensivePacks}>
          <h4>Second Pack</h4>
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${roleActions['Rampart']['icon']['set']}/${roleActions['Rampart']['icon']['id']}.png`} />
          <img className={jobStyles.jobIcon} src={`https://xivapi.com/i/${roleActions['Reprisal']['icon']['set']}/${roleActions['Reprisal']['icon']['id']}.png`} />
          <div>Reprisal + Reprisal</div>
        </div>
      </div>
    </main>
  )
}

export default PaladinCombos;