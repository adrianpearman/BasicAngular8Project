export class Ingredient {
    public name:string
    public amount: number

    constructor(name: string, amount: number){
        this.name = name
        this.amount = amount
    }

    // Short Handed Syntax Below
    // constructor(public name: string, public amount: number){}
}