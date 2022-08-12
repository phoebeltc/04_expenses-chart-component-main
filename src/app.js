const url = "../data.json";
let total = document.querySelector('#total')

let monAmount = document.querySelector('#mon-amount')
let tueAmount = document.querySelector('#tue-amount')
let wedAmount = document.querySelector('#wed-amount')
let thuAmount = document.querySelector('#thu-amount')
let friAmount = document.querySelector('#fri-amount')
let satAmount = document.querySelector('#sat-amount')
let sunAmount = document.querySelector('#sun-amount')

let bar = document.querySelectorAll('.bar')



fetch(url)
.then(res => res.json())
.then(data => {

    //Total this month 
    const totalAmount = data.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
    total.innerText = '$' + totalAmount;

    //Change the amount
    const amount = data.map(item => item.amount);

    monAmount.innerText = '$' + amount[0];
    tueAmount.innerText = '$' + amount[1];
    wedAmount.innerText = '$' + amount[2];
    thuAmount.innerText = '$' + amount[3];
    friAmount.innerText = '$' + amount[4];
    satAmount.innerText = '$' + amount[5];
    sunAmount.innerText = '$' + amount[6];

    //Change the color of Day 

    const day = new Date().getDay();
    console.log(day);

    bar.forEach((item,index)=>{
        if(index === day-1) {
            bar[index].classList.add("bg-cyan")
            bar[index].classList.add("hover:bg-hover-cyan")
            bar[index].classList.remove("bg-red")
            bar[index].classList.remove("hover:bg-pale-orange")
        }
    })

    //Change the bar height 

    bar[0].style.height = Math.floor(amount[0]) * 2 + "px";
    bar[1].style.height = Math.floor(amount[1]) * 2 + "px";
    bar[2].style.height = Math.floor(amount[2]) * 2 + "px";
    bar[3].style.height = Math.floor(amount[3]) * 2 + "px";
    bar[4].style.height = Math.floor(amount[4]) * 2 + "px";
    bar[5].style.height = Math.floor(amount[5]) * 2 + "px";
    bar[6].style.height = Math.floor(amount[6]) * 2 + "px";
})
.catch((error)=>{
    console.log(error);
})







