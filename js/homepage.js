let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("subjects").innerHTML = "";
let setId = "topic"; //to give id for each button 

for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("subjects").innerHTML += "<button id=" + setId + (i + 1) + "  value= " + topicsFromLocal[i] + " >" + topicsFromLocal[i] + "</button>";
}