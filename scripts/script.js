let count = 0;
let total = 0;
// count selected seats
function selectedCount (){
    count ++;
}

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
    console.log(count,total)
}
