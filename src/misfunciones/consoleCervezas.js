import { cervezasBD } from "../bd/cervezas.js";

export const consoleCervezas = (cervezasBD) => {
         cervezasBD.forEach(element => {
            console.log("Nombre: ", element.nombre)
        });
}


