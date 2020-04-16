export class Feedback {
    public Id: number;
    public name: string;
    public email:string;
    public subject:string;
    public message:string;

    constructor(Id:number,name: string,email:string,subject:string,message:string) {
    this.Id = Id;
    this.name = name;
    this.email =email;
    this.subject = subject;
    this.message = message;
    }
    }