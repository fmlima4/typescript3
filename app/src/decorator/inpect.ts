export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        console.log(`___ Method: ${propertyKey}`)
        console.log(`______ Parameters: ${JSON.stringify(args)}`)
        const returnFrom = originalMethod.apply(this, args);
        console.log(`______ Return: ${JSON.stringify(returnFrom)}`)
        return returnFrom
    }

    return descriptor;

}
