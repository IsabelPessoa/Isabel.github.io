document.getElementById('op1').addEventListener('click', function() {
    var educacaoElement = document.getElementById('Educacao');
    educacaoElement.classList.remove('piscar'); // Remove a classe 'piscar', se já estiver presente
    void educacaoElement.offsetWidth; // Trigger reflow para reiniciar a animação (opcional)
    educacaoElement.classList.add('piscar'); // Adiciona a classe 'piscar' novamente
});

document.getElementById('op2').addEventListener('click', function() {
    var certificacoesElement = document.getElementById('Certificacoes');
    certificacoesElement.classList.remove('piscar');
    void certificacoesElement.offsetWidth;
    certificacoesElement.classList.add('piscar');
});

document.getElementById('op3').addEventListener('click', function() {
    var experienciaElement = document.getElementById('Experiencia');
    experienciaElement.classList.remove('piscar');
    void experienciaElement.offsetWidth;
    experienciaElement.classList.add('piscar');
});

document.getElementById('op4').addEventListener('click', function() {
    var habilidadesElement = document.getElementById('Habilidades-Tecnicas');
    habilidadesElement.classList.remove('piscar');
    void habilidadesElement.offsetWidth;
    habilidadesElement.classList.add('piscar');
});

document.getElementById('op5').addEventListener('click', function() {
    var contactElement = document.getElementById('Contact');
    contactElement.classList.remove('piscar');
    void contactElement.offsetWidth;
    contactElement.classList.add('piscar');
});
