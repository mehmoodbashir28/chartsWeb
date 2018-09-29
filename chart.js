let input = document.querySelector(".form-control").innerHTML = value;
    //some thing = "https://github.com/"+un+"/"+repo;
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ["one", "two", "three", "four"],
        datasets: [{
            label:'Highest Rates',
            data: [100, 100, 100, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(54, 162, 235)',
                'rgb(75, 192, 192)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});  
