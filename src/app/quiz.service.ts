import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuiz(quizName: string) {
    return this.http.get(quizName);
  }

  getQuizzes() {
    return [
      { quizId: 'assets/javascript.json', quizName: 'Javascript'},
      { quizId: 'assets/java.json', quizName: 'Java'},
    ]
  }

}
