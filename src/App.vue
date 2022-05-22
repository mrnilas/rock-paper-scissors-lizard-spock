<script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
//import './app-function.js';
</script>


<template>
  <main>
        <div class="anzeige">
            Bot {{this.counter_bot}} - {{this.counter_human}} You
        </div>

        <div class="spielfeld">

            <div class="anzeige-bot auswahl-anzeige">
              <i id="bot" class="fa-regular fa-lg" :class="class_bot"></i>
              <span @change="changeIcon">{{ choice_bot }}</span>
            </div>

            <div class="anzeige-ergebnis"><p>{{output}}</p></div>

            <div class="anzeige-mensch auswahl-anzeige"><i id="human" class="fa-regular fa-lg"  :class="class_human"></i> <span>{{choice_human}}</span></div>
        </div>

        <div class="auswahlfeld">
            <div class="auswahl">
                <ul class="auswahl-liste">
                    <li><div class="icons" name="rock" @click="getHumanChoice('rock')"><i class="fa-regular fa-hand-rock fa-lg"></i></div><span class="icon-text">rock</span> </li>
                    <li><div class="icons" name="paper" @click="getHumanChoice('paper')"><i class="fa-regular fa-hand-paper fa-lg"></i></div><span class="icon-text">paper</span></li>
                    <li><div class="icons" name="scissors" @click="getHumanChoice('scissors')"><i class="fa-regular fa-hand-scissors fa-lg"></i></div><span class="icon-text">scissors</span></li>
                    <li><div class="icons" name="lizard" @click="getHumanChoice('lizard')"><i class="fa-regular fa-hand-lizard fa-lg"></i></div><span class="icon-text">lizard</span></li>
                    <li><div class="icons" name="spock" @click="getHumanChoice('spock')"><i class="fa-regular fa-hand-spock fa-lg"></i></div><span class="icon-text">spock</span></li>
                </ul>
            </div>

            <button class="button-start" v-on:click="gameFunction()">Go!</button>
        </div>

        
    </main>
    <footer class="footer">
        <a href="http://niklasjaeger.de">My Homepage</a> | <a href="https://bigbangtheory.fandom.com/de/wiki/Stein,_Papier,_Schere,_Echse,_Spock"> Informations about the game</a>
    </footer>
</template>

<script>


export default{

  data(){
    return{
      choice_human:"",
      choice_bot:"",
      random:0,
      class_human:"",
      class_bot:"",
      counter_human:0,
      counter_bot:0,
      output:"",

      gameObject:{
        bot:this.choice_bot,
        human:this.choice_human,
        status:0
      }
    }
    
  },
  methods:{
    
    myFunction: function(max){
      this.random=Math.floor(Math.random()*max)
      console.log(this.random)
    },

     getIcon(choice){

     
      switch(choice){
        case 'rock':
          return 'fa-hand-rock';
          break;
        case 'scissors':
          return'fa-hand-scissors';
          break;
        case 'paper':
         return 'fa-hand-paper';
          break;
        case 'spock':
          return 'fa-hand-spock';
          break;
        case 'lizard':
          return 'fa-hand-lizard';
          break;
      }
      

      
    },

    getRandomChoice(){

      this.myFunction(5);

      switch(this.random){
        case 0:
          this.choice_bot="rock";
          break;
        case 1:
          this.choice_bot="scissors";
          break;
        case 2:
          this.choice_bot="paper";
          break;
        case 3:
          this.choice_bot="lizard";
          break;
        case 4:
          this.choice_bot="spock";
          break;  
      }

      this.class_bot=this.getIcon(this.choice_bot);
    },

    getHumanChoice(choice_human){
      this.choice_human=choice_human;
      console.log(this.choice_human)
      this.class_human= this.getIcon(this.choice_human)
    },

    gameFunction(){
      
      
      if(this.choice_human==''){
        this.output='Please choose your Sign.';
        
      }else{
        this.getRandomChoice();

      


      if(this.choice_bot==this.choice_human){
        this.gameObject.bot=this.gameObject.human=this.choice_bot;
        
        this.gameObject.status=1;
        console.log(this.gameObject);
        
      }else{
        switch(this.choice_bot){
          case 'scissors':
            if(this.choice_human=='paper'||this.choice_human=='lizard'){
              this.gameObject.status=2;
              this.counter_bot++;
              //this.output=this.setOutput();
            }else{
              this.gameObject.status=3;
              this.counter_human++;
              //this.output=this.setOutput();
            }
            break;
          case 'lizard':
            if(this.choice_human=='spock'||this.choice_human=='paper'){
              this.gameObject.status=2;
              this.counter_bot++;
              //this.output=this.setOutput();
            }else{
              this.gameObject.status=3;
              this.counter_human++;
              //this.output=this.setOutput();
            }
            break;  
          case 'rock':
            if(this.choice_human=='scissors'||this.choice_human=='lizard'){
              this.gameObject.status=2;
              this.counter_bot++;
              //this.output=this.setOutput();
            }else{
              this.gameObject.status=3;
              this.counter_human++;
              //this.output=this.setOutput();
            }
            break;
          case 'paper':
            if(this.choice_human=='spock'||this.choice_human=='rock'){
              this.gameObject.status=2;
              this.counter_bot++;
              //this.output=this.setOutput();
            }else{
              this.gameObject.status=3;
              this.counter_human++;
              //this.output=this.setOutput();
            }
            break;
          case 'spock':
            if(this.choice_human=='rock'||this.choice_human=='scissors'){
              this.gameObject.status=2;
              this.counter_bot++;
              //this.output=this.setOutput();
            }else{
              this.gameObject.status=3;
              this.counter_human++;
              //this.output=this.setOutput();
            }
            break;
       }
      }
      this.output=this.setOutput();
      }

    },

    setOutput(){
      switch(this.gameObject.status){
        case 1:
          return 'Bot equals Human. It\'s a Draw!';
        case 2:
          return this.choice_bot+ ' beats '+  this.choice_human+'. Bot wins!';
        case 3:
          return this.choice_human+ ' beats '+  this.choice_bot+'. Human wins!';
        default:
          return 'Oops. Something didn\'t work...';   
      }
    }
   

  },

  mounted(){
    this.getHumanChoice(this.choice_human)
  }

}

</script>



<style>
@import './assets/base.css';

#app {
  width: clamp(280px,100vw,500px);
  height: 90vh;
  margin: 0 auto; 
  font-weight: normal;
}


</style>
