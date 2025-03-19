const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let personas = [];

function solicitarDatos() {
    rl.question("Ingrese el número de personas a registrar: ", (num) => {
        let cantidad = parseInt(num);
        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Debe ingresar un número válido.");
            rl.close();
            return;
        }

        function ingresarPersona(index) {
            if (index < cantidad) {
                rl.question("Nombre: ", (nombre) => {
                    rl.question("Edad: ", (edad) => {
                        rl.question("Nota: ", (nota) => {
                            personas.push({ nombre, edad: parseInt(edad), nota: parseFloat(nota) });
                            ingresarPersona(index + 1);
                        });
                    });
                });
            } else {
                mostrarResultados();
            }
        }

        ingresarPersona(0);
    });
}

function mostrarResultados() {
    console.log("\nLista de personas ingresadas:");
    console.table(personas);

    let ordenadoPorNota = [...personas].sort((a, b) => b.nota - a.nota);
    console.log("\nLista ordenada por nota de mayor a menor:");
    console.table(ordenadoPorNota);

    rl.close();
}

solicitarDatos();