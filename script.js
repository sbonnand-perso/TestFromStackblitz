// function myFunction(elementID) {

//   document.getElementById(elementID).innerHTML = 'Hello JavaScript';

// }

function logToConsole() {
  console.log('coucou');
}

function duplicateText(element) {
  console.log('je duplique');
  document.getElementById(element).innerText = document.getElementById(element).innerText + document.getElementById(element).innerText ;
}
