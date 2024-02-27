let count = 0;
let total = 0;
let totalSeats = 40;
let discount = 0;
// count selected seats
function selectedCount (){
    totalSeats --;
    count ++;
}

// show count for invoice
function showSelectedCount (){
    let Show = document.getElementById('showCount')
    Show.innerText = count;
}
showSelectedCount();


// total price
function totalPrice () {
    total = total + 550;
}


function selected(seatNo) {
    if(count > 3){
        window.alert("You Can Not Select More That 4 Seat At A Time");
        return;
    }
    console.log("connected");
    let btn = document.getElementById(seatNo);
    console.log(btn.innerText)
    btn.classList.remove('bg-[#F7F8F8]')
    btn.classList.add('bg-green-400')
    btn.setAttribute('onclick', '');
    // counting 
    selectedCount()
    totalPrice()
    showSelectedCount()
    // update total seats available
    let availableSeats = document.getElementById('seat-count')
    availableSeats.innerText= totalSeats;
    console.log(count,total)
}


// coupon Apply
// function couponApply () {
//     let inputField = document.getElementById('input-field')
//     let inputFieldText = inputField.value;
//     console.log(inputFieldText)
//     if(inputFieldText === 'Couple 20' || inputFieldText)
// }

document.getElementById('input-field').addEventListener('keyup', function(){
    let inputField = document.getElementById('input-field')
    let inputFieldText = inputField.value;
    console.log(inputFieldText)

    // btn
    const btn = document.getElementById('coupon-btn')
    if(inputFieldText === 'Couple 20' || inputFieldText === 'NEW15'){
        if(count == 4){
            btn.removeAttribute('disabled')
        }
    }else{
        btn.setAttribute('disabled', true)
    }
})