var Chart = new Chart(document.getElementById("Chart"), {
    type: 'doughnut',
    data: {
        labels: ['HTML 5','CSS3','Javascript','PHP', 'ASP.NET'],
        datasets: [{
            label: 'Test',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [90,40,35,45,40]
        }],
        options: {
            type: {
                display: true,
                text: 'adads'
            }
        }

    }
});