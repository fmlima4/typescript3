export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype: ${target.constructor.name} e adicionando getter na prop ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log('buscando: ' + selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
        return;
    };
}
//# sourceMappingURL=dom-injection.js.map