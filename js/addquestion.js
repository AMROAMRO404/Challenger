let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("topic").innerHTML = "";
for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("topic").innerHTML += "<option value= " + topicsFromLocal[i] + " >" + topicsFromLocal[i] + "</option>";
}
let i = 0;
let questionsTitle = [];
let arrayOfOption = [];
let optionsArray = [];
let questions = [];

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
        let questionTitle = document.getElementById('question-title').value;
        let selectedTopic = document.getElementById("topic").value;
        let arrayHoldOptions = fillOptionsToGother();
        let questionObject = {
            "title": questionTitle,
            "topic": selectedTopic,
            "options": arrayHoldOptions
        };
        questions.push(questionObject);
        //store array into localstorage
        localStorage.setItem("questions", JSON.stringify(questions));
        localStorage.setItem("questionsTitle", JSON.stringify(questionsTitle));
        optionsArray.push(arrayHoldOptions);
        arrayOfOption = [];
        localStorage.setItem('optionsArray', JSON.stringify(optionsArray));
        i++;
    }

    //reinitialize the array
    arrayOfOptions = [];
    document.getElementById('question-title').value = '';
    console.log(localStorage.getItem('questionsTitle'));
    console.log(localStorage.getItem('arrayOfOption'));
    console.log(localStorage.getItem('optionsArray'));
    console.log(localStorage.getItem('topics'));
    console.log(questions);
}