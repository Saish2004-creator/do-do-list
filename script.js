const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "c"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      correctAnswer: "b"
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    document.getElementById("opt1").textContent = questionData.options[0];
    document.getElementById("opt2").textContent = questionData.options[1];
    document.getElementById("opt3").textContent = questionData.options[2];
    document.getElementById("opt4").textContent = questionData.options[3];
  }
  
  function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("result").style.display = "block";
  
    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("correctAnswers").textContent = score;
    document.getElementById("wrongAnswers").textContent = questions.length - score;
    document.getElementById("score").textContent = score + " / " + questions.length;
  }
  
  loadQuestion();
  