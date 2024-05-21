let registrationIdCounter = 0

export function generatorIdFunction():number {
    return ++registrationIdCounter
}