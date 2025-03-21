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

console.log(ul.children)

ul.childNodes[3].style.backgroundColor = 'pink' 

//// queryselector

const section = document.querySelector('.section1');
const withinsection = section.querySelector('p').innerHTML;

console.log(withinsection);
console.log(withinsection + " hayley is cool");

/// above using getElementsBy

const element2 = document.getElementById("two")
const element2text = element2.innerHTML
console.log(element2text)

///

const container = document.getElementsByClassName("container")[0]
const listitem = container.getElementsByClassName("bigbutton")[0]

console.log(listitem.innerHTML)

//event listner syntax:
//element.addEventListener("click", function)

const button2 = document.querySelector('.btn2');

function alertbutton2() {
    alert('stop pushing my buttons')
};

button2.addEventListener("click", alertbutton2)

//mouseover

const changeBackgroundColour = document.querySelector('.bigbutton')

function chgBgdCol() {
    changeBackgroundColour.style.backgroundColor = 'black'
}

function returnBgdCol() {
    changeBackgroundColour.style.backgroundColor = ''
}

changeBackgroundColour.addEventListener("mouseover", chgBgdCol)
changeBackgroundColour.addEventListener("mouseout", returnBgdCol)

//hidden content
const revealInfo = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')
    ) {
        hiddenContent.classList.remove('reveal-btn')
    }   else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealInfo.addEventListener('click', revealContent)

//event propogation

