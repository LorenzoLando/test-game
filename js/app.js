const game = new Game ();
const keys = document.querySelectorAll('.key');
const hearts = document.querySelectorAll('.tries img');
// Click on button starts the game
document.querySelector('#btn__reset')
 .addEventListener('click', () => {
   //remove all <li> elemets from the page
   document.querySelector('#phrase ul').innerHTML = '';
   game.missed  = 0;
   for (let i = 0; i < keys.length; i ++) {
        //remove chosens class
        keys[i].classList.remove('chosen');
        //remove wrong
        keys[i].classList.remove('wrong');
        //remove disabled from key button
        keys[i].disabled = false;
    }

    for (let i = 0; i < hearts.length; i ++) {
        //reset all heart img
        hearts[i].src = "images/liveHeart.png";
    }    
    game.startGame();
 })
 
 const clickController =  ()  => {
    for (let i = 0; i < keys.length; i ++) {
        keys[i].addEventListener('click', (element) => {
           
            game.handleInteraction(element.target);
          
       });
    }
}
 
clickController();



