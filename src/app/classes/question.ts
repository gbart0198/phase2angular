import { QuestionOption } from './questionOption';

export class Question {
    questionId: number;
    content: string;
    isAnswered: boolean;
    options: QuestionOption[];

    constructor(dataIn: any) {
        if (dataIn) {
            this.questionId = dataIn.questionId;
            this.content = dataIn.content;
            this.options = [];
            for (let op of dataIn.options) {
                this.options.push(op);
            }
        }
    }
}