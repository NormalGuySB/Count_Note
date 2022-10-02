let count = 0;
let counting = document.getElementById(`counter`);

function incre() {

    count = count + 1;
    counting.textContent = count;
}

let saving = document.getElementById(`SaveHere`);

function saveBtn() {
    let save = count + ` - `;
    saving.textContent += save; 
    counting.textContent = 0;
    count = 0;
}
function clearBtn() {
    saving.textContent = `YOUR SAVES ARE :- `;
}