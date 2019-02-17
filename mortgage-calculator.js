//mortgage calculator

var homePrice, mortgagePeriod, interest, monthlyMortgage, downPayment;


document.querySelector('.btn-calculate').addEventListener('click', function() {
  homePriceInput = document.querySelector('.home-price').value;
  mortgagePeriodInput = document.querySelector('.mortgage-period').value;
  interestInput = document.querySelector('.interest').value;
  downPaymentInput = document.querySelector('.down-payment').value;

  if ( homePriceInput && mortgagePeriodInput && interestInput ) {
    calculate();
  } else if ( homePriceInput && mortgagePeriodInput ) {
    //console.log('Please fill out the Interest!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Interest!`;
  } else if ( homePriceInput && interestInput ) {
    //console.log('Please fill out the Mortgage Period!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Mortgage Period!`;
  } else if ( mortgagePeriodInput && interestInput ) {
    //console.log('Please fill out the Home Price!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Home Price!`;
  } else if ( homePriceInput ) {
    //console.log('Please fill out the Mortgage Period and Interest!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Mortage Period & Interest!`;
  } else if (mortgagePeriodInput) {
    //console.log('Please fill out the Home Price and Interest!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Home Price & Interest!`;
  } else if ( interestInput ) {
    //console.log('Please fill out Home Price and Mortgage Period!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Home Price & Mortgage Period!`;
  } else {
    //console.log('Please fill out all Home Price, Mortgage Period and Interest!');
    var displayMortgage = document.getElementById('mortgage');
    displayMortgage.innerHTML = `Please fill out the Home Price, Mortgage Period & Interest!`;
  }
  });

function calculate() {
  interest = interestInput / 100;
  monthlyInterest = interest / 12;
  mortgagePeriod = mortgagePeriodInput * 12;
  mortgageStartingValue = homePriceInput - downPaymentInput;

  monthlyMortgage = mortgageStartingValue * ( monthlyInterest * ( Math.pow((1 + monthlyInterest), mortgagePeriod) / ( Math.pow(( 1 + monthlyInterest ), mortgagePeriod ) - 1 )));

  monthlyMortgage = Math.round(monthlyMortgage * 100) / 100;

  showMortgage();
};

function showMortgage() {
  console.log(monthlyMortgage);  
  var displayMortgage = document.getElementById('mortgage');
  displayMortgage.innerHTML = `Your mortgage will be: $${monthlyMortgage}`;
}
