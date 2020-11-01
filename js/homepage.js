let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);
document.getElementById("subjects").innerHTML = "";
for (let i = 0; i < topicsFromLocal.length; i++) {
    document.getElementById("subjects").innerHTML += "<button   value= " + topicsFromLocal[i] + " >" + topicsFromLocal[i] + "</button>";
}