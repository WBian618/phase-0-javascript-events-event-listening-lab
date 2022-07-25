function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert); 
}

function addElement() {
  const element = document.querySelector('Input') 
  element.append('p')
}

console.log(addElement())