/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {

    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
      let frase = `
        <ul>`;
        this.phrase.split("").forEach(function(element) {
        if(element == " ") {
          frase += `<li class="space">${element}</li>`;
        } else {
          frase += `<li class="hide letter ${element}">${element}</li>`;
        } 
        });
         frase += `
         </ul>
        </div>`;
        document.querySelector('#phrase').innerHTML = frase;
    }
      
    checkLetter() {
      //checks to see if the letter selected by the player matches a letter in the phrase.
      let selectedLetter;  
      let keys = document.querySelectorAll('.key');
      let matchedLetters;
      for (let i = 0; i < keys.length; i ++) {
          keys[i].addEventListener('click', function(element){
             selectedLetter =  element.target.innerText;
             if(document.querySelector(`.${selectedLetter}`)) {
              matchedLetters =  document.querySelectorAll(`.${selectedLetter}`);
                return matchedLetters;
             } else {
                return false;
            }
         });
        }
      }

    showMatchedLetter() {
        let matches = this.checkLetter();
        matches.forEach(function(element){
          element.classList.remove('hide');
          element.classList.remove('show');
        });
        return matches;
     }


  }


  




 