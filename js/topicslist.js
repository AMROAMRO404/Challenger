function showData() {
    var retrievedData = localStorage.getItem("topics");
    var topicsFromLocal = JSON.parse(retrievedData);
    document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Topic Name" + "</th>" + "<tr>";
    for (let i = 0; i < topicsFromLocal.length; i++) {
        document.getElementById("display").innerHTML += "<tr>" + "<td>" + topicsFromLocal[i] + "</td>" + "</tr>";
    }
}

showData();