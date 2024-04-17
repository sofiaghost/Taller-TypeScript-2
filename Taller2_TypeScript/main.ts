import { Serie } from './series.js';
import { series} from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;
let cardBody: HTMLElement = document.getElementById("cards")!;



if (!cardBody) {
    cardBody = document.createElement("div");
    cardBody.id = "cards";
    document.body.appendChild(cardBody);
}


mostrarSeries(series);
averageSeasonsElm.innerHTML = `${promedioSeries(series)}`

function mostrarSeries(series: Serie[]): void{
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><a id="more-info-${serie.nombre}" href="#card-${serie.nombre}"> ${serie.nombre}</a></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        const moreInfoBtn: HTMLElement =  document.getElementById(`more-info-${serie.nombre}`)!;
        moreInfoBtn.onclick = () => mostrarInfo(serie);

        let cardElement = document.createElement("div");

        cardElement.className = "card";

        cardElement.id = `card-${serie.nombre}`;
        cardElement.style.display = "none";
        cardElement.style.width = "20rem";

        let imgElement = new Image();

        imgElement.id = `imagen-${serie.nombre}`;
        imgElement.style.width = "100%"; 
        imgElement.style.height = "auto"; 
        imgElement.style.objectFit = "cover"; 

        let textElement = document.createElement("h3");

        textElement.id = `nombre-${serie.nombre}`;
        textElement.style.padding = "15px";

        let descElement = document.createElement("p");

        descElement.id = `descrip-${serie.nombre}`;
        descElement.style.padding = "10px";

        let linkElement = document.createElement("a");

        linkElement.id = `link-${serie.nombre}`;
        linkElement.style.padding = "15px";



        cardBody.appendChild(cardElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(textElement);
        cardElement.appendChild(descElement);
        cardElement.appendChild(linkElement);

    });
}

function promedioSeries(series: Serie[]): number 
{
    let total: number = 0;
    const numSeries: number = series.length;

    series.forEach((serie) => total = total + serie.seasons);
    const averageSeasons: number = total/numSeries;
    return averageSeasons;    

}

function mostrarInfo(serie: Serie): void{
    Ocultar(series)
    const imageCard = document.getElementById(`imagen-${serie.nombre}`)! as HTMLImageElement;

    imageCard.src = serie.image;
    imageCard.alt = serie.nombre;
    

    const textElement: HTMLElement = document.getElementById(`nombre-${serie.nombre}`)!;
    textElement.innerText = serie.nombre;

    const descElement: HTMLElement = document.getElementById(`descrip-${serie.nombre}`)!;
    descElement.innerText = serie.description;

    const linkElement: HTMLAnchorElement = document.getElementById(`link-${serie.nombre}`)! as HTMLAnchorElement;
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;

    const card: HTMLElement = document.getElementById(`card-${serie.nombre}`)!;
    card.style.display = "flex";
    
}

function Ocultar(series: Serie[]):void{
    series.forEach((serie) => 
        {

        let cardInfo: HTMLElement = document.getElementById(`card-${serie.nombre}`)!;
        cardInfo.style.display= "none";
        });
}