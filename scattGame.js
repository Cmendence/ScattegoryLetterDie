let id = 0
let result;

document.getElementById('roll').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleTimeString();
    result = getRandomLetter(getRandomInt(20))
    let table = document.getElementById('history');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = time;
    row.insertCell(1).innerHTML = result;
    document.getElementById('result').innerHTML = result ;
    id++
})

function getRandomInt(max) {
    console.log('using max random number of ' + max)
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

function getRandomLetter(num) {
    console.log(`Received ${num} as a random number`)
    
    switch(num){
        case 1:
            return 'A';
        case 2:
            return 'B';
        case 3:
            return 'C';
        case 4:
            return 'D';
        case 5:
            return 'E';
        case 6:
            return 'F';
        case 7:
            return 'G';
        case 8:
            return 'H';
        case 9:
            return 'I';
        case 10:
            return 'J';
        case 11:
            return 'K';
        case 12:
            return 'L';
        case 13:
            return 'M';
        case 14:
            return 'N';
        case 15:
            return 'O';
        case 16:
            return 'P';
        case 17:
            return 'R';
        case 18:
            return 'S';
        case 19:
            return 'T';
        case 20:
            return 'W';

        default: `Invalid Number`
        }
    }
