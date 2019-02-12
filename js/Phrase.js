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
      
    // checkLetter() {
    //   //checks to see if the letter selected by the player matches a letter in the phrase.  
    // }

    // showMatchedLetter() {
    //     //reveals the letter(s) on the board that matches the player's selection. 
    //     //To reveal the matching letter(s), select all of the letter DOM elements that 
    //     //have a CSS class name that matches the selected letter and replace each selected 
    //     //element's hide CSS class with the show CSS class. 
    // }


  }