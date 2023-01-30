var myChart = echarts.init(document.getElementById('yes'));

myChart.showLoading();

fetch('https://raw.githubusercontent.com/crispynoodlesoup/CrystalView-/master/public/data/all2.json')
  .then((response) => response.json())
  .then(function (data) {

    myChart.hideLoading();

/*
slight formatting needed
{
  "12-03-04": {
    "bills": 12,
    "shopping": 2 
  }
}

*/

let dateObj = {};
for(let i = 0; i < data.length; i++) {
  let dateArr = Object.keys(data[i]);
  let amountArr = Object.values(data[i]);
  console.log(dateArr);
  for(let j = 0; j < dateArr.length; j++) {
    if(!(dateArr[j] in dateObj))
      dateObj[dateArr[j]] = {};
    
    if(i === 0)
      dateObj[dateArr[j]]["bills"] = Number.parseFloat(Number.parseFloat(amountArr[j]).toFixed(2));
    else if(i === 1)
      dateObj[dateArr[j]]["entertainment"] = Number.parseFloat(Number.parseFloat(amountArr[j]).toFixed(2));
    else if(i === 2)
      dateObj[dateArr[j]]["food"] = Number.parseFloat(Number.parseFloat(amountArr[j]).toFixed(2));
    else if(i === 3)
      dateObj[dateArr[j]]["savings"] = Number.parseFloat(Number.parseFloat(amountArr[j]).toFixed(2));
    else if(i === 4)
      dateObj[dateArr[j]]["shopping"] = Number.parseFloat(Number.parseFloat(amountArr[j]).toFixed(2));
  }
}

let bills = [];
let entertainment = [];
let food = [];
let savings = [];
let shopping = [];

const date = Object.keys(dateObj);
const val = Object.values(dateObj);
for(let i = 0; i < date.length; i++) {
  if(!("bills" in val[i]))
    dateObj[date[i]]["bills"] = 0;
  if(!("entertainment" in val[i]))
    dateObj[date[i]]["entertainment"] = 0;
  if(!("food" in val[i]))
    dateObj[date[i]]["food"] = 0;
  if(!("savings" in val[i]))
    dateObj[date[i]]["savings"] = 0;
  if(!("shopping" in val[i]))
    dateObj[date[i]]["shopping"] = 0;

    bills.push(dateObj[date[i]]["bills"]);
    entertainment.push(dateObj[date[i]]["entertainment"]);
    food.push(dateObj[date[i]]["food"]);
    savings.push(dateObj[date[i]]["savings"]);
    shopping.push(dateObj[date[i]]["shopping"]);
}

console.log(dateObj);

    var option = {
      title: {
        text: "Your Financial Record",
        left: "center"
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        bottom: 90
      },
      dataZoom: [
        {
          type: 'slider'
        }
      ],
      xAxis: {
        type: "category",
        data: Object.keys(dateObj),
        silent: false,
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        splitArea: {
          show: false
        }
      },
      series: [
        {
          type: 'bar',
          stack: "yes",
          data: bills,
          // Set `large` for large data amount
          large: true
        },
        {
          type: 'bar',
          stack: "yes",
          data: entertainment,
          // Set `large` for large data amount
          large: true
        },
        {
          type: 'bar',
          stack: "yes",
          data: food,
          // Set `large` for large data amount
          large: true
        },
        {
          type: 'bar',
          stack: "yes",
          data: savings,
          // Set `large` for large data amount
          large: true
        },
        {
          type: 'bar',
          stack: "yes",
          data: shopping,
          // Set `large` for large data amount
          large: true
        }
      ]
    };

    myChart.setOption(option);
  });