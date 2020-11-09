import { Question } from './question';

export class Quiz {
    id: number;
    quizName: string;
    quizDescription: string;
    questions: Question[];

    constructor(dataIn: any) {
        if (dataIn) {
            this.id = dataIn.id;
            this.quizName = dataIn.quizName;
            this.quizDescription = dataIn.quizDescription;
            this.questions = [];
            for (let q of dataIn.questions) {
                this.questions.push(q);
            }
        }   
    }
}