const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// Lấy ra các phần tử HTML
const randomButton = document.getElementById('btn');
const quizContainers = document.querySelectorAll('.quiz-item');

// Hàm để lấy một số ngẫu nhiên trong khoảng [min, max]
function getRandomNumber(min, max) {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range) + min;
    return randomNumber;
}
// Hàm để random câu trả lời cho các câu hỏi
function randomizeAnswers() {
    quizContainers.forEach(container => {
        const answers = container.querySelectorAll('input[type="radio"]');
        const randomIndex = getRandomNumber(0, answers.length - 1);
        answers.forEach(answer => {
            answer.checked = false;
        });
        answers[randomIndex].checked = true;
    });
}
// Xử lý sự kiện khi nhấn nút Random Answer
randomButton.addEventListener('click', () => {
    randomizeAnswers();
});
