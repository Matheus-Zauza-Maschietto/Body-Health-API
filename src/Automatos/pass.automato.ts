import { Automato } from "../Models/automato";

export class PassAutomato{
    private username: string;
    private graph: (Automato|null)[][];
    constructor(username:string, graph: (Automato|null)[][]){
        this.username = username;
        this.graph = graph;
    }

    public validatePass(): boolean{
        let usernameCount: number = 0;
        for (let i = 0; i < this.graph.length; i++) {
            const graphLine = this.graph[i];
            let automatoFind: boolean = false;

            for (let j = 0; j < graphLine.length; j++) {
                const graphCell = graphLine[j];
                if(graphCell != null){
                    if(this.applyRegex(graphCell, this.username[usernameCount]) == true){
                        automatoFind = true;
                        if(automatoFind == true && this.username.length == usernameCount && graphCell.isFinal == true){
                            return true;
                        }
                        usernameCount++;
                        i = --j;
                        break;
                    }
                }
            }
            if(automatoFind == false)
                return false;
        }
        return false;
    }

    private applyRegex(automato: Automato, text: string): boolean{
        let regex = new RegExp(automato.regex);
        return regex.test(text);
    }
}