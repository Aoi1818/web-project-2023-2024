

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="q1"]:checked').value
  const correctAnswer = 'Paris'
  
  if (selectedAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct!'
  } else {
    document.getElementById('result').textContent = 'Incorrect. The correct answer is Paris.'
  }
}

