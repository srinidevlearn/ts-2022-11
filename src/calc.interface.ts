
export type ICALCSTATE = 'input1'|'input2';
export interface ICalc{
    input1:string,
    input2:string,
    state:ICALCSTATE,
    result:number,
    add:() => void;
    mul:() => void;
    div:() => void;
    sub:() => void;
}
    