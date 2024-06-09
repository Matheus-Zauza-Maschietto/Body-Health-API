export class Automato{
    public regex: string;
    public isFinal: boolean;
    constructor(regex: string, isFinal :boolean){
        this.regex = regex;
        this.isFinal = isFinal;
    }
}