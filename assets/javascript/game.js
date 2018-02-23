var attackIndex;
var defendIndex;
var combatMessage = '';


// Wait until all objects on DOM have loaded
$(document).ready(function() {

  initializeRPGCharacters();
  // Create the event listener for pool of available defenders
  // Note that the element does not exist within DOM at page load
  
  // Must delegate this event on the container
  $('#rpgAvailableToAttack').on('click',  ".rpgContainer", function(){
    // returns the characters currently in combat section
    combatMessage = '';
    $('#rpgCombatMessage').html(combatMessage);

    var charContainer = $("#rpgCurrentAttack .rpgContainer");
    var combatContainer = $("#rpgCurrentAttack");
    
    // Validate that no characters are presently in combat
    if( charContainer.length === 0){
      //Retrieve the index
      defendIndex = $(this).attr("data-index");
      // Update the state of the object
      rpgCharacter[defendIndex].currentState = states.COMBAT;   
      // Update the element to reflect combat
      setElementToCombat(this, combatContainer);
      // Remove from pool of available characters
      $(this).remove();
      //Finally, enable the attack button
      $('#rpgAttackButton').prop('disabled',false);
    }
 });
  // Create the event listener for initial rpg characters
 $('#rpgCharacters .rpgContainer').on('click', function(){
    // Get index of the attacker 
    attackIndex = $(this).attr("data-index");
    //update the state of the object
    rpgCharacter[attackIndex].currentState = states.ATTACKER; 
    //Update element to identify attacker 
    setElementToAttack(this) ;
    // Move remaining elements to the pool of available
    migrateToAvailable();
});

//Create the event listener for the attack button
$('#rpgAttackButton').on("click", function(){
  var attackPower = rpgCharacter[attackIndex].getAttackPower();
  var defendPower = rpgCharacter[defendIndex].defendAttackPower;
  var attackElement = $("#rpgCharacters .rpgFooter");
  var defendElement = $("#rpgCurrentAttack .rpgFooter");

  //Clear the messages
  combatMessage = '';
  $('#rpgCombatMessage').html(combatMessage); 
   
  //Set the health value, this value will never fall less than zero
  rpgCharacter[attackIndex].healthPoints = updateCharacterHealth(rpgCharacter[attackIndex], defendPower);
  rpgCharacter[defendIndex].healthPoints = updateCharacterHealth(rpgCharacter[defendIndex], attackPower);
    
  //Update the attacker element
   updateCombatChars(attackElement, rpgCharacter[attackIndex], attackPower);

  // Update the defender element
  updateCombatChars(defendElement, rpgCharacter[defendIndex], defendPower);

  if(rpgCharacter[attackIndex].healthPoints <= 0){
      console.log(rpgCharacter[defendIndex].title + ' wins!  Game Over!');
      //disable the attack button
      $('#rpgAttackButton').prop('disabled',true);
      //Display rather modest message
      combatMessage = `<p> ${rpgCharacter[defendIndex].title} has crushed ${rpgCharacter[attackIndex].title}!</p>`;
      $('#rpgCombatMessage').html(combatMessage);
      // Show a new button, ask to play again
      $('#rpgResetButton').css("display","block");
    }

    if(rpgCharacter[defendIndex].healthPoints <= 0){
        console.log(rpgCharacter[attackIndex].title + ' wins!');
        //disable the attack button
        $('#rpgAttackButton').prop('disabled',true);
        //remove the character from the game
        $("#rpgCurrentAttack .rpgContainer").remove();
        //Display rather modest message
        combatMessage = `<p> ${rpgCharacter[attackIndex].title} has crushed ${rpgCharacter[defendIndex].title} with an foul mouthed curse!</p>`;
        $('#rpgCombatMessage').html(combatMessage);
    }
    
    if($("#rpgAvailableToAttack").children().length === 0){
        //The game is won
        combatMessage = `<p>  Congrats ${rpgCharacter[attackIndex].title} on a well played game!</p>`;
        $('#rpgCombatMessage').html(combatMessage);
        // Show a new button, ask to play again
        $('#rpgResetButton').css("display","block");
    }

  });
  
  /*
    Refresh the page if the user wants to start new game
  */
  $('#rpgResetButton').on("click", function(){
      location.reload(true);
  });

});

function updateCombatChars(combatElement, rpgChar, power){
    var combatChar = combatElement.find('[data-state="'+ states.COMBAT +'"]');
    combatChar.innerText = "Health " + rpgChar.healthPoints;
    combatElement[0].firstChild.textContent = combatChar.innerText;
    combatMessage += `<p> ${rpgChar.title} has inflicted ${power} units damage!</p>`;
    $('#rpgCombatMessage').html(combatMessage);
     
     
}


function initializeRPGCharacters(){
  /*
  Create each character and attach to the rpgCharacters container
  */
  for(var i= 0; i < rpgCharacter.length; i++){
    initializeCharacter(rpgCharacter[i]);
    $('#rpgCharacters').append(rpgCharacter[i].rpgHTML(i));
    $('#rpg' + i ).css('background-image','url(' + rpgCharacter[i].rpgImage +')');
  }

  //Disable the attack button
  //Will not enable until a defender has been chosen
  $('#rpgAttackButton').prop('disabled',true);
}

function initializeCharacter(theCharacter){
  /*
  Initialize each character, set the attack, counter attack and health
  */
  var baseAttackPower =  theCharacter.setBaseAttackPower();
  theCharacter.setHealthPoints(baseAttackPower);
  theCharacter.setAttackPower(baseAttackPower);
  theCharacter.setCounterAttackPower(baseAttackPower);
}



function migrateToAvailable(){
  // Once a character is clicked, move remaining characters to the defenders pool
  // 1. Return list of matching elements
  var $elementsToMigrate = $("#rpgCharacters").find('[data-state="0"]');
  // 2. Add the elements to the pool of available defenders
  for(var i=0; i < $elementsToMigrate.length; i++){
    $("#rpgAvailableToAttack").append($elementsToMigrate[i].outerHTML);
  }
  // 3. Remove the element from the list of rpg characters
  for(var i=0; i < $elementsToMigrate.length; i++){
    $elementsToMigrate[i].remove();
  }
}

//Sets the element to attack mode
function setElementToAttack(element){
    $(element).removeData("data-state");
    $(element).attr("data-state", states.ATTACKER);
    $(element).css("border", "2px solid  goldenrod"); 
 }


//Sets the element to combat mode
function setElementToCombat(element, container){
    $(element).removeData("data-state");
    $(element).attr("data-state", states.COMBAT);
    $(element).css("border", "2px solid goldenrod"); 
    $(container).append(element.outerHTML);
 }
 
 function updateCharacterHealth(rpgChar, power ){
    rpgChar.healthPoints -= power; 
    return rpgChar.healthPoints < 0 ? 0 : rpgChar.healthPoints;
}