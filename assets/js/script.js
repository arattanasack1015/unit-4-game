//Global Variables
var 

//Charactes
var kenKanaki = {
    firstName: "Kaneki",
    lastName: "Ken",
    alias: "Eyepatch",
    kaguneType: "",
    countertype: "",
    hpStat: 0,
    attackStat: 0,
    defenseStat: 0,
    spAttackStat: 0,
    spDefenseStat: 0,
    evadeStat: 0,

};

var jason = {
    firstName: "Yakumo",
    lastName: "Oomori",
    alias: "Jason",
    kaguneType: "",
    countertype: "",
    hpStat: 250,
    attackStat: 0,
    defenseStat: 0,
    spAttackStat: 0,
    spDefenseStat: 0,
    evadeStat: 0,

};

var koutarouAmon = {
    firstName: "",
    lastName: "",
    alias: "",
    kaguneType: "",
    countertype: "",
    hpStat: 350,
    attackStat: 0,
    defenseStat: 0,
    spAttackStat: 0,
    spDefenseStat: 0,
    evadeStat: 0,

};

var kirishimaTouka = {
    firstName: "",
    lastName: "",
    alias: "Rabbit",
    kaguneType: ["Ukaku"],
    countertype: ["Kouhaku"],
    hpStat: 0,
    attackStat: 0,
    defenseStat: 0,
    spAttackStat: 0,
    spDefenseStat: 0,
    evadeStat: 0,

};

var kirishimaAyato = {
    firstName: "",
    lastName: "",
    alias: "Black Rabbit",
    kaguneType: ["Ukaku"],
    countertype: ["Kouhaku"],
    hpStat: 0,
    attackStat: 0,
    defenseStat: 0,
    spAttackStat: 0,
    spDefenseStat: 0,
    evadeStat: 0,

};

characters = [
{
    name: "kaneki",
    alias: "eyepatch",
    kaguneType: ["rinkaku"],
    countertype: [""],

    hpStat: {
        current: 1400,
        total: 1400
    },

    attackStat: 180,
        attacks: [
            {
                name:"strike",
                dmg: attackStat * randomNum(2.14, 1.32),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:"heavy slam",
                dmg: attackStat * randomNum(3.14, 2.32),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:"kagune barrage",
                dmg: spAttackStat * randomNum(3.5, 3.2),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:"flying slam",
                dmg: spAttackStat * randomNum(5, 3),
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
    name: "yamori",
    alias: "jason",
    kaguneType: ["rinkaku"],
    countertype: ["bikaku"],

    hpStat: {
        current: 2600,
        total: 2600
    },

    attackStat: 230,
        attacks: [
            {
                name:"strike",
                dmg: attackStat * randomNum(2.14, 1.32),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:"heavy slam",
                dmg: attackStat * randomNum(3.14, 2.32),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:"kagune grapple",
                dmg: spAttackStat * randomNum(4, 2.8),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:"mighty hammer",
                dmg: spAttackStat * randomNum(5.3, 3.8),
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

]


//Functions
function randomNum(max, min){
    // generate a random number
  
    // min not required
    if(min === undefined || min === '' || min === null){
      // min default value
      min = 0;
    }
  
    // random number, yay
    return Math.floor(Math.random() * (max - min) + min);
  }

