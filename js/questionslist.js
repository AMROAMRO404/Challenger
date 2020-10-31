function showData() {
    let retrievedData2 = localStorage.getItem("questions");
    let questionsFromLocal = JSON.parse(retrievedData2);

    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Question description" + "</th>" + "<th>" + "Topic Name" + "</th>" + "<th>" + "Options" + "</th>" + "<tr>";
    for (let i = 0; i < questionsFromLocal.length; i++) {
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + questionsFromLocal[i].title + "</td>" + "<td>" + questionsFromLocal[i].topic + "</td>" + "<td>" + questionsFromLocal[i].options + "</td>" + "</tr>";
    }
    console.log(questionsFromLocal);
}

showData();