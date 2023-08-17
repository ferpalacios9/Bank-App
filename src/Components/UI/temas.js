import { 
    fondoClaro,
    contenidoCLaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoOscuro, 
} from "./variables";

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoCLaro,
    text: textoFondoClaro,
    filter: "",
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)",
}