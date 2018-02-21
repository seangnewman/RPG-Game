var states = {
    DEFENDER : 0,
    ATTACKER : 1,
    COMBAT : 2

}

//Define the Characters
var rpgCharacter = [
  {  
     title : 'Harry' 
    ,baseAttackPower : Math.floor(Math.random() * 9)
    ,healthPoints : 0
    ,attackPower : 0
    ,counterAttackPower :  0
    ,numberOfAttacks : 0
    
    ,currentState : states.DEFENDER
    ,rpgImage : './assets/images/harry.jpg'
    ,setBaseAttackPower(){
        var basePower = 0;
        while(basePower === 0){
            basePower = Math.floor(Math.random() * 9);
        }
        this.baseAttackPower = basePower;
        return this.baseAttackPower
    }
    ,setHealthPoints : function(baseAttackPower){
        var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
    }
    ,setAttackPower : function(baseAttackPower){
        this.attackPower = baseAttackPower * ++this.numberOfAttacks;
    }
    ,setCounterAttackPower : function(baseAttackPower){
        if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
            this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
        }
    }
    ,rpgHTML : function(index){
        return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
        "<div class='rpgTitle'>" + this.title +"</div>" +
        "<div class='rpgImageContainer' id=rpg"+ index + " >" +
        "</div> <!-- end of rpgImageContainer --> " +
        "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
        "</div> <!-- End of rpgCharacter Container -->"
      }
  },
  
  {  
    title : 'Hermoine' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/hermy2.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
   ,setHealthPoints : function(baseAttackPower){
    var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
   }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },

 {  
    title : 'Luna' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/luna.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
  ,setHealthPoints : function(baseAttackPower){
    var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
   }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Dumbledore' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/professor.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
   ,setHealthPoints : function(baseAttackPower){
    var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
   }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Snape' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/snape.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0 ){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
    ,setHealthPoints : function(baseAttackPower){
        var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
    }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Remus' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/remus.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0 ){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
    ,setHealthPoints : function(baseAttackPower){
        var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
    }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Ron' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/ron.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0 ){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
    ,setHealthPoints : function(baseAttackPower){
        var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
    }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Neville' 
   ,baseAttackPower : Math.floor(Math.random() * 9)
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/nevill.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0 ){
        basePower = Math.floor(Math.random() * 9);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
    ,setHealthPoints : function(baseAttackPower){
        var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
        this.healthPoints = (baseAttackPower * multiplier);
    }
    ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 },
 {  
    title : 'Voldemort' 
   ,baseAttackPower : 0
   ,healthPoints : 0
   ,attackPower : 0
   ,counterAttackPower :  0
   ,numberOfAttacks : 0
   
   ,currentState : states.DEFENDER
   ,rpgImage : './assets/images/voldy.jpg'
   ,setBaseAttackPower(){
    var basePower = 0;
    while(basePower === 0 ){
        basePower = Math.floor(Math.random() * 10);
    }
    this.baseAttackPower = basePower;
    return this.baseAttackPower
    }
   ,setHealthPoints : function(baseAttackPower){
    var multiplier = ((Math.floor(Math.random() * baseAttackPower) + baseAttackPower * 10) * 10);
       this.healthPoints = (baseAttackPower * multiplier);
   }
   ,setAttackPower : function(baseAttackPower){
       this.attackPower = baseAttackPower * ++this.numberOfAttacks;
   }
   ,setCounterAttackPower : function(baseAttackPower){
       if(this.numberOfAttacks === 0 && this.currentState === states.DEFENDER){
           this.counterAttackPower = baseAttackPower * Math.floor(Math.random() * 9);
       }
   }
   ,rpgHTML : function(index){
    return "<div class='rpgContainer' data-state=" + this.currentState + " >" +
     "<div class='rpgTitle'>" + this.title +"</div>" +
     "<div class='rpgImageContainer' id=rpg"+ index + " >" +
     "</div> <!-- end of rpgImageContainer --> " +
     "<div class='rpgFooter'>" + "Health : " + this.healthPoints + "</div>" +
     "</div> <!-- End of rpgCharacter Container -->"
   }
 }





 ]

//Define the class Definitions

