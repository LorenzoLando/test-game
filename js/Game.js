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
        const phrase3 = new Phrase('A fool may earn money, but it takes a wise man to keep it');
        const phrase4 = new Phrase('A good tale never tires in the telling');
        const phrase5 = new Phrase('A penny saved is a penny gained');
        return [phrase1, phrase2, phrase3, phrase4, phrase5];
    }


       getRandomPhrase(){
//torna una frase casuale dalla proprieta 
            return this.phrases[Math.floor(Math.random() * this.phrases.length)];
      } 

   startGame() {
        //hides the start screen overlay,
        document.querySelector('#overlay').style.visibility = 'hidden';
        //calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
         return this.activePhrase.addPhraseToDisplay();
       
         //It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object. 
     }

      checkForWin() {
         //this method checks to see if the player has revealed all of the letters in the active phrase.
         if(document.querySelector('.hide')) {
            return false;
         } else {
            
           
            return true;
         }
     }

     removeLife() {
      
         document.querySelector('img[src="images/liveHeart.png"]').src = "images/lostHeart.png";
          //incrementa la missed property
         this.missed += 1;
        
        //se missed ha 5 tentativi
        if(this.missed > 4) {
         //chiama il metodo gameOver();
         this.gameOver();
        }
       }

       gameOver() {
        // this method displays the original start screen overlay, and depending on the outcome of the game, 
        document.querySelector('#overlay').style.visibility = 'initial';
        // updates the overlay h1 element with a friendly win or loss message, 
        // and replaces the overlay’s start CSS class with either the win or lose CSS class. 
    }


    handleInteraction(button) {
      //disabilita il bottone cliccato
      button.disabled  = true;
      //se la scelta era sbagliata
      if(this.activePhrase.checkLetter(button.innerText) === false ) {
         //aggiungi la classe css wrong all elemento selezionato
         button.classList.add("wrong");
         this.removeLife();
      } else {
         //aggiungi la classe chose all elemento selezionato
         button.classList.add("chosen");
         this.activePhrase.showMatchedLetter(button.innerText);
      }
      if(this.checkForWin())  {
            this.gameOver();
      }
    }

   }