export function LogExecutionTime(unitMeasurement = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unit = 'Miliseconds';
            if (unitMeasurement) {
                divisor = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const returnFrom = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${((t2 - t1) / divisor)} ${unit}`);
            returnFrom;
        };
        return descriptor;
    };
}
//# sourceMappingURL=executionTime.js.map