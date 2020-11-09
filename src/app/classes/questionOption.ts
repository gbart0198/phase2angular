export class QuestionOption {
    optionId: number;
    questionId: number;
    content: string;
    isCorrect: boolean;
    isSelected: boolean;

    constructor(dataIn: any) {
        if (dataIn) {
            this.optionId = dataIn.optionId;
            this.questionId = dataIn.questionId;
            this.content = dataIn.content;
            this.isCorrect = dataIn.isCorrect;
        }
    }
}