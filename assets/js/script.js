//Global Variables
var 
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
//Phase of Game
gameData = {
    step: 1,
    player: {},
    enemy: {}
}

//Battle Sequence Variables
  attackName = '';
  curAttack = {};
  randInt = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;

    
characters = [ //Start Characters
//Kaneki Stats
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

//Touka Stats
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

//Jason Stats
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

//Ayato Stats
{
    name: "ayato",
    alias: "black rabbit",
    kaguneType: ["ukaku"],
    countertype: ["kouhaku"],
    img: {
        default: "https://vignette.wikia.nocookie.net/tokyoghoul/images/b/bd/Ayato_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20150209220017",

        kagune: "https://www.sccpre.cat/mypng/full/403-4034315_fanculomyass-tokyo-ghoul-jail-ayato.png"
    },

    hpStat: {
      current: 1450,
      total: 1450,
    },
    attackStat: 170,
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
        name:"rolling typhoon",
        dmg: this.spAttackStat * randomNum(6.25, 4),
        uses: {
            total: 5,
            remaining: 5,   
    }
    },
      ],
    defenseStat: 75,
    spAttackStat: 274,
    spDefenseStat: 70,
    evadeStat: 85,
},

//Tooru stats
{
  name: "tooru",
  alias: "mitsuki",
  kaguneType: ["bikaku"],
  countertype: [""],
  img: {
      default: "https://vignette.wikia.nocookie.net/tokyoghoul/images/b/b9/Mutsuki_Re_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20180324211033",

      kagune: "https://i.pinimg.com/originals/6b/c1/fe/6bc1fe84cc26e425e885ea06de1f98a2.png"
  },

  hpStat: {
    current: 1100,
    total: 1100,
  },
  attackStat: 120,
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
      name:"knife toss",
      dmg: this.spAttackStat * randomNum(3.5, 3.2),
      uses: {
          total: 15,
          remaining: 15,   
  }
  },
  
  
  {
      name:"stinger dance",
      dmg: this.spAttackStat * randomNum(6.25, 4),
      uses: {
          total: 5,
          remaining: 5,   
  }
  },
    ],
  defenseStat: 375,
  spAttackStat: 120,
  spDefenseStat: 270,
  evadeStat: 75,
},
] //End Character
}

//Character staging
  //Character selection
  function fillChar(container, character) {
    var idleStance = "default";
    if(character === "player"){
      idleStance = "kagune";
    }

    container.append('<section class="char"><img src="'+gameData[character].img[idleStance]+'" alt="'+gameData[character].name+'"><aside class="data"><h2>'+gameData[character].name+'</h2><div><progress max="'+gameData[character].hpStat.total+'"></progress><p><span>'+gameData[character].hpStat.current+'</span>/'+gameData[character].hpStat.total+'</p></div></aside></section>');

  }

  //Select Character
  function characterChoice(){
    $('.characters .char-container').click(function(){  
      var name = $(this).children('h2').text().toLowerCase();
  
      switch(gameData.step){
        // switch for the current step in the game
  
        case 1:
          // step 1: choose your player
          for(var i in characters){
            if(characters[i].name === name){
              // find and save your chosen player's data
              gameData.player = characters[i];
            }
          }
  
          // remove the character from the available list
          var char = $(this).remove();
          // build my player
          fillChar($('.stadium .player'), 'player');
  
  
          // update instructions
          $('.instructions p').text('Choose your enemy');
          // set health bar value
          $('.stadium .player progress').val(gameData.player.hpStat.current);
  
          // move on to choosing an enemy
          gameData.step = 2;
          break;
  
        case 2:
          // step 2: choose your enemy
          for(var i in characters){
            if(characters[i].name === name){
              // find and save the enemy data
              gameData.enemy = characters[i];
            }
          }
  
          // remove the enemy from the list
          var char = $(this).remove();
          // build the enemy
          fillChar($('.stadium .enemy'), 'enemy');
          // pad the stadium - give them some breathing room
          $('.stadium .enemy').css({'padding':'25px 0'});
  
          // update instructions
          $('.instructions p').text('Fight!!!');
  
          // hide the player list
          $('.characters').children().slideUp('500', function(){
            $('.characters').addClass('hidden');
          });
  
          // update enemy health bar value
          $('.stadium .enemy progress').val(gameData.enemy.hpStat.current);
  
          // update step to attack phase and bind click events
          gameData.step = 3;
          break;
      }
    });
  }
  
  //Battle Sequence
    //Calculate the damage values
    function randomNum(max, min){
      // generate a random number
      return Math.floor(Math.random() * (max - min) + min);
    }

    function damangeCalc(attacker, curAttack) {
      var defender = "enemy";
      if(attacker === "enemy"){
        defender = "player";
      }
      
    }

    function resetGame(){
      // set default values for game variables
      buildVars();
    
      // clear the stadium
      $('.player').empty();
      $('.enemy').empty();
    
      // reset
      $('.attack-list li').unbind('click');
      $('.attack-list').empty();
      $('.stadium .enemy').css({'padding':'0'});
      $('.instructions p').text('Choose your character');
  
      // empty characters
      $('.characters').empty();
      $('.characters').removeClass('hidden');
    
      for(var i in characters){
        // build the character list
        $(".characters").append('<div class="char-container"><img src="'+characters[i].img.default+'" alt="'+characters[i].name+'"><h2>'+characters[i].name+'</h2><span class="type '+characters[i].type+'"></span></div>')
      }
      characterChoice();
    }
    resetGame();
    $('.logo').click(function(){resetGame();});