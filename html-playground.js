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

///text area key event

const textBox = document.querySelector('#textbox');
const output = document.querySelector('#keyevent');

function textOutput() {
    output.innerHTML = 'you pressed a button.'
};

textBox.addEventListener("keydown", textOutput);

//text area submit
document.getElementById("textsubmit")?.addEventListener("click", function() {
    document.getElementById("textaftersubmit").innerHTML = "thanks";
});

//event objects - text box area 2 --- can't make it show the actual key clicked!!!

const textBox2 = document.querySelector('#textbox2');
const output2 = document.querySelector('#keyevent2');

textBox2.addEventListener("keydown", (event) => {
    output2.textContent = 'you pressed "${event.key}".';
});

//using the style property
const footer = document.querySelector('#footertext');
footer.style.color = 'red';

/////

