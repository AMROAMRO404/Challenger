let retrievedData = localStorage.getItem("titles");
let titlesFromLocal = JSON.parse(retrievedData);
let retrievedData2 = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData2);
document.getElementById("display").innerHTML = "<tr>" + "<th>" + "Quiz Title" + "</th>" + "<th>" + "Topic Name" + "</th>" + "<th>" + "Questions" + "</th>" + "<tr>";
for (let i = 0; i < titlesFromLocal.length; i++) {
    document.getElementById("display").innerHTML += "<tr>" + "<td>" + titlesFromLocal[i] + "</td>" + "<td>" + topicsFromLocal[i] + "</td>" + "</tr>";
}