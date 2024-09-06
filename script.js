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
document.addEventListener("DOMContentLoaded", function() {
    var ctxEscolaridade = document.getElementById('graficoEscolaridade').getContext('2d');
    var chartEscolaridade = new Chart(ctxEscolaridade, {
        type: 'pie',
        data: {
            labels: ['Analfabetos', 'Ensino Fundamental Incompleto', 'Ensino Médio Completo', 'Ensino Superior Completo'],
            datasets: [{
                data: [6.6, 34, 26, 18],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        },
        options: {
            responsive: true
        }
    });

    var ctxSaude = document.getElementById('graficoSaude').getContext('2d');
    var chartSaude = new Chart(ctxSaude, {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'Acesso à Saúde (%)',
                data: [60, 65, 70, 80, 85],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxHabitacao = document.getElementById('graficoHabitacao').getContext('2d');
    var chartHabitacao = new Chart(ctxHabitacao, {
        type: 'doughnut',
        data: {
            labels: ['Déficit Habitacional', 'Sem Déficit Habitacional'],
            datasets: [{
                data: [6, 94], // Simulação para representar o déficit habitacional
                backgroundColor: ['#FF6384', '#36A2EB'],
            }]
        },
        options: {
            responsive: true
        }
    });
});
