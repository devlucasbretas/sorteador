
function sort() {
        let iniInterval = document.getElementById('inicionum');
        let fimInterval = document.getElementById('finalnum');

        let inicio = Number(iniInterval.value);
        let fim = Number(fimInterval.value);
        let resultado = document.getElementById("res")

        let gerador = Math.floor(Math.random() *(fim - inicio + 1)) + 0

        resultado.innerHTML = gerador;

    

}

