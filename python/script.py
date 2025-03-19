def solicitar_datos():
    personas = []
    try:
        cantidad = int(input("Ingrese el número de personas a registrar: "))
        if cantidad <= 0:
            print("Debe ingresar un número válido.")
            return

        for _ in range(cantidad):
            nombre = input("Nombre: ")
            edad = int(input("Edad: "))
            nota = float(input("Nota: "))
            personas.append([nombre, edad, nota])

        mostrar_resultados(personas)
    
    except ValueError:
        print("Error: Ingrese valores válidos.")

def mostrar_resultados(personas):
    print("\nLista de personas ingresadas:")
    for persona in personas:
        print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

    personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

    print("\nLista ordenada por nota de mayor a menor:")
    for persona in personas_ordenadas:
        print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

if __name__ == "__main__":
    solicitar_datos()