console.log("Meow")
// - Make some basic HTML  🐳                           
// - Display a word 🐳
// - Display multiple words 🐳
// - Create buttons for letters 🐳
// - Create dashes to keep the words hidden 🐳 
// - Change dashes when the word is guessed right 🐳
//      a. know what button is pressed 🐳
//      b. is that letter in the word🐳
//      c. change the underscores to the letter🐳
//      d. if they are wrong subtract a life🐳
//      e. alert win 
//      f. show repeated letters
// - Add hints🐳
// - Track lives left🐳

const fruitList = [ "grape","mango","pear","orange"];
const hintFruit = ["Must be crushed to make wine.", "Buddha meditated under a __ tree","Rhymes with bear", "This fruit is also a color"]
const fruitHiddenWords= ["_ _ _ _ _", "_ _ _ _ _", "_ _ _ _", "_ _ _ _ _ _"]

const wordSelector = Math.floor(Math.random() * fruitList.length)
console.log(wordSelector)

const fruitWord = fruitList[wordSelector]

let blankFruit = fruitHiddenWords[wordSelector]

function hintButton(){
   const hint = hintFruit[wordSelector]
   const showHint = document.getElementById("displayhint")
   showHint.textContent = hint
}


const wordFruitElement = document.getElementById("displayword")
wordFruitElement.textContent = blankFruit

let guesses = 10 
const tries = document.getElementById('lives')
tries.textContent = guesses

// letter buttons function
function letterSelected(letter){
 if(fruitWord.includes(letter) === true){
   let indexofLetter = fruitWord.indexOf(letter)
   indexofLetter = indexofLetter + indexofLetter //counting one plus one in the spaces
   let stringArray = blankFruit.split ('') //split the array containing the dashes
   stringArray[indexofLetter] = letter  //every two spaces will equal a letter
   let newHiddenString =stringArray.join("") // making new variable and join it/put it together
   blankFruit = newHiddenString  //equal to new string that will contain the letter
   wordFruitElement.textContent = blankFruit  //display letter in html
   } else {
      guesses = guesses - 1   // if it does not contain the letter the variable guess which cobtain our lives goes down minus 1
      drawLines() //this call function below which will draw the hangman
   }
   const tries = document.getElementById('lives') //display updated lives
   tries.textContent = guesses //will show updated lives in html
 
}

function drawLines(){ //function using switch cases 
   switch(guesses) {
      case 10:
         console.log(guesses)
         document.getElementById('bottomline').classList.add('visible') //bottom line is always visible
         break;
      case 9:
         console.log(guesses)
         document.getElementById('pole').classList.remove('invisible')//uses the element classList to go to the classes attached to the element (pole), then use the remove method to remove the invisible class.
         document.getElementById('pole').classList.add('visible') //this goes to the classes attached to the element and adds the css class visible
         break;
      case 8:
         console.log(guesses)
         document.getElementById('horizontal').classList.remove('invisible')
         document.getElementById('horizontal').classList.add('visible')

         break;
       case 7:
         document.getElementById('rope').classList.remove('invisible')
         document.getElementById('rope').classList.add('visible')
         
         break;
         case 6:
            document.getElementById('head').classList.remove('invisible')
            document.getElementById('head').classList.add('visible')

         break;
         case 5:
            document.getElementById('body').classList.remove('invisible')
            document.getElementById('body').classList.add('visible')
         break;
         case 4:
            document.getElementById('leftarm').classList.remove('invisible')
            document.getElementById('leaftarm').classList.add('visible')
         break;
         case 3:
            document.getElementById('rightarm').classList.remove('invisible')
            document.getElementById('rightamr').classList.add('visible')
         break;
         case 2:
            document.getElementById('leftleg').classList.remove('invisible')
            document.getElementById('leftleg').classList.add('visible')
         break;
         case 1:
            document.getElementById('rightleg').classList.remove('invisible')
            document.getElementById('rightleg').classList.add('visible')
         break;
         case 0:
        alert("Game Over")
        location.reload() //reloads the page automatically
   } 

}



