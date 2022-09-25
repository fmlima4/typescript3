import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const importButton = document.querySelector('#btn-import');
if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('botão import nao foi encontrado');
}
//# sourceMappingURL=app.js.map