// create an Element 

const newh1 = document.createElement('h1');
// add text to 
newh1.textContent = "this is a new h1 element create from javascript";
// add classes 
newh1.className = "newh1";

// add 
newh1.innerHTML += '<a href="#"> this is my link </a>'

// create text node and append 

document.getElementById('body').appendChild(newh1); // 1 way 


console.log(newh1);



/*

to create a new dom element =  document.createElement('h1');

add classes =  newh1.className = "newh1";

to append to a paprent element use =  document.getElementById('body').appendChild(newh1);

*/