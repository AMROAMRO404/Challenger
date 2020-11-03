function showData() {
    let retrievedData2 = localStorage.getItem("questions");
    let questionsFromLocal = JSON.parse(retrievedData2);

    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Question description" + "</th>" + "<th>" + "Topic Name" + "</th>" + "<th>" + "Options" + "</th>" + "<th>" + "Correct answers" + "</th>" + "<tr>";
    for (let i = 0; i < questionsFromLocal.length; i++) {
        let optionsString = "";
        let correctness = "";
        for (j = 0; j < questionsFromLocal[i].options.length; j++) {
            optionsString += questionsFromLocal[i].options[j].options + " ";
            if (questionsFromLocal[i].options[j].correctness) {
                correctness += questionsFromLocal[i].options[j].options + " ";
            }
        }
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + questionsFromLocal[i].title + "</td>" +
            "<td>" + questionsFromLocal[i].topic + "</td>" +
            "<td>" + optionsString + "</td>" +
            "<td>" + correctness + "</td>" +
            "</tr>";
    }
    console.log(questionsFromLocal);
}

showData();