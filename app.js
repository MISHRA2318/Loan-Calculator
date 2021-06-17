//listen for submit
document.getElementById('loan-form').addEventListener("submit",function(e){
    e.preventDefault();

    //Hide Results
    document.getElementById('results').style.display='none';

    //show Loader
      document.getElementById('loading').style.display='block';
    
setTimeout(calculateLoan,2000);

    e.preventDefault();
});

//calculate Loan

function calculateLoan(){
    //Grab Elements

    const amount =document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');


    const monthly = document.getElementById('monthly-payment');
    const TotaLP = document.getElementById('total-payment');
    const TotaLInt = document.getElementById('total-interest')
    
    const principal = parseFloat(amount.value);
    const calculatedInt = parseFloat(interest.value)/100/12;
    const calculatedYear = parseFloat(years.value)*12;
    
    //calculate Montly Payments
    const x = Math.pow(1+calculatedInt,calculatedYear);
    const montly = (principal*x*calculatedInt)/(x-1);

    if(isFinite(montly)){
        monthly.value= montly.toFixed(2);
        TotaLP.value = (montly * calculatedYear).toFixed(2);
        TotaLInt.value = ((montly * calculatedYear)-principal).toFixed(2)


        //show results
        document.getElementById('results').style.display='block';

        //Hide loader
        document.getElementById('loading').style.display='none';


    }else{
       
        //Hide loader
       
        showError("please check the numbers");
    }

    
}

function showError(error){
      //Hide results
      document.getElementById('results').style.display='none';

      //Hide loader
      document.getElementById('loading').style.display='none';


    //create div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';

    //create text node and attach it with div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above 
     card.insertBefore(errorDiv,heading);
  
     setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}