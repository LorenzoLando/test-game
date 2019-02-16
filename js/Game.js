/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor () {
        //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        //an array of five Phrase objects to use with the game. A phrase should only include letters and 
        //spaces— no numbers, punctuation or other special characters.
        this.phrases = this.createPhrases();
        //This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() 
        //method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        this.activePhrase = null;

     }

     createPhrases() {
        const phrase1 = new Phrase('A day to come seems longer than a year that is gone');
        const phrase2 = new Phrase('A full purse never lacks friends');
        const phrase3 = new Phrase('A fool may earn money but it takes a wise man to keep it');
        const phrase4 = new Phrase('A good tale never tires in the telling');
        const phrase5 = new Phrase('A penny saved is a penny gained');
        return [phrase1, phrase2, phrase3, phrase4, phrase5];
    }


       getRandomPhrase(){
             //generated a casual phrase from the property
            return this.phrases[Math.floor(Math.random() * this.phrases.length)];
      } 

   startGame() {
        //hides the start screen overlay,
        document.querySelector('#overlay').style.visibility = 'hidden';
        //calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        //It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        return this.activePhrase.addPhraseToDisplay();
       }
      //this method checks to see if the player has revealed all of the letters in the active phrase.
      checkForWin() {
         if(document.querySelector('.hide')) {
            return false;
         } else {
            return true;
         }
      }
     //it removes a life the img of a life  
     removeLife() {
      //subsitude the path for the img  
      document.querySelector('img[src="images/liveHeart.png"]').src = "images/lostHeart.png";
      //add one to the misse property
      this.missed += 1;
      //if 5 attempt are missed
      if(this.missed > 4) {
         //you`ve lost
         this.gameOver();
        }
       }
    // this method displays the original start screen overlay, and depending on the outcome of the game, 
    gameOver() {
       document.querySelector('#overlay').style.visibility = 'initial';
       if (this.missed > 4) {
         document.querySelector('#game-over-message').innerText = 'You`ve lost';
         document.querySelector('#overlay').style.backgroundColor = "red";
       } else {
         document.querySelector('#game-over-message').innerText = 'You`ve won';
         document.querySelector('#overlay').style.backgroundColor = "green";
       }
       // updates the overlay h1 element with a friendly win or loss message, 
      // and replaces the overlay’s start CSS class with either the win or lose CSS class. 
       }

    //it managed the interactions 
    handleInteraction(button) {
      //disabled the clicked button
      button.disabled  = true;
      //if choice was wrong
      if(this.activePhrase.checkLetter(button.innerText) === false ) {
         //add the wrong class to the element
         button.classList.add("wrong");
         //remove a life 
         this.removeLife();
      //if choice was correct
      } else {
         //add chosen class to the element
         button.classList.add("chosen");
         //it shows all the matched element from the phrase
         this.activePhrase.showMatchedLetter(button.innerText);
      }
      //if the are not hiding letter anymore
      if(this.checkForWin())  {
            //end the game
            this.gameOver();
      }
    }

   }