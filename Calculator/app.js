const displayInput = document.querySelector("#display");
// const buttons = document.querySelectorAll(".button");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(button);
        console.log(e);
        console.log(e.target);
        const cal = e.target.innerText;
        // displayInput.append(cal);
        displayInput.innerText += cal;

    })

})

