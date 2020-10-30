let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("topic").innerHTML = "";
for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("topic").innerHTML += "<option>" + topicsFromLocal[i] + "</option>";
}
let i = 0;
let questions = [];
let arrayOfOption = [];
let optionsArray = [];

function fillOptionsToGother() {
    let options = document.getElementById('option');
    localStorage.setItem('arrayOfOption', JSON.stringify(arrayOfOption));
    arrayOfOption.push(options.value);
    document.getElementById('option').value = '';
    return arrayOfOption;

}

function deleteOption() {
    document.getElementById('option').value = '';
    arrayOfOption.pop();
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
        arrayOfOption = [];
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