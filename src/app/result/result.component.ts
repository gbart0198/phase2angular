import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Quiz } from '../classes/quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  correctAnswers: number;
  quizName: string;
  quizNum: string;
  quizRoute: string;
  currQuiz: Quiz = new Quiz(null);
  percent: string;
  quizQuestions: number;

  constructor(private quizzesService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.quizNum = this.route.snapshot.paramMap.get("id");
    this.correctAnswers = parseInt(this.route.snapshot.paramMap.get("correct"));
    switch (this.quizNum) {
      case "1": {
        this.quizRoute = 'assets/javascript.json';
        break;
      }
      case "2": {
        this.quizRoute = 'assets/java.json';
        break;
      }
      case "3": {
        this.quizRoute = 'assets/python.json';
        break;
      }
    }
    this.createQuiz(this.quizRoute)
  }

  createQuiz(name: string) {
    this.quizzesService.getQuiz(name).subscribe(data => {
      this.currQuiz = new Quiz(data);
      this.quizName = this.currQuiz.quizName;
      this.quizQuestions = this.currQuiz.questions.length;
      this.percent = (100*(this.correctAnswers/this.quizQuestions)).toFixed(2);
    })
  }

  restart() {
    let path = "/quiz/";
    path+= this.quizNum;
    this.router.navigateByUrl(path);
  }

  mainMenu() {
    this.router.navigateByUrl("/");
  }

}
