function galeria() {

    var opciones = document.getElementById('menuOpciones').value;


    switch (opciones) {
        //valor de cada opcion del select
        //case "carne" es el value de cada select

        case "cosmetico":
            document.querySelector('.galeriaEscolar').style.display = 'none';
            document.querySelector('.galeriaCosmetico').style.display = 'block';
            document.querySelector('.galeriaHogar').style.display = 'none';
            document.querySelector('.galeriaBebes').style.display = 'none';
            document.querySelector('.galeriaOtros').style.display = 'none';
            break;
        case "hogar":
            document.querySelector('.galeriaEscolar').style.display = 'none';
            document.querySelector('.galeriaCosmetico').style.display = 'none';
            document.querySelector('.galeriaHogar').style.display = 'block';
            document.querySelector('.galeriaBebes').style.display = 'none';
            document.querySelector('.galeriaOtros').style.display = 'none';
            break;
        case "escolar":
            document.querySelector('.galeriaEscolar').style.display = 'block';
            document.querySelector('.galeriaCosmetico').style.display = 'none';
            document.querySelector('.galeriaHogar').style.display = 'none';
            document.querySelector('.galeriaBebes').style.display = 'none';
            document.querySelector('.galeriaOtros').style.display = 'none';
            break;
        case "bebe":
            document.querySelector('.galeriaEscolar').style.display = 'none';
            document.querySelector('.galeriaCosmetico').style.display = 'none';
            document.querySelector('.galeriaHogar').style.display = 'none';
            document.querySelector('.galeriaBebes').style.display = 'block';
            document.querySelector('.galeriaOtros').style.display = 'none';
            break;
        //el "postre" viene de la seleccion con un value
        case "otro":
            document.querySelector('.galeriaEscolar').style.display = 'none';
            document.querySelector('.galeriaCosmetico').style.display = 'none';
            document.querySelector('.galeriaHogar').style.display = 'none';
            document.querySelector('.galeriaBebes').style.display = 'none';
            document.querySelector('.galeriaOtros').style.display = 'block';
            break;
        //galeriaPostres viene de una clase
        default:
            document.querySelector('.galeriaEscolar').style.display = 'none';
            document.querySelector('.galeriaCosmetico').style.display = 'none';
            document.querySelector('.galeriaHogar').style.display = 'none';
            document.querySelector('.galeriaBebes').style.display = 'none';
            document.querySelector('.galeriaOtros').style.display = 'none';

            break;
        //default es la ultima opcion para ocultar todas las imagenes
    }
}

document.getElementById('menuOpciones').addEventListener('change', galeria);