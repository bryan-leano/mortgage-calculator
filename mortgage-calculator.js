//mortgage calculator

var homePrice, mortgagePeriod, interest, monthlyMortgage, downPayment;

// add in down payment

document.querySelector('.btn-calculate').addEventListener('click', function() {
  homePriceInput = document.querySelector('.home-price').value;
  mortgagePeriodInput = document.querySelector('.mortgage-period').value;
  interestInput = document.querySelector('.interest').value;
  downPaymentInput = document.querySelector('.down-payment').value;

  if (homePriceInput && mortgagePeriodInput && interestInput) {
    calculate();
  } else {
    console.log('Please fill out all values!')
  }

});

function calculate() {
  interest = interestInput / 100;
  monthlyInterest = interest / 12;
  mortgagePeriod = mortgagePeriodInput * 12;
  mortgageStartingValue = homePriceInput - downPaymentInput

  monthlyMortgage = mortgageStartingValue * ( monthlyInterest * ( Math.pow((1 + monthlyInterest), 
    mortgagePeriod) / ( Math.pow(( 1 + monthlyInterest ), mortgagePeriod ) - 1 )))

  console.log(monthlyMortgage);  
  //add in display box
};
