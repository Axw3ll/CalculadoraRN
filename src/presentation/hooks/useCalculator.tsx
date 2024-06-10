import React, { useReducer, useRef, useState } from 'react';


enum Operator {
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () => {
    const [number, setNumber] = useState<string>('0');
    const [prevNumber, setPrevNumber] = useState<string>('0');

    const lastOperator = useRef<Operator>();

    const buildNumber = (numberString : string) => {
        if(number.includes('.') && numberString === '.'){
            return;
        }
        if(number.startsWith('0') || number.startsWith('-0')){
            //punto decimal.
            if(numberString === '.'){
                 return setNumber(number + numberString);
            }
            //Evaluar si es otro cero y no hay punto
            if(numberString === '0' && number.includes('.')){
                return setNumber(number + numberString);
            }
            //Evaluar si es diferente de cero, es el primer numero y no hay un punto.
            if(numberString !== '0' && !number.includes('.')){
                return(setNumber(numberString));
            }
            //Evitar el 00000
            if(numberString === '0' && !number.includes('.')){
                return;
            }
            return setNumber(number + numberString);
        }
        setNumber(number + numberString);
    };

    const clear = () =>{
        setNumber('0');
        setPrevNumber('0');
    };

    const deletOperation = () => {
        let currentSign = '';
        let temporalNumber = number;

        if(temporalNumber.includes('-')){
            currentSign = '-';
            temporalNumber = number.substring(1);
        }
        if(temporalNumber.length > 1 ){
            return setNumber(currentSign + temporalNumber.slice(0,-1));
        }
        setNumber('0');
    };

    const toogleSign = () =>{
        if (number.includes('-')){
            return setNumber( number.replace('-',''));
        }
        return setNumber('-' + number);
    };

    const setLastNumber = () =>{
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1));
        } else{
            setPrevNumber(number);
        }
        setNumber('0');
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.divide;
    };
    const addOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.add;
    };
    const subtractOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.subtract;
    };
    const multiplyOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.multiply;
    };
    const calculateRestult = () =>{
        const num1 = Number(number);
        const num2 = Number(prevNumber);
        switch(lastOperator.current){
            case Operator.add:
                setNumber(`${num1 + num2 }`);
                break;
            case Operator.divide:
                setNumber(`${num2 / num1}`);
                break;
            case Operator.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.subtract:
                setNumber(`${num2 - num1}`);
                break;
            default:
                throw new Error('Operation not implemented');
        }
        setPrevNumber('0');
    };
  return ({
    number,
    prevNumber,
    buildNumber,
    clear,
    deletOperation,
    toogleSign,
    divideOperation,
    addOperation,
    subtractOperation,
    multiplyOperation,
    calculateRestult,
  });
};
