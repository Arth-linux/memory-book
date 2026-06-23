let current = 0;

function nextQuestion() {
    let questions = document.querySelectorAll(".question");

    questions[current].classList.remove("active");
    current++;

    if (current >= questions.length) {
        window.location.href = "/final";
        return;
    }

    questions[current].classList.add("active");
}