import React, { useState,useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./index.css";

const courses = [
  {
    id: 1,
    title: "Μάθημα 1",
    description: "Περιγραφή μαθήματος 1.",
    chapters: [
      {
        id: 1,
        title: 'Κεφάλαιο 1: Εισαγωγή στη Βιολογία',
        video: 'https://www.youtube.com/embed/xxxxxx',
        theory: 'Το πρώτο κεφάλαιο της Α Λυκείου Βιολογίας ασχολείται με το θέμα της κυτταρικής βιολογίας. Η κυτταρική βιολογία μελετά την δομή, τη λειτουργία και την αναπαραγωγή των κυττάρων. Συγκεκριμένα, στο πρώτο κεφάλαιο δίνεται έμφαση στη δομή των κυττάρων και στους βασικούς οργανισμούς τους, όπως οι μεμβράνες και ο κυτταρικός πυρήνας. Επίσης, περιγράφονται οι διαδικασίες της κυτταρικής αναπαραγωγής, όπως η μίτωση και η μείωση της χρωματιδικής αναπαραγωγής (μείωση). Τέλος, στο πρώτο κεφάλαιο γίνεται εισαγωγή στον ένα βασικό νόμο της βιολογίας, το νόμο της κυτταρικής θεωρίας.',
        exercise:[ {
          id: 1,
          question: "Ποια είναι η βασική μονάδα της ζωής;",
          options: ["Οργανισμός", "Κύτταρο","Ατομικό σωματίδιο","Μόριο"],
          answer: "Κύτταρο",
        },{
          id: 2,
          question: "Ποια είναι η συνθετική δομή της μεμβράνης κυττάρων;",
          options: ["Λιπίδια και πρωτεΐνες", "Νουκλεϊκά οξέα", "Κυτταρικό υγρό"],
           answer: "Λιπίδια και πρωτεΐνες",
        },{
           id: 3,
          question: "Ποια είναι η λειτουργία των μιτοχονδρίων;",
          options: ["Φωτοσύνθεση", "Αναπνοή", "Μετατροπή γλυκόζης σε γλυκογόνο"],
           answer: "Αναπνοή"

          
          
        },{
          id: 4,
         question: "Ποιο είναι το κυτταρικό όργανο που είναι υπεύθυνο για την παραγωγή πρωτεϊνών;",
         options: ["Ριβοσώματα", "Γολγία", "Μιτοχόνδρια","Λεμφικά αγγεία"],
          answer: "Ριβοσώματα"

         
         
       },]
        
     
     
     
     
     
      },{
        id: 2,
        title: 'Κεφάλαιο 2: Κυτταρική Βιολογία',
        video: 'https://www.youtube.com/embed/xxxxxx',
        theory: 'Το δεύτερο κεφάλαιο της Βιολογίας στην Α Λυκείου ασχολείται με τους μικροοργανισμούς και τη μικροβιακή ποικιλότητα. Πιο συγκεκριμένα, αναλύει τη δομή και τις λειτουργίες των βακτηρίων και των ιούς, καθώς και τη σχέση τους με τον άνθρωπο και το περιβάλλον. Επίσης, παρουσιάζει τη σημασία των βακτηρίων στη βιομηχανία, τη γεωργία και την υγεία, καθώς και τις διάφορες μεθόδους αντιμετώπισης των μικροοργανισμών που προκαλούν ασθένειες. Τέλος, αναλύει την έννοια της μικροβιακής ποικιλότητας και τη σημασία της για τη διατήρηση της βιοποικιλότητας και την υγεία του πλανήτη μας.',
        exercise:[ {
          id: 1,
          question: "Ποιο από τα παρακάτω είναι σωστή περιγραφή του φαινομένου της διασποράς του φωτός;",
          options: ["α)Η διασπορά είναι μεγαλύτερη για μήκη κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος από ό,τι για μήκη κύματος που βρίσκονται στο μπλε άκρο του φάσματος.", "β) Η διασπορά είναι μεγαλύτερη για μήκες κύματος που βρίσκονται στο μπλε άκρο του φάσματος από ό,τι για μήκες κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος.","γ) Η διασπορά είναι ίδια για όλες τις μήκες κύματος του φωτός."],
          answer: "α)Η διασπορά είναι μεγαλύτερη για μήκη κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος από ό,τι για μήκη κύματος που βρίσκονται στο μπλε άκρο του φάσματος."
        },{
        id: 2,
        question: "Ποια είναι η δομή που είναι υπεύθυνη για τη μετάδοση των γενετικών πληροφοριών στα κύτταρα;",
        options: ["α) Πυρήνας", "β) Μιτοχόνδρια","γ) Ριβοσώματα"],
        answer: "α) Πυρήνας"
        },


      
      ] },{ id: 2,
        title: 'ΔΙΑΓΩΝΙΣΜΑ 1-2 ΚΕΦΑΛΑΙΟΥ',
        video: 'https://www.youtube.com/embed/xxxxxx',
        theory:' Παμε  στο διαγωνισμα τωρα, στο βιντεο εχει σε επανάληψη τα προηγουμενα κεφαλαια.  ',
        exercise:[ {
          id: 1,
          question: "Ποιο από τα παρακάτω είναι σωστή περιγραφή του φαινομένου της διασποράς του φωτός;",
          options: ["α)Η διασπορά είναι μεγαλύτερη για μήκη κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος από ό,τι για μήκη κύματος που βρίσκονται στο μπλε άκρο του φάσματος.", "β) Η διασπορά είναι μεγαλύτερη για μήκες κύματος που βρίσκονται στο μπλε άκρο του φάσματος από ό,τι για μήκες κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος.","γ) Η διασπορά είναι ίδια για όλες τις μήκες κύματος του φωτός."],
          answer: "α)Η διασπορά είναι μεγαλύτερη για μήκη κύματος που βρίσκονται στο κόκκινο άκρο του φάσματος από ό,τι για μήκη κύματος που βρίσκονται στο μπλε άκρο του φάσματος."
        },{
          id: 2,
          question: "Ποιο είναι το κυτταρικό όργανο που είναι υπεύθυνο για την παραγωγή πρωτεϊνών;",
          options: ["Ριβοσώματα", "Γολγία", "Μιτοχόνδρια","Λεμφικά αγγεία"],
           answer: "Ριβοσώματα"},
           {id: 3,
            question: "Ποια είναι η λειτουργία των μιτοχονδρίων;",
            options: ["Φωτοσύνθεση", "Αναπνοή", "Μετατροπή γλυκόζης σε γλυκογόνο"],
             answer: "Αναπνοή"



           },
           {
            id: 4,
            question: "Ποια είναι η βασική μονάδα της ζωής;",
            options: ["Οργανισμός", "Κύτταρο","Ατομικό σωματίδιο","Μόριο"],
            answer: "Κύτταρο",
           },


      
      ]

      },





    ],
  },
  {
    id: 2,
    title: "Μάθημα 2",
    description: "Περιγραφή μαθήματος 2.",
    chapters: [{
      id: 1,
      title: 'Κεφάλαιο 13',
      video: 'https://www.youtube.com/embed/xxxxxx',
      theory: 'Εδώ είναι λίγη θεωρία για το Κεφάλαιο 1 του Μαθήματος 1.',
      exercise: {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα της Ελλάδας;",
        options: ["Αθήνα", "Θεσσαλονίκη"],
        answer: "Αθήνα"
      }
    },
      // Προσθέστε τα κεφάλαια του μαθήματος 2 εδώ
    ],
  },
  // Προσθέστε άλλα μαθήματα εδώ
];


function Chapter() {
  const { courseId } = useParams();
  const currentCourse = courses.find((course) => course.id === parseInt(courseId,10)) || { chapters: [] };
  const currentChapters = currentCourse.chapters;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(currentChapters.length > 0 ? 0 : -1);
  const [totalQuestions, setTotalQuestions] = useState(currentChapters[currentChapterIndex]?.exercise.length || 0);

  const [showAlert, setShowAlert] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Πάρε την τρέχουσα ημερομηνία
  const now = new Date().getTime();

  // Διάβασε το σκορ και τον αριθμό των ερωτήσεων από το localStorage
  const storedData = localStorage.getItem("quizData");
  const parsedData = storedData ? JSON.parse(storedData) : {};

  // Αν έχει περάσει μια ημέρα από την τελευταία ενημέρωση, διαγράψε τα δεδομένα
  if (parsedData.timestamp && now - parsedData.timestamp > 24 * 60 * 60 * 1000) {
    localStorage.removeItem("quizData");
  }

  // Ενημέρωσε το σκορ και τον αριθμό των ερωτήσεων στο localStorage
  const newData = {
    score: score + (parsedData.score || 0),
    totalQuestions: totalQuestions + (parsedData.totalQuestions || 0),
    timestamp: now,
  };
  localStorage.setItem("quizData", JSON.stringify(newData));

  useEffect(() => {
    setSelectedAnswers([]);
  }, [currentChapterIndex]);

  useEffect(() => {
    setTotalQuestions(currentChapters[currentChapterIndex]?.exercise.length || 0);
    setSelectedAnswers([]);
    setUserAnswers([]);
  }, [currentChapterIndex]);

  const handleAnswerChange = (selectedAnswer, index) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleQuizSubmit = () => {
    const correctAnswers = currentChapters[currentChapterIndex].exercise.filter(
      (exercise, index) => exercise.answer === selectedAnswers[index]
    ).length;

    setScore(correctAnswers);
    setShowAlert(true);
    setUserAnswers(selectedAnswers);
  };

  return (
    <Container className="d-flex justify-content-right align-items-center vh-10">
    
      
      <h2 className=" text-left">{currentChapterIndex !== -1 ? currentChapters[currentChapterIndex].title : 'Δεν υπάρχει κεφάλαιο'}</h2>
      <Row>
        
        <Col lg={8} className="mb-4 ">
          <iframe
            width="100%"
            height="400"
            src={currentChapterIndex !== -1 ? currentChapters[currentChapterIndex].video : ''}
            title={currentChapterIndex !== -1 ? currentChapters[currentChapterIndex].title : ''}
            allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
            <p className="mt-4">{currentChapterIndex !== -1 ? currentChapters[currentChapterIndex].theory : ''}</p>
            {currentChapterIndex !== -1 && currentChapters[currentChapterIndex].exercise.length > 0 && (
        <>
          <h4 className="mt-4">Άσκηση</h4>
          <div>
            {currentChapters[currentChapterIndex].exercise.map((exercise, index) => (
              <div key={exercise.id}>
                <h5>{exercise.question}</h5>
                <ul className="list-unstyled">
                  {exercise.options.map((option) => (
                    <li key={option}>
                      <label>
                      <input
  type="radio"
  name={`question-${index}`}
  value={option}
  checked={selectedAnswers[index] === option}
  onChange={(e) => handleAnswerChange(e.target.value, index)}
  />
  
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))} <Col lg={4} className="mb-4 d-flex align-items-center justify-content-left">
            <div
            style={{
              background: "green",
              color: "white",
              padding: "10px",
              borderRadius: "50px",
             

            }}
          >
            Σκορ: {score}/{totalQuestions}
          </div>
        </Col>
            <Button variant="primary" onClick={handleQuizSubmit}>Υποβολή Απαντήσεων</Button>
            
            



        
          </div>
        </>
      )}
  
      {showAlert && (
        <Alert variant={score === totalQuestions ? 'success' : 'danger'} onClose={() => setShowAlert(false)} dismissible>
          {score === totalQuestions ? 'Συγχαρητήρια! Απάντησες σωστά σε όλες τις ερωτήσεις.' : 'Δυστυχώς απάντησες λάθος σε μερικές ερωτήσεις. Προσπάθησε ξανά.'}
        </Alert>
      )}
  
    </Col>
  
   
  
  </Row>
  
  <Row>
    <Col className="text-center">
      <Button variant="primary" className="mx-2" onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)} disabled={currentChapterIndex === 0}>Προηγούμενο Κεφάλαιο</Button>
      <Button variant="primary" className="mx-2" onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)} disabled={currentChapterIndex === currentChapters.length - 1}>Επόμενο Κεφάλαιο</Button>

</Col>
</Row>
</Container>
);
}
export default Chapter;  