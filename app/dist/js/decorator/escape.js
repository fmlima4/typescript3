export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnFrom = originalMethod.apply(this, args);
        if (typeof returnFrom === 'string') {
            console.log(`@escape used on class ${this.constructor.name} on method ${propertyKey}`);
            returnFrom = returnFrom.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returnFrom;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map