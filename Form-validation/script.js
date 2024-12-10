const nameVal = document.querySelector("#name-value");

const nameErr = document.querySelector("#name-error");

const btn = document.querySelector("#btn");

function nameHandler(){
    const name = nameVal.value;
    console.log(name);
    if(name.length == 0){
        btn.disabled = true;
        nameErr.textContent = "name is required";
        return false;
    }
}

nameVal.addEventListener("keypress",nameHandler)