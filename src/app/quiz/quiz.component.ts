import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../classes/quiz';
import { Question } from '../classes/question';
import { QuestionOption } from '../classes/questionOption';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  questionForm: FormGroup;
  quizNum: String

  allQuizzes: any[];
  correctAnswers = 0;
  currQuiz: Quiz = new Quiz(null);
  currQuestionNum: number;
  currQuestion: Question = new Question(null);
  quizRoute: string;
  quizQuestions: number;
  answered = false;

  constructor(private quizzesService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.allQuizzes = []
    this.quizNum = this.route.snapshot.paramMap.get("id");
    console.log(this.quizNum);
    switch (this.quizNum) {
      case "1": {
        this.quizRoute = 'assets/javascript.json';
        break;
      }
      case "2": {
        this.quizRoute = 'assets/java.json';
        break;
      }
    }
    this.createQuiz(this.quizRoute);
  }

  createQuiz(name: string) {
    this.quizzesService.getQuiz(name).subscribe(data => {
      this.currQuiz = new Quiz(data);
      this.currQuestion = this.currQuiz.questions[0];
      console.log(this.currQuestion.options);
      this.currQuestionNum = 0;
      this.quizQuestions = this.currQuiz.questions.length;
    })
  }

  goNext() {
    this.answered = false;
    if (this.isCorrect(this.currQuestion)) {
      this.correctAnswers++;
    }
    this.currQuestionNum++;
    this.currQuestion = this.currQuiz.questions[this.currQuestionNum];
  }

  onSelection() {
    this.answered=true;
  }

  isCorrect(question: Question) {
    let correct: boolean = true;
    for (let op of question.options) {
      if (op.isSelected && !op.isCorrect) {
        correct = false;
      } else if (op.isCorrect && !op.isSelected) {
        correct= false;
      }
    }
    return correct;
  }

  return() {
    this.router.navigateByUrl('/start');
  }

  submitQuestion() {
    
  }

  mouseEnter(option) {
    console.log(option);
  }
}
