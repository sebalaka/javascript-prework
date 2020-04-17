// playGame(3);

let rockButton = document.getElementById('play-rock');

rockButton.addEventListener('click', rockClicked);

let paperButton = document.getElementById('play-paper');

paperButton.addEventListener('click', paperClicked);

let scissorsButton = document.getElementById('play-scissors');

scissorsButton.addEventListener('click', scissorsClicked);


// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');
//
// console.log('Wylosowana liczba to: ' + randomNumber);
//
// /* if (randomNumber == 1) {
//   computerMove = 'kamień';
// } else if (randomNumber == 2) {
//   computerMove = 'papier'
// } else {
//   computerMove = "nożyce"
// }
// */
// printMessage('Mój ruch to: ' + ComputerMove);
//
//
//
// console.log('Gracz wpisał: ' + playerInput);
//
// // if(playerInput == '1'){
// //   playerMove = 'kamień';
// // } else if (playerInput == '2') {
// //   playerMove = 'papier'
// // } else if (playerInput == '3') {
// //   playerMove = 'nożyce'
// // } else {
// //   printMessage(playerMove + ' aby zagrać wpisz liczbę 1, 2 lub 3')
// // }
//
// printMessage('Twój ruch to: ' + playerMove);


// if( computerMove == 'kamień' && playerMove == 'papier'){
//   printMessage('Ty wygrywasz!');
// } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
//   printMessage('Wygrywa komputer!');
// } else if (computerMove == 'kamień' && playerMove == 'kamień') {
//   printMessage('Remis!');
// } else if (computerMove == 'papier' && playerMove == 'papier') {
//   printMessage('Remis!');
// } else if (computerMove == 'papier' && playerMove == 'kamień') {
//   printMessage('Wygrywa komputer!');
// } else if (computerMove == 'papier' && playerMove == 'nożyce') {
//   printMessage('Ty wygrywasz!');
// } else if (computerMove == 'nożyce' && playerMove == 'papier') {
//   printMessage('Wygrywa komputer!');
// } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
//   printMessage('Remis!');
// } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
//   printMessage('Ty wygrywasz!');
// } else {
//   printMessage('Nie wpisałeś liczby 1, 2 lub 3');
// }
