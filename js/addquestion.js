let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("topic").innerHTML = "";
for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("topic").innerHTML += "<option>" + topicsFromLocal[i] + "</option>";
}
let questions = [];

let optionsArray = [];
let i = 0;
let arrayOfOption = [];

function fillOptionsToGother() {
    let options = document.getElementById('option');
    localStorage.setItem('arrayOfOption', JSON.stringify(arrayOfOption));
    arrayOfOption.push(options.value);
    document.getElementById('option').value = '';
    return arrayOfOption;

}

function saveQuestion() {

    // Check for LocalStorage support.
    if (localStorage) {
        let question = document.getElementById('question').value;
        questions.push(question);
        //store array into localstorage
        localStorage.setItem("questions", JSON.stringify(questions));
        let arrayHoldOptions = fillOptionsToGother();
        optionsArray.push(arrayHoldOptions);
        localStorage.setItem('optionsArray', JSON.stringify(optionsArray));
        i++;
    }

    //reinitialize the array
    arrayOfOptions = [];
    document.getElementById('question').value = '';
    console.log(localStorage.getItem('questions'));
    console.log(localStorage.getItem('arrayOfOption'));
    console.log(localStorage.getItem('optionsArray'));
    console.log(localStorage.getItem('topics'));
}


function addOption() {
    document.getElementById("options-list").innerHTML = '<input type="text" id="option" name="options[]">';
}

// function deleteOption() {
//     document.getElementById("options-list").innerHTML -= '<input type="text" name="options[options.length]">';
// }