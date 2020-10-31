function showData() {
    let retrievedData2 = localStorage.getItem("quizzez");
    let quizzezFromLocal = JSON.parse(retrievedData2);

    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Quiz Title" + "</th>" + "<th>" + "Topic" + "</th>" + "<th>" + "number of question" + "</th>" + "<tr>";
    for (let i = 0; i < quizzezFromLocal.length; i++) {
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + quizzezFromLocal[i].quizTitle + "</td>" + "<td>" + quizzezFromLocal[i].topic + "</td>" + "<td>" + quizzezFromLocal[i].numberOfquestions + "</td>" + "</tr>";
    }
    console.log(quizzezFromLocal);
}

showData();