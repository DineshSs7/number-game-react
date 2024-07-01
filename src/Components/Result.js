import React from 'react'

function Result ({secretNum, term}) {
    

    let result;

    if(term){

        if(term > secretNum){
            result = 'Higher';
        }else if(term < secretNum){
            result = 'Lower';
        }else if(term == secretNum){
            result = 'Yipee! correct';
        }else{
            result = " Please check the Number";
        }
    }


  return (
    <>
        <h3>You Guess : {result}</h3>
    </>
  )
}
export default Result;
