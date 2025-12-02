function graficoTorta() {

    const ctx = document.getElementById('graficoTorta');

    const titulos = [1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
        1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
        2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
    ];

    const valores = [0.003, 0.006311111, 0.011747475, 0.015183838, 0.01060303, 0.01019596,
        0.26222324, 0.38829494, 0.5052029, 0.4665851, 0.55669755, 0.59701395,
        0.6388138, 0.69920796, 0.7495848, 0.811789, 0.9051969, 1.0589701,
        1.4232854, 1.7990196, 2.2551038, 2.9715216, 4.18711, 5.761839,
        7.8179097, 12.697423, 21.073973, 33.91127, 65.58232, 101.54088,
        138.60146, 196.3565, 254.73972, 327.58423, 445.46628, 576.2309,
        703.94977, 846.2294, 1032.5012
    ];

    // Colores suficientes para todos los años
    const colores = valores.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16));

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titulos,
            datasets: [{
                label: "Consumo energético",
                data: valores,
                backgroundColor: colores,
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

}

graficoTorta();