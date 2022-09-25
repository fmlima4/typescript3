export function inspect(){
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: Array<any>) {
            const returnFrom = originalMethod.apply(this, args);
            return returnFrom
        }

        return descriptor;

    }
}