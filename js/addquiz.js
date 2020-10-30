let retrievedData = localStorage.getItem("topics");
let topicsFromLocal = JSON.parse(retrievedData);

let titles = [];

function saveQuiz() {
    // Check for LocalStorage support.
    if (localStorage) {
        let title = document.getElementById('title').value;
        titles.push(title);
        //store array into localstorage
        localStorage.setItem("titles", JSON.stringify(titles));
    }
    console.log(titles.length);
    document.getElementById('title').value = '';
}