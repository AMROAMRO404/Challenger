function showData() {
    let retrievedData = localStorage.getItem("topics");
    let topicsFromLocal = JSON.parse(retrievedData);
    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Topic Name" + "</th>" + "<tr>";
    for (let i = 0; i < topicsFromLocal.length; i++) {
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + topicsFromLocal[i] + "</td>" + "</tr>";
    }
}

showData();