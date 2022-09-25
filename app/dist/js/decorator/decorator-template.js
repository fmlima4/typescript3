export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const returnFrom = originalMethod.apply(this, args);
            return returnFrom;
        };
        return descriptor;
    };
}
//# sourceMappingURL=decorator-template.js.map