const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button=> {

button.addEventListener('click', function(){
    const atual = document.querySelector9('.ativo')
    const proximoPasso = 'passo-' + this.getAttribute('dataproximo')

    atual.classlist.remove('ativo');
    documet.getElementById(proximoPasso).classList.add('ativo')

})

})