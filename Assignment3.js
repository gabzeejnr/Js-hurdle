const maxScore = 100;
const minScore = 0;
const grade = "Your Grade is ";
let value;

function getGrade() {
  if (value >= 75) {
    console.log(grade + "A")
  } else if (value >= 65) {
    console.log(grade + "B")
  } else if (value >= 50) {
    console.log(grade + "C")
  } else if(value >=45) {
    console.log(grade + "D")
  } else {
    console.log(grade + "F")
  }
}

while (true) {
  const input = prompt('Enter Score from 0 to 100');
  
  
  value = Number(input);
  if (!isNaN(value) && value >= minScore && value <= maxScore) {
    
  } else {
    console.log("Stop Entering Absurd Values")
  }
}