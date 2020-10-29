let questions = [];

function saveQuestion() {

    // Check for LocalStorage support.
    if (localStorage) {
        // Add an event listener for form submissions

        // Get the value of the name field.
        var title = document.getElementById('title').value;
        var topic = document.getElementById('topic').value;
        var option = document.getElementById('options').value;
        // Save the name in localStorage.
        localStorage.setItem('title', title);
        localStorage.setItem('topic', topic);
        localStorage.setItem('options', option);

        var title = localStorage.getItem('title');
        var topic = localStorage.getItem('topic');
        var option = localStorage.getItem('option');
        let question = {
            "title": title,
            "topic": topic,
            "option": option

        }
        questions.push(question);
    }
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].title);
    }
}