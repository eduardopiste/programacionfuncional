#include <stdio.h>

float potencia(float base, int exponente) {
    float resultado = 1;
    int i;
    for (i = 0; i < exponente; ++i) {
        resultado *= base;
    }
    return resultado;
}

int main() {
    float x, y, resultado;
    char op;
    int valido = 1;
    printf("BIENVENIDO AL PROGRAMA- CALCULADORA SIMPLE\n");
    printf("\n");
    printf("Opcion 1- Suma\nOpcion 2- Resta\nOpcion 3- Multiplicacion\nOpcion 4- Division\nOpcion 5- Potencia\n");
    printf("\n");
    printf("Ingrese operacion: ");
    scanf("%c", &op);
    printf("Ingrese Valor 1: ");
    scanf("%f", &x);
    printf("Ingrese Valor 2: ");
    scanf("%f", &y);
    
    switch (op) {
        case '1':
            resultado = x + y;
            break;
        case '2':
            resultado = x - y;
            break;
        case '3':
        case 'x':
            resultado = x * y;
            break;
        case '4':
            resultado = x / y;
            break;
        case '5':
            resultado = potencia(x, (int) y);
            break;
        default:
            valido = 0;
    }

    if (valido)
        printf("El resultado es %f\n", resultado);
    else
        printf("Operacion invalida\n");

    return 0;
}

	
