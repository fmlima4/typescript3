export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`___ Method: ${propertyKey}`);
        console.log(`______ Parameters: ${JSON.stringify(args)}`);
        const returnFrom = originalMethod.apply(this, args);
        console.log(`______ Return: ${JSON.stringify(returnFrom)}`);
        return returnFrom;
    };
    return descriptor;
}
//# sourceMappingURL=inpect.js.map