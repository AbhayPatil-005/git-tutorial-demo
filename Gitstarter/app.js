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

//creating  elements and Dom relations
// Write your code below:
// create element
const para = document.createElement('p');
// create texttnode
const paraText = document.createTextNode('Total fruits: 4');
// append child
para.appendChild(paraText);
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
secondDiv.appendChild(para);
// insert before 
const ul = document.querySelector('ul');
secondDiv.insertBefore(para,ul);
const basketHeading = document.getElementById('basket-heading');
secondDiv.insertBefore(para,basketHeading);
// set attribute,className, id
para.className = 'fruitCount';
para.id = 'fruitsTotal';
para.setAttribute('title', 'fruitsTotal')

const subHeading = document.createElement('h3');
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(subHeadingText);
const firstDiv = divs[0];
firstDiv.appendChild(subHeading)
subHeading.style.fontStyle = 'italic';
para.id = 'fruits-total';

//add and delete fruit
const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    const Editbtn = document.createElement('button');
    const editbtntxt = document.createTextNode('Edit');
    Editbtn.appendChild(editbtntxt);
    Editbtn.className = 'edit-btn';
    li[i].appendChild(Editbtn);
}

// Implement the code as in video but with one extra ‘Edit’ button in ‘li’

const Form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruittoadd = document.getElementById('fruit-to-add');
    const newli = document.createElement('li');
    const newlitxt = document.createTextNode(fruittoadd.value);
    newli.appendChild(newlitxt);
    newli.className = 'fruit';
    
    const dltbtn = document.createElement('button');
    const dltbtntxt = document.createTextNode('x');
    dltbtn.appendChild(dltbtntxt);
    dltbtn.className = 'delete-btn';
    newli.appendChild(dltbtn);

    const edtbtn = document.createElement('button');
    const edtbtntxt = document.createTextNode('Edit');
    edtbtn.appendChild(edtbtntxt);
    edtbtn.className = 'edit-btn';
    newli.appendChild(edtbtn);
    fruits.appendChild(newli);
})

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const FruitToDelete = event.target.parentElement;
        fruits.removeChild(FruitToDelete);
    };
})
// Implement the code as in video but with one extra 'Edit' button in 'li'

