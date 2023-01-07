"use strict";
class Student {
    constructor(name, studClass) {
        this.gift = '';
        this.gender = "F";
        this.section = "B";
        this.name = name;
        this.studClass = studClass;
    }
    runGift() {
        this.gift = '';
    }
}
class StudentDetail extends Student {
    get isFeesPaid() {
        return this._isMonthlyFeesPaid;
    }
    payFees() {
        this._isMonthlyFeesPaid = true;
    }
    constructor(name, studClass, gender) {
        super(name, studClass);
        this._isMonthlyFeesPaid = false;
        this.gender = gender;
    }
    updateSection(data) {
        this.section = data;
    }
    runGift() {
        this.gift = this.gender === 'M' ? 'laptop' : 'cycle';
    }
}
let b = new StudentDetail('Srini', "10", 'M');
b.isPresent = true;
b.updateSection('E1');
console.log(b);
b.payFees();
b.runGift();
console.log(b);
//# sourceMappingURL=classsample.js.map