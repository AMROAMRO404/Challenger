let topics = [];

function saveTopic() {
    // Check for LocalStorage support.
    if (localStorage) {
        let title = document.getElementById('title').value;
        topics.push(title);
        //store array into localstorage
        localStorage.setItem("topics", JSON.stringify(topics));
    }
    console.log(topics.length);
    document.getElementById('title').value = '';
}