function graficoBarra() {

    const ctx = document.getElementById('graficoBarra');

// Años
const años = [
1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,
1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,
1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
2015,2016,2017,2018,2019,2020,2021
];

// Valores convertidos a número
const valores = [
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,
0.001835014,
0.00266875,
0.00465125,
0.006405,
0.007951726,
0.00953125,
0,0,0,0,0,0,0,0,0,0,
0,0,
0.005,
0.012,
0.13206,
0.1908,
0.31732163
];

// Crear gráfico
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: años,
        datasets: [{
            label: 'Generación Solar (TWh)',
            data: valores,
            backgroundColor: 'rgba(255, 193, 7, 0.7)',  // amarillo suave
            borderColor: 'rgba(255, 193, 7, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'TWh'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Año'
                }
            }
        }
    }
});

}

graficoBarra();