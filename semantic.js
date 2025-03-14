document.getElementById("datetime").innerHTML = new Date();
document.getElementById("footertext").innerHTML = "sup from javascript";


const ul = document.querySelector('ul');
const li = document.createElement('li')

ul.append(li)
li.innerText = 'hayleyiscool';

const firstListItem = document.querySelector('.list-items')

console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)

console.log(ul.parentElement)
console.log(ul.parentElement.parentElement)


console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

ul.childNodes[1].style.backgroundColor = 'pink' 