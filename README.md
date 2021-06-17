# Loan-Calculator
This is a loan calculator built in HTML5 and Vanilla Javascript. Bootstrap 5 Framework is used for designing the UI. The formula used for monthly payments is   

#const x = Math . pow(1+calculatedInt,calculatedYear); 
#const montly = (principal*x*calculatedInt)/(x-1);

//for total interest 
 const interest = document.getElementById('interest');
 
  
 //for total Payment
//we had used parseFloat to convet string into floating Number.
const calculatedInt = parseFloat(interest.value)/100/12;
//here TotaLP = total Payment
 TotaLP.value = (montly * calculatedYear).toFixed(2);

