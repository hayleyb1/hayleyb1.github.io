//printing the date in the header
///this was erroring as it was looking for it in the semantic file and it didn't exist. would need if statement
//eg if exists then do this
document.getElementById("datetime").innerHTML = new Date();

//footer text
document.getElementById("footertext").innerHTML = "sup from javascript";

//hayley cool alert
// document.getElementById("coolestbutton")?.addEventListener("click", function() {
//     alert("stop it 🥲");
// });

// document.getElementById("coolestbutton")?.addEventListener("click", function() {
//         document.getElementById("confirmation").innerHTML = "stop it 🥲";
//     });

// //text area submit
// document.getElementById("textsubmit")?.addEventListener("click", function() {
//     document.getElementById("textaftersubmit").innerHTML = "thanks";
// });

//using the style property
const footer = document.querySelector('#footertext');
footer.style.color = 'red';

///using append

// const ul = document.querySelector('DOMlist');
// const li = document.createElement('li');

// ul.append(li)

// li.innerText = 'hayleyiscool';

// li.setAttribute('id', 'h2')

console.log('hayley')