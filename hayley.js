document.getElementById("datetime").innerHTML = new Date();

//footer text
document.getElementById("footertext").innerHTML = "sup from javascript";

// hayley cool alert
// document.getElementById("coolestbutton")?.addEventListener("click", function() {
//     alert("stop it 🥲");
// });

document.getElementById("coolestbutton")?.addEventListener("click", function() {
        document.getElementById("confirmation").innerHTML = "stop it 🥲";
    });

//text area submit
document.getElementById("textsubmit")?.addEventListener("click", function() {
    document.getElementById("textaftersubmit").innerHTML = "thanks";
});

//using the style property
const footer = document.querySelector('#footertext');
footer.style.color = 'red';

