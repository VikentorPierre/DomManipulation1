/*
    DOM Selector
    " allow you to select a element tag from the dom"
    " we have two types of selectors single element and multiple element"

*/

// we have two singlr elemnt seclectors 
// document.getelamentbyid
const singleElement = document.getElementById("head5")
console.log(singleElement.innerHTML);

// AFTER WE SELECT AN element 
/*

*/
console.log(singleElement.id);
console.log(singleElement.className);

// change the css on the element 

singleElement.style.color = 'red'; // change the text color red 
//singleElement.style.display = 'none';

// change the content inside the tag 1. textContent 2. innerText 
singleElement.textContent = "the first method to change inside html";

singleElement.innerText = " this is the second method we use to change the inner text";

singleElement.innerHTML += "<span style = 'color:blue'> this is a span element injected  </span>"




