document.addEventListener("DOMContentLoaded", function() {
    // Gráfico de Desigualdade de Renda
    var ctxDesigualdade = document.getElementById('graficoDesigualdade').getContext('2d');
    var chartDesigualdade = new Chart(ctxDesigualdade, {
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

    // Gráfico de Distribuição de Níveis de Escolaridade
    var ctxEscolaridade = document.getElementById('graficoEscolaridade').getContext('2d');
    var chartEscolaridade = new Chart(ctxEscolaridade, {
        type: 'pie', // Tipo de gráfico: pizza
        data: {
            labels: ['Analfabetos', 'Ensino Fundamental Incompleto', 'Ensino Médio Completo', 'Ensino Superior Completo'], // Rótulos dos dados
            datasets: [{
                label: 'Distribuição de Níveis de Escolaridade', // Título do gráfico
                data: [6.6, 34, 26, 18], // Dados em porcentagem
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'], // Cores das fatias
            }]
        },
        options: {
            responsive: true, // Gráfico é responsivo
            plugins: {
                legend: {
                    position: 'top' // Posição da legenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                        }
                    }
                }
            }
        }
    });

    // Gráfico de Acesso à Saúde por Região
    var ctxSaude = document.getElementById('graficoSaude').getContext('2d');
    var chartSaude = new Chart(ctxSaude, {
        type: 'bar', // Tipo de gráfico: barra
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'], // Rótulos dos dados
            datasets: [{
                label: 'Acesso à Saúde (%)', // Título do gráfico
                data: [40, 35, 50, 70, 80], // Dados de acesso à saúde por região
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'], // Cores das barras
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

    // Gráfico de Déficit Habitacional por Região
    var ctxHabitacao = document.getElementById('graficoHabitacao').getContext('2d');
    var chartHabitacao = new Chart(ctxHabitacao, {
        type: 'bar', // Tipo de gráfico: barra
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'], // Rótulos dos dados
            datasets: [{
                label: 'Déficit Habitacional (milhões)', // Título do gráfico
                data: [1.5, 3.0, 0.8, 0.5, 0.4], // Dados de déficit habitacional por região em milhões
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'], // Cores das barras
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
