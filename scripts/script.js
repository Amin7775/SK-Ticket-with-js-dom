let count = 0;
let total = 0;
let totalSeats = 40;
let discount = 0;
const ticketPrice = 550;
let grandTotal = 0;
// count selected seats
function selectedCount() {
  totalSeats--;
  count++;
}

// show count for invoice
function showSelectedCount() {
  let Show = document.getElementById("showCount");
  Show.innerText = count;
}
showSelectedCount();

// total price
function totalPrice() {
  total = total + ticketPrice;
  grandTotal = total;
}

// discount price
function discountPrice(percent) {
  discount = (total * (percent / 100)).toFixed(2);
  grandTotal = (total - discount).toFixed(2);

//   update values

//   show grand total
let grandTotalValue = document.getElementById('grand-price')
grandTotalValue.innerText = grandTotal;

// show discount
let showDiscountPrice = document.getElementById('price-section')
let discountTextH1 = document.createElement('h1')
discountTextH1.innerText= 'Total Discount'

let h1 = document.createElement('h1')
h1.innerText = 'BDT '
h1.classList.add('text-end')

// crete span
let span = document.createElement('span')
span.innerText = discount;

// append
h1.appendChild(span)

showDiscountPrice.appendChild(discountTextH1)
showDiscountPrice.appendChild(h1)

  console.log("discount is " + discount + "Grand total is " + grandTotal);

//   disable apply btn
let btn_disable = document.getElementById('coupon-btn')
btn_disable.disabled = true;
btn_disable.removeAttribute('onclick');
}

function selected(seatNo) {
  if (count > 3) {
    window.alert("You Can Not Select More That 4 Seat At A Time");
    return;
  }
  console.log("connected");
  let btn = document.getElementById(seatNo);
  console.log(btn.innerText);
  btn.classList.remove("bg-[#F7F8F8]");
  btn.classList.add("bg-green-400");
  btn.setAttribute("onclick", "");
  // counting
  selectedCount();

  showSelectedCount();
  // update total seats available
  let availableSeats = document.getElementById("seat-count");
  availableSeats.innerText = totalSeats;
  console.log(count, total);

  // invoice list
  let invoiceListDiv = document.getElementById("invoice-list");
  console.log(invoiceListDiv);
  // seat name
  let seatElement = document.createElement("h1");
  seatElement.innerText = btn.innerText;
  // seat class
  let seatClass = document.createElement("h1");
  seatClass.classList.add("text-center");
  seatClass.innerText = "Economy";
  //seat price
  let seatPrice = document.createElement("h1");
  seatPrice.classList.add("text-end");
  seatPrice.innerText = ticketPrice;
  // append to invoice
  invoiceListDiv.appendChild(seatElement);
  invoiceListDiv.appendChild(seatClass);
  invoiceListDiv.appendChild(seatPrice);

  totalPrice();

  // show total price
  let totalPriceValue = document.getElementById("total-price");
  totalPriceValue.innerText = total;
//   show grand total
let grandTotalValue = document.getElementById('grand-price')
grandTotalValue.innerText = grandTotal;
}

// coupon Apply
function couponApply() {
  let inputField = document.getElementById("input-field");
  let inputFieldText = inputField.value;
  if (inputFieldText === "NEW15") {
    discountPrice(15);
  } else {
    discountPrice(20);
  }
}

document.getElementById("input-field").addEventListener("keyup", function () {
  let inputField = document.getElementById("input-field");
  let inputFieldText = inputField.value;
  console.log(inputFieldText);

  // btn
  const btn = document.getElementById("coupon-btn");
  if (inputFieldText === "Couple 20" || inputFieldText === "NEW15") {
    if (count == 4) {
      btn.removeAttribute("disabled");
    }
  } else {
    btn.setAttribute("disabled", true);
  }
});
