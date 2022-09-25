export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
       let returnFrom = originalMethod.apply(this, args);

       if(typeof returnFrom === 'string') {
        console.log(`@escape used on class ${this.constructor.name} on method ${propertyKey}`)
        returnFrom = returnFrom.replace(/<script>[\s\S]*?<\/script>/, '');
       }

       return returnFrom
    }

    return descriptor;
}
