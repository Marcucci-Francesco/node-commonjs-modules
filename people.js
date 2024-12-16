const fullName = require('./names.js');
const hobbies = require('./hobbies.js');


function nameAndHobby(){
  return {
    name: fullName("Francesco", "Marcucci"),
    hobby: hobbies("Play Guitar", "Football", "Horses")
  }
}

console.log(nameAndHobby());


