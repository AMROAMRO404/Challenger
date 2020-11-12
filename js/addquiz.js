let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("topic").innerHTML = "";
for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("topic").innerHTML += "<option value= " + topicsFromLocal[i] + " >" + topicsFromLocal[i] + "</option>";
}



let quizzez = [];

function saveQuiz() {
    // Check for LocalStorage support.
    if (localStorage.quizzez) {
        let title = document.getElementById('quiz-title').value;
        let selectedTopic = document.getElementById("topic").value;
        let numberOfQuestion = document.getElementById('num-questions').value;
        let quiz = {
            "quizTitle": title,
            "topic": selectedTopic,
            "numberOfquestions": numberOfQuestion
        }
        quizzez = JSON.parse(localStorage.quizzez);
        quizzez.push(quiz);
        //store array into localstorage
        localStorage.setItem("quizzez", JSON.stringify(quizzez));
    } else {
        let title = document.getElementById('quiz-title').value;
        let selectedTopic = document.getElementById("topic").value;
        let numberOfQuestion = document.getElementById('num-questions').value;
        let quiz = {
            "quizTitle": title,
            "topic": selectedTopic,
            "numberOfquestions": numberOfQuestion
        }
        quizzez.push(quiz);
        //store array into localstorage
        localStorage.setItem("quizzez", JSON.stringify(quizzez));
    }
    console.log(quizzez);
    document.getElementById('quiz-title').value = '';
    document.getElementById('num-questions').value = '';
}