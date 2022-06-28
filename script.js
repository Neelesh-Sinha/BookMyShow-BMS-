//! light mode dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

//! Popup-Window
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden'
}