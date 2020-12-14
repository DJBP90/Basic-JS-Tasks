const myName = 'David';
const familyName = 'Breckon-Payne';
const age = 30;
const missionStatement = 'I am a MASTER JavaScript Programmer!'

console.log(myName)

function changeText() {
    document.getElementById("demo").innerHTML=("I am a MASTER at JavaScript");
}
function changeTextBack() {
    document.getElementById("demo").innerHTML=("This is a test.");

}
function changeBackground() {
    document.getElementById("main-title").innerHTML=("This is a test.");

}
// works out mutal followers between 2 friends
const bobsFollowers = ['mike', 'paul', 'john', 'david'];

const tinasFollowers = ['mike', 'paul', 'steve'];

const mutualFollowers = [];

for (let bf = 0; bf < bobsFollowers.length; bf++){
  for (let tf = 0; tf < tinasFollowers.length; tf++){
    if(bobsFollowers[bf] === tinasFollowers[tf]){
      mutualFollowers.push(bobsFollowers[bf])
    }
  }
};

// while loop to check not != the card

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;

while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// decoding secret messages

const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers[];

console.log(bigNumbers )