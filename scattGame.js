let id = 0
let result;
let isRolling = false; //roll cooldown

document.getElementById('roll').addEventListener('click', () => {

        // check if roll is already in progress
        if (isRolling) {
            console.log('Roll already in progress. Please wait...');
            return; // ignore click event
        }
    
        console.log('Button clicked. Starting roll...');
    
        // set roll in progress flag to true
        isRolling = true;


    let date = new Date()
    let time = date.toLocaleTimeString();
    result = getRandomLetter(getRandomInt(20))
    let tableBody = document.getElementById('tableBody');
    let row = tableBody.insertRow(0);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = time;
    row.insertCell(1).innerHTML = "Rolling...";
    document.getElementById('result').innerHTML = result ;
    id++


    // Step 3: Use setInterval to cycle through random letters
    let iteration = 0;
    intervalId = setInterval(() => {
        document.getElementById('result').innerHTML = getRandomLetter(getRandomInt(20));
        iteration++;

        // Step 5: Stop the interval after a certain number of iterations
        if (iteration >= 12) {
            clearInterval(intervalId);
            result = getRandomLetter(getRandomInt(20));
            document.getElementById('result').innerHTML = result;
            row.cells[1].innerHTML = result; // Update the row with the final result
            isRolling = false; //reset flag
        }
    }, 40);

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  document.getElementById('clear-history').addEventListener('click', () => {
    let tableBody = document.getElementById('tableBody');
    clearHistory(tableBody);
    
})

function clearHistory(element) {
    document.getElementById('result').innerHTML='';
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function getRandomLetter(num) {
    const letters = 'ABCDEFGHIJKLMNOPRSTW';
    return letters.charAt(num) || 'Invalid Number';
}


// function getRandomLetter(num) {
    
//     switch(num){
//         case 1:
//             return 'A';
//         case 2:
//             return 'B';
//         case 3:
//             return 'C';
//         case 4:
//             return 'D';
//         case 5:
//             return 'E';
//         case 6:
//             return 'F';
//         case 7:
//             return 'G';
//         case 8:
//             return 'H';
//         case 9:
//             return 'I';
//         case 10:
//             return 'J';
//         case 11:
//             return 'K';
//         case 12:
//             return 'L';
//         case 13:
//             return 'M';
//         case 14:
//             return 'N';
//         case 15:
//             return 'O';
//         case 16:
//             return 'P';
//         case 17:
//             return 'R';
//         case 18:
//             return 'S';
//         case 19:
//             return 'T';
//         case 20:
//             return 'W';

//         default: `Invalid Number`
//         }
//     }
