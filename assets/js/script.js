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
    name: 'kaneki',
    alias: 'eyepatch',
    kaguneType: ['rinkaku'],
    countertype: [''],
    img: {
        default: 'https://freepngimg.com/download/tokyo_ghoul/32528-1-kaneki-ken-transparent.png',

        kagune: 'https://vignette.wikia.nocookie.net/tokyo-ghoul-re-birth/images/e/e3/BlueNeki.png/revision/latest?cb=20190211022306',
    },

    hpStat: {
        current: 1400,
        total: 1400
    },

    attackStat: 180,
        attacks: [
            {
                name:'strike',
                dmg: randomNum(2, 1),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:'heavy slam',
                dmg: randomNum(3, 2),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:'kagune barrage',
                dmg: randomNum(4, 3),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:'flying slam',
                dmg: randomNum(5, 3),
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
    name: 'touka',
    alias: 'rabbit',
    kaguneType: ['ukaku'],
    countertype: ['kouhaku'],
    img: {
        default: 'https://vignette.wikia.nocookie.net/p__/images/f/f9/Touka_Kirishima.png/revision/latest?cb=20150310023104&path-prefix=protagonist',

        kagune: 'https://www.trzcacak.rs/myfile/full/297-2971278_freetoedit-tokyoghoul-tokyo-touka-toukakirishima-toukax-tokyo-ghoul.png'
    },

    hpStat: {
      current: 1200,
      total: 1200,
    },
    attackStat: 150,
      attacks: [
        {
        name:'strike',
        dmg: randomNum(2, 1),
        uses: {
            total: 30,
            remaining: 30,
        }
    },

    {
        name:'leg sweep',
        dmg: randomNum(2, 1),
        uses: {
            total: 30,
            remaining: 30,   
    }
    },
    
    {
        name:'needle storm',
        dmg: randomNum(4, 3),
        uses: {
            total: 15,
            remaining: 15,   
    }
    },
    
    
    {
        name:'rolling thunder',
        dmg: randomNum(5, 4),
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
    name: 'yamori',
    alias: 'jason',
    kaguneType: ['rinkaku'],
    countertype: ['bikaku'],
    img: {
        default: 'https://vignette.wikia.nocookie.net/tokyoghoul/images/f/f8/Yamori_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20141004200044',

        kagune: 'https://i.pinimg.com/originals/87/a9/81/87a981a184c55f5cd3546579287bf349.png',
    },

    hpStat: {
        current: 2600,
        total: 2600
    },

    attackStat: 230,
        attacks: [
            {
                name:'strike',
                dmg: randomNum(2, 1),
                uses: {
                    total: 30,
                    remaining: 30,
                }
            },

            {
                name:'heavy slam',
                dmg: randomNum(3, 2),
                uses: {
                    total: 30,
                    remaining: 30,   
            }
            },
            
            {
                name:'kagune grapple',
                dmg: randomNum(4, 2),
                uses: {
                    total: 15,
                    remaining: 15,   
            }
            },
            
            
            {
                name:'mighty hammer',
                dmg: randomNum(5, 3),
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
    name: 'ayato',
    alias: 'black rabbit',
    kaguneType: ['ukaku'],
    countertype: ['kouhaku'],
    img: {
        default: 'https://vignette.wikia.nocookie.net/tokyoghoul/images/b/bd/Ayato_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20150209220017',

        kagune: 'https://www.sccpre.cat/mypng/full/403-4034315_fanculomyass-tokyo-ghoul-jail-ayato.png'
    },

    hpStat: {
      current: 1450,
      total: 1450,
    },
    attackStat: 170,
      attacks: [
        {
        name:'strike',
        dmg: randomNum(2, 1),
        uses: {
            total: 30,
            remaining: 30,
        }
    },

    {
        name:'leg sweep',
        dmg: randomNum(2, 1),
        uses: {
            total: 30,
            remaining: 30,   
    }
    },
    
    {
        name:'needle storm',
        dmg: randomNum(4, 3),
        uses: {
            total: 15,
            remaining: 15,   
    }
    },
    
    
    {
        name:'rolling typhoon',
        dmg: randomNum(6, 4),
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
  name: 'tooru',
  alias: 'mitsuki',
  kaguneType: ['bikaku'],
  countertype: [''],
  img: {
      default: 'https://vignette.wikia.nocookie.net/tokyoghoul/images/b/b9/Mutsuki_Re_anime_design_front_view.png/revision/latest/scale-to-width-down/300?cb=20180324211033',

      kagune: 'https://i.pinimg.com/originals/6b/c1/fe/6bc1fe84cc26e425e885ea06de1f98a2.png'
  },

  hpStat: {
    current: 1100,
    total: 1100,
  },
  attackStat: 120,
    attacks: [
      {
      name:'strike',
      dmg: randomNum(2, 1),
      uses: {
          total: 30,
          remaining: 30,
      }
  },

  {
      name:'leg sweep',
      dmg: randomNum(2, 1),
      uses: {
          total: 30,
          remaining: 30,   
  }
  },
  
  {
      name:'knife toss',
      dmg: randomNum(3, 2),
      uses: {
          total: 15,
          remaining: 15,   
  }
  },
  
  
  {
      name:'stinger dance',
      dmg: randomNum(6, 4),
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
    var idleStance = 'default';
    if(character === 'player'){
      idleStance = 'kagune';
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
  
          for(var i in gameData.player.attacks){
            // populate attack list
            $('.attack-list').append('<li><p class="attack-name"><strong>'+gameData.player.attacks[i].name+'</strong></p><p class="attack-count"><small><span>'+gameData.player.attacks[i].uses.remaining+'</span>/'+gameData.player.attacks[i].uses.total+'</small></p></li>');
          }
  
          $('.attack-list').addClass('disabled');
  
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
          $('.instructions p').text(" ");
  
          // hide the player list
          $('.characters').children().slideUp('500', function(){
            $('.characters').addClass('hidden');
          });
  
          // update enemy health bar value
          $('.stadium .enemy progress').val(gameData.enemy.hpStat.current);
  
          // update step to attack phase and bind click events
          gameData.step = 3;
          attackList();
          break;
      }
    });
  }

  
  function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  function damageCalc(attacker, curAttack){
    let defender = 'enemy';
    if(attacker === 'enemy'){
      defender = 'player'
    }

    curAttack.dmg = Math.floor(curAttack.dmg);
    return curAttack.dmg;
  }

  function setHP(){
    // stop health animation and set value
    clearInterval(defendProgressInt);
    clearInterval(progressInt);
    $('.stadium .enemy progress').val(gameData.enemy.hpStat.current);
    $('.stadium .player progress').val(gameData.player.hpStat.current);
  }


  function attackEnemy(that, callback){
    
    //stores attack name
    attackName = that.children('.attack-name').children('strong').text().toLowerCase();
    
    for(let i in gameData.player.attacks){
      if(gameData.player.attacks[i].name === attackName){
        curAttack = gameData.player.attacks[i];
      }
    }
    
    if(curAttack.uses.remaining > 0){
      //execute attack
      $('.attack-list').addClass('disabled');
      gameData.enemy.hpStat.current -= damageCalc('player', curAttack);

      if(gameData.enemy.hpStat.current <= 0){
        gameData.enemy.hp.current = 0;
        // clear the stadium of the dead
        $('.enemy').empty();
        // show the available characters
        $('.characters').removeClass('hidden');
        $('.characters').children().slideDown('500');
  
        gameData.enemy = {};
  
        // choose enemy
        gameData.step = 2;
        // unbind click for reset
        $('.attack-list li').unbind('click');
      } else{
  
        curAttack.uses.remaining--;
  
        // interval to animate health bar
        progressInt = setInterval(function(){
          // get current value of health bar
          var val = $('.stadium .enemy progress').val();
          val--;
  
          // update health bar value
          $('.stadium .enemy progress').val(val);
  
          if(val === gameData.enemy.hpStat.current){
            // if you've hit your target clear interval
            clearInterval(progressInt);
            progressComplete = 1;
          }
        },1);
  
        // update health numbers
        $('.stadium .enemy .data p span').text(gameData.enemy.hpStat.current);
        that.children('.attack-count').children('small').children('span').text(curAttack.uses.remaining);
  
        // wait a second to recover
        setTimeout(function(){
          // now defend that attack
          defend(that);
        }, 1000);
      }
  }
  }

  function defend(that){
    //decides enemy attack rng
    randInt = randomNum(gameData.enemy.attacks.length);
    enemyAttack = gameData.enemy.attacks[randInt];

    $('.enemy .char img').animate(
      {
        'margin-right': '-30px',
        'margin-top': '-10px'
      },
      50,
      'swing'
    );
    $('.enemy .char img').animate(
      {
        'margin-right': '30px',
        'margin-top': '10px'
      },
      50,
      'swing'
    );
    $('.enemy .char img').animate(
      {
        'margin-right': '0px',
        'margin-top': '0px'
      },
      50,
      'swing'
    );
  

    //subtracts player hpStat
    gameData.player.hpStat.current -= damageCalc('enemy', enemyAttack);

    if(gameData.player.hpStat.current <= 0){

      gameData.player.hpStat.current = 0;
      resetGame();
    }else{
  
      // health bar animation
      defendProgressInt = setInterval(function(){
        // get current val of health bar
        var val = $('.stadium .player progress').val();
        val--;
  
        // update health bar value
        $('.stadium .player progress').val(val);
  
        if(val === gameData.player.hpStat.current){
          // stop the interval when target is attained
          clearInterval(defendProgressInt);
          defendProgressComplete = 1;
        }
      },1);
  
      // update health value
      $('.stadium .player .data p span').text(gameData.player.hpStat.current);

      setTimeout(function(){
        if(defendProgressComplete && progressComplete){
          $('.attack-list').removeClass('disabled');
        }else{
          setHP();
          $('.attack-list').removeClass('disabled');
        }
      }, 500);
    }
  }

  function attackList(){
    //Unlocks Attack Options
    $('.attack-list').removeClass('disabled');
  
    $('.attack-list li').click(function(){
      // attack choice is clicked
      var doAttack = 1;
  
      if(gameData.step === 3){
        // attack step - start attack sequence
        attackEnemy($(this));
      }
    });
  
  }
    
  //Reset Game
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