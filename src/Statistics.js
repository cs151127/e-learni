import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const quizzes = [
  {
    title: "Κεφάλαιο 1",
    questions: [
      {
        question: "Ποια είναι η πρωτεύουσα της Ελλάδας?",
        choices: ["Αθήνα", "Θεσσαλονίκη", "Πάτρα", "Ηράκλειο"],
        correctIndex: 0,
      },
      {
        question: "Ποιο είναι το μεγαλύτερο νησί της Ελλάδας;",
        choices: ["Κρήτη", "Εύβοια", "Ρόδος", "Χίος"],
        correctIndex: 0,
      },
      // ... ερωτήσεις για το κεφάλαιο 1
    ],
  },
  {
    title: "Κεφάλαιο 2",
    questions: [
      // ... ερωτήσεις για το κεφάλαιο 2
    ],
  },
  // ... περισσότερα κεφάλαια
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(1800);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const now = new Date();
const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;

  const endQuizMessage = () => {
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    if (!selectedQuiz) {
      return '';
    } else if (score < 5) {
      return `Προσπάθησε καλύτερα! (Σκόρ: ${score}/${selectedQuiz.questions.length}, ${formattedDate})`;
    } else if (score < 8) {
      return `Μπορείς να τα καταφέρεις! (Σκόρ: ${score}/${selectedQuiz.questions.length}, ${formattedDate})`;
    } else {
      return `Είσαι εξαιρετικός! (Σκόρ: ${score}/${selectedQuiz.questions.length}, ${formattedDate})`;
    }
  };
  
  const showEndQuiz = () => {
    setSelectedQuiz(null);
    setAnsweredQuestions({});
  };
  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("score"));
    const storedTimestamp = localStorage.getItem("timestamp");

    if (storedScore && storedTimestamp && Date.now() - storedTimestamp < 86400000) {
      setScore(storedScore);
    }

    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

 
  const handleAnswer = (answerIndex) => {
    if (answerIndex === selectedQuiz.questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }

    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuestion]: answerIndex,
    });

    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("timestamp", Date.now());
  }, [score]);

  const restartQuiz = () => {
    
    setCurrentQuestion(0);
    setScore(0);
    setTimer(1800);
    setAnsweredQuestions({});
  };

  const selectQuiz = (index) => {
    setSelectedQuiz(quizzes[index]);
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
  <Container className="d-flex justify-content-center align-items-center vh-100">
    {selectedQuiz ? (
      <>
        <Row>
          <Col lg={8}>
            <h1>{selectedQuiz.questions[currentQuestion]?.question}</h1>
            <div className="choices-container">
              {selectedQuiz.questions[currentQuestion]?.choices?.map((choice, index) => (
                <button
                  key={index}
                  className="choice-button btn btn-primary m-1"
                  onClick={() => handleAnswer(index)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </Col>
          <Col lg={4}>
            <h4>Στατιστικά</h4>
            <p>
              Σκορ: {score}/{selectedQuiz.questions.length}
            </p>
            <p>Χρόνος: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60} δευτερόλεπτα</p>
          </Col>
        </Row>

        <Row>
          <Col>
            {currentQuestion > 0 && (
              <Button
                className="mx-2"
                variant="secondary"
                onClick={previousQuestion}
              >
                Προηγούμενη ερώτηση
              </Button>
            )}
            {currentQuestion < selectedQuiz.questions.length - 1 && (
              <Button
                className="mx-2"
                variant="primary"
                onClick={nextQuestion}
              >
                Επόμενη ερώτηση
              </Button>
            )}
          </Col>
        </Row>

        {currentQuestion >= selectedQuiz.questions.length && (
          <Row>
            <Col>
              <Alert
                variant={score >= selectedQuiz.questions.length * 0.5 ? "success" : "danger"}
              >
                {score >= selectedQuiz.questions.length * 0.5
                  ? "Μπράβο! Έχετε πετύχει " + score + " από " + selectedQuiz.questions.length
                  : "Δες καλύτερα το κεφάλαιο. Έχετε πετύχει " +
                    score +
                    " από " +
                    selectedQuiz.questions.length}
              </Alert>
              <Button onClick={restartQuiz}>Ξαναδοκίμασε</Button>
              <Button onClick={showEndQuiz}>Τέλος Quiz</Button>
            </Col>
          </Row>
        )}
      </>
    ) : (
      <Row>
        <Col className="text-center">
          <h2>Στατιστικά</h2>
          <p>
            {score}/{selectedQuiz ? selectedQuiz.questions.length : 0} - {endQuizMessage()}
          </p>
          <h4>Διάλεξε ένα διαγώνισμα:</h4>
          {quizzes.map((quiz, index) => (
         
<Button
  key={index}
  className="m-1"
  variant="primary"
  onClick={() => selectQuiz(index)}
>
  {quiz.title}
</Button>
                
                ))}
            </Col>
          </Row>
        )}
      </Container>
    );
  };
  
  export default Quiz;
  