const BtnElm = document.querySelector('.Cal-btn');
const BillInput= document.querySelector('.Bill-Input');
const TipInput = document.querySelector('.Tip-percentage');
const Totaltip = document.querySelector('#total');






BtnElm.addEventListener('click', function(){

    let billValue = BillInput.value;
  
    let TipValue = TipInput.value;
    const TotalVal = billValue * ( 1 + TipValue / 100).toFixed(2);
  
    Totaltip.innerHTML = TotalVal;

})