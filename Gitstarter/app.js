console.log("welcome")
// #get elements by id method

const header = document.getElementById('header');
header.style.backgroundColor = 'green';

header.style.borderBottom = ('3px solid orange');

const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = ('Fruit World');
mainHeading.style.color = "orange";

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = ('green');

const thanking = document.getElementById('thanks');
thanking.innerHTML = ('<p>Please visit us again</p>')

// #get elements by tagname method

const listitem = document.getElementsByTagName('li');
listitem[4].style.color = ('blue');
for (let i = 0; i < listitem.length; i++){
    listitem[i].style.fontStyle = 'italic';
} 

// get elements using query selector

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '10px'
fruits.style.listStyleType = 'none'

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px'

const fruititems = document.querySelectorAll('.fruits li');
for (let i = 0; i < fruititems.length; i++){
    fruititems[i].style.backgroundColor = 'white';
    fruititems[i].style.padding = '10px';
    fruititems[i].style.margin = '10px';
    fruititems[i].style.borderRadius = '5px';
}

const oddFruitsItems = document.querySelectorAll('.fruits :nth-child(odd)');
for (let i = 0; i < oddFruitsItems.length; i++){
    oddFruitsItems[i].style.backgroundColor = 'lightgray';
}
// Write answer to the questions asked below:
const heading = document.querySelector('#basket-heading');
heading.style.color = 'brown';

const fruit = document.querySelectorAll('.fruits :nth-child(even)');
for (let i = 0; i < fruit.length; i++){
    fruit[i].style.backgroundColor = 'brown';
    fruit[i].style.color = 'white';
}