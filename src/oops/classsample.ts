type Gender = 'M' |'F';
type Gift = 'cycle' | 'laptop' | '';
interface IGift{
    runGift():void
}
class Student implements IGift{


    protected gift:Gift='';
    private name:string;
    protected gender:Gender = "F";
    protected studClass:string;
    protected section:string = "B";
    public isPresent!:boolean; //undefined
    constructor(name:string,studClass:string){
        this.name = name;
        this.studClass = studClass;
    }
    runGift(): void {
       this.gift = '';
    }

}

//inheritance

class StudentDetail extends Student{
    private _isMonthlyFeesPaid:boolean = false;

    get isFeesPaid(){
        return this._isMonthlyFeesPaid;
    }
    payFees(){
        this._isMonthlyFeesPaid = true;
    }
    constructor(name:string,studClass:string,gender:Gender){
        super(name,studClass)
        this.gender = gender;
    }

    updateSection(data:string){
        this.section = data;
    }

    runGift(): void {
        this.gift =  this.gender === 'M' ? 'laptop' : 'cycle'
    }


}



let b =  new StudentDetail('Srini',"10",'M');
b.isPresent = true;
b.updateSection('E1');


console.log(b);

b.payFees();
b.runGift();
console.log(b);
