//Global Variables
var 
    typeSprite = '',
    types = [],
    gameData = {}
    attackName = '',
    curAttack = {},
    randInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0;

//Characters
function buildVars(){
//phase of game
gameData = {
    step: 1,
    hero: {},
    enemy: {}
}

// action sequence
  attackName = '';
  curAttack = {};
  randInt = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;

    
characters = [
{
    name: "kaneki",
    alias: "eyepatch",
    kaguneType: ["rinkaku"],
    countertype: [""],
    img: {
        default: "https://freepngimg.com/download/tokyo_ghoul/32528-1-kaneki-ken-transparent.png",

        kagune: "https://vignette.wikia.nocookie.net/tokyo-ghoul-re-birth/images/e/e3/BlueNeki.png/revision/latest?cb=20190211022306",
    },

    hpStat: {
        current: 1400,
        total: 1400
    },

    attackStat: 180,
        attacks: [
            {
                name:"strike",
                dmg: this.attackStat * randomNum(2.14, 1.32),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:"heavy slam",
                dmg: this.attackStat * randomNum(3.14, 2.32),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:"kagune barrage",
                dmg: this.spAttackStat * randomNum(3.5, 3.2),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:"flying slam",
                dmg: this.spAttackStat * randomNum(5, 3),
                uses: {
                    total: 5,
                    remaining: 5,   
            }
            },
            

        ],
    defenseStat: 75,
    spAttackStat: 250,
    spDefenseStat: 65,
    evadeStat: 70, 
},

{
    name: "touka",
    alias: "rabbit",
    kaguneType: ["ukaku"],
    countertype: ["kouhaku"],
    img: {
        default: "https://vignette.wikia.nocookie.net/p__/images/f/f9/Touka_Kirishima.png/revision/latest?cb=20150310023104&path-prefix=protagonist",

        kagune: "https://www.trzcacak.rs/myfile/full/297-2971278_freetoedit-tokyoghoul-tokyo-touka-toukakirishima-toukax-tokyo-ghoul.png"
    },

    hpStat: {
      current: 1200,
      total: 1200,
    },
    attackStat: 150,
      attacks: [
        {
        name:"strike",
        dmg: this.attackStat * randomNum(2.14, 1.32),
        uses: {
            total: 30,
            remaining: 30,
        }
    },

    {
        name:"leg sweep",
        dmg: this.attackStat * randomNum(2.5, 1.6),
        uses: {
            total: 30,
            remaining: 30,   
    }
    },
    
    {
        name:"needle storm",
        dmg: this.spAttackStat * randomNum(3.5, 3.2),
        uses: {
            total: 15,
            remaining: 15,   
    }
    },
    
    
    {
        name:"rolling thunder",
        dmg: this.spAttackStat * randomNum(5.25, 4),
        uses: {
            total: 5,
            remaining: 5,   
    }
    },
      ],
    defenseStat: 70,
    spAttackStat: 265,
    spDefenseStat: 65,
    evadeStat: 90,
},

{
    name: "yamori",
    alias: "jason",
    kaguneType: ["rinkaku"],
    countertype: ["bikaku"],
    img: {
        default: "https://vignette.wikia.nocookie.net/tokyoghoul/images/f/f8/Yamori_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20141004200044",

        kagune: "https://i.pinimg.com/originals/87/a9/81/87a981a184c55f5cd3546579287bf349.png",
    },

    hpStat: {
        current: 2600,
        total: 2600
    },

    attackStat: 230,
        attacks: [
            {
                name:"strike",
                dmg: this.attackStat * randomNum(2.14, 1.32),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:"heavy slam",
                dmg: this.attackStat * randomNum(3.14, 2.32),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:"kagune grapple",
                dmg: this.spAttackStat * randomNum(4, 2.8),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:"mighty hammer",
                dmg: this.spAttackStat * randomNum(5.3, 3.8),
                uses: {
                    total: 5,
                    remaining: 5,   
            }
            },
            

        ],
    defenseStat: 65,
    spAttackStat: 200,
    spDefenseStat: 75,
    evadeStat: 30, 
},

]}
