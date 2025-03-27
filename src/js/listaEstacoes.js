

async function fetchStations() {
    const container = document.getElementById("stations");
    let search = searchValue
    if (!searchValue) {
        container.innerHTML = "Insira a sigla de algum país";
    } else {
        const url = `https://api.railway-stations.org/${search}/stations`;
        container.innerHTML = "Carregando...";
        try {            
            const response = await fetch(url);   
            const dados = await response.json();
            if(dados.length>0){
                const stations = dados
                container.innerHTML = "";
                stations.forEach(station => {
                    const div = document.createElement("div");
                    div.addEventListener("click", () => clickStation(station))
                    div.className = "station";
                    div.innerHTML = `<strong>${station.title}</strong> - ${station.country}`;
                    container.appendChild(div);
                });
            } else {
                container.innerHTML = "Erro ao carregar as estações. Insira uma sigla válida!!";
            }
        } catch (error) {
            console.error(error);
            container.innerHTML = "Ocorreu um erro";
        }
    }
}

function clickStation(data) {    
    window.open(`./imageStation.html?id=${data.photoId}&photoUrl=${data.photoUrl}`,'_blank')
}

const searchInput = document.getElementById("searchInput")
const listStationsButton = document.getElementById("listStationsButton")
searchInput.addEventListener("input", digitar)
let searchValue = ""

function digitar() {
    searchValue = searchInput.value
    listStationsButton.innerHTML = `Estações ferroviárias ${searchValue ? `de ${searchValue}` : "por país"}`
    console.log(searchValue);

}