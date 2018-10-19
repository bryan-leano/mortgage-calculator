//mortgage calculator

var homePrice, mortgagePeriod, interest, monthlyMortgage;

document.querySelector('.btn-calculate').addEventListener('click', function() {
  homePriceInput = document.querySelector('.home-price').value;
  mortgagePeriodInput = document.querySelector('.mortgage-period').value;
  interestInput = document.querySelector('.interest').value;

  if (homePriceInput && mortgagePeriodInput && interestInput) {
    calculate();
  } else {
    //if there is one value not inputted, then do something else
  }

});

function calculate() {
  interest = interestInput / 100;
  monthlyInterest = interest / 12;
  mortgagePeriod = mortgagePeriodInput * 12;

  monthlyMortgage = homePriceInput * ( monthlyInterest * ( Math.pow((1 + monthlyInterest), 
    mortgagePeriod) / ( Math.pow(( 1 + monthlyInterest ), mortgagePeriod ) - 1 )))

  console.log(monthlyMortgage);  

};
