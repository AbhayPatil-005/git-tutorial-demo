console.log("welcome")
#get elements by id method

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

#get elements by tagname method

const listitem = document.getElementsByTagName('li');
listitem[4].style.color = ('blue');
for (let i = 0; i < listitem.length; i++){
    listitem[i].style.fontStyle = 'italic';
} 