
// Wait until all objects on DOM have loaded
$(document).ready(function() {

 initializeRPGCharacters();
  // Create the event listener for pool of available defenders
  // Note that the element does not exist within DOM at page load
  // Must delegate this event on the container
 $('#rpgAvailableToAttack').on('click',  ".rpgContainer", function(){
    $(this).removeData("data-state");
    $(this).attr("data-state", states.COMBAT);
    $(this).css("border", "2px dashed #1c1a1a"); 
    $("#rpgCurrentAttack").append(this.outerHTML);
    $(this).remove();
 });
 

  // Create the event listener for initial rpg characters
 $('#rpgCharacters .rpgContainer').on('click', function(){
   $(this).removeData("data-state");
   $(this).attr("data-state", states.ATTACKER);
   $(this).css("border", "2px dashed #1c1a1a");  
   migrateToAvailable();
});

});

function initializeCharacter(theCharacter){
    var baseAttackPower =  theCharacter.setBaseAttackPower();
    theCharacter.setHealthPoints(baseAttackPower);
    theCharacter.setAttackPower(baseAttackPower);
    theCharacter.setCounterAttackPower(baseAttackPower);
}

function initializeRPGCharacters(){
    for(var i= 0; i < rpgCharacter.length; i++){
        initializeCharacter(rpgCharacter[i]);
        $('#rpgCharacters').append(rpgCharacter[i].rpgHTML(i));
        $('#rpg' + i ).css('background-image','url(' + rpgCharacter[i].rpgImage +')');
    }
}

function migrateToAvailable(){
    // Once a character is clicked, move remaining characters to the defenders pool
    // 1. Return list of matching elements
    var $elementsToMigrate = $("#rpgCharacters").find('[data-state="0"]');
    console.log($elementsToMigrate.length);
    // 2. Add the elements to the pool of available defenders
    for(var i=0; i < $elementsToMigrate.length; i++){
        console.log($elementsToMigrate[i].outerHTML);
        $("#rpgAvailableToAttack").append($elementsToMigrate[i].outerHTML);
    }
    // 3. Remove the element from the list of rpg characters
    for(var i=0; i < $elementsToMigrate.length; i++){
        $elementsToMigrate[i].remove();
    }

}