function showData() {
    let retrievedData = localStorage.getItem("topics");
    let topicsFromLocal = JSON.parse(retrievedData);
    let retrievedData2 = localStorage.getItem("questions");
    let questionFromLocal = JSON.parse(retrievedData2);
    let retrievedData3 = localStorage.getItem("optionsArray");
    let optionsArrayFromLocal = JSON.parse(retrievedData3);
    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Question description" + "</th>" + "<th>" + "Topic Name" + "</th>" + "<th>" + "Options" + "</th>" + "<tr>";
    for (let i = 0; i < questionFromLocal.length; i++) {
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + questionFromLocal[i] + "</td>" + "<td>" + topicsFromLocal[i] + "</td>" + "<td>" + optionsArrayFromLocal[i] + "</td>" + "</tr>";
    }
}

showData();