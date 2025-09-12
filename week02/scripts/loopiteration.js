const n = 6;
const options = { weekday: 'long'};

const today = new Date();

let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}.`;

const output = document.getElementById("daysList");

for (i = 1; i <= n; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US',options).format(nextday);

    let item = document.createElement("li");
    item.textContent = nextdaystring;
    output.appendChild(item);
}
