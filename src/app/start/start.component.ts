import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../classes/quiz';
import { Router } from '@angular/router';
import { Question } from '../classes/question';
import { QuestionOption } from '../classes/questionOption';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  invalid = false;
  quizSelected = false;
  allQuizzes: any[];
  currQuiz: Quiz = new Quiz(null);
  quizName: string;
  quizQuestions: number;

  constructor(private quizzesService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.allQuizzes = this.quizzesService.getQuizzes();
    this.quizName = this.allQuizzes[0].quizName;
    this.createQuiz(this.allQuizzes[0].quizId);
  }

  createQuiz(name: string) {
    this.quizzesService.getQuiz(name).subscribe(data => {
      this.currQuiz = new Quiz(data);
      this.quizQuestions = this.currQuiz.questions.length;
    })
  }

  onChange() {
    this.quizzesService.getQuiz(this.quizName).subscribe(data => {
      this.currQuiz = new Quiz(data);
      this.quizSelected = true;
      this.invalid=false;
    })
  }

  startQuiz() {
    let quizNum: number;
    switch (this.quizName) {
      case ('assets/javascript.json'): {
        quizNum = 1;
        break;
      }
      case ('assets/java.json'): {
        quizNum = 2;
        break;
      }
    }
    if (quizNum) {
      let route: string = '/quiz/' + quizNum;
      this.router.navigateByUrl(route);
    } else {
      this.invalid = true;
    }
  }

}
