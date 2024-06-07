export function ValidaDebito(target: any, propertyKey: string, descripitor: PropertyDescriptor) {
        const originalMethod = descripitor.value;

        descripitor.value = function (valorDebito: number) {
                if (valorDebito <= 0) {
                        throw new Error("O valor a ser debitado deve ser maior que zero!");
                }

                if (valorDebito > this.saldo) {
                        throw new Error("Saldo insuficiente para realizar a operação");
                }

                return originalMethod.apply(this, [valorDebito]);
        }

        return descripitor;
}

export function ValidaDeposito(target: any, propertyKey: string, descripitor: PropertyDescriptor) {
        const originalMethod = descripitor.value;
        descripitor.value = function (valorDeposito: number) {
                if (valorDeposito <= 0) {
                        throw new Error("O valor a ser depositado deve ser maior que zero!");
                }
                return originalMethod.apply(this, [valorDeposito]);
        }
        return descripitor;
}