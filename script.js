document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('graficoDesigualdade').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barra
        data: {
            labels: ['1% mais rico', 'Resto da População'], // Rótulos dos dados
            datasets: [{
                label: 'Concentração de Renda (%)', // Título do gráfico
                data: [28, 72], // Dados: 28% para o 1% mais rico e 72% para o resto da população
                backgroundColor: ['#0073e6', '#00a3cc'], // Cores das barras
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // O eixo Y começa no zero
                }
            }
        }
    });
});
