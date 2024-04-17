import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById("average-seasons");
var cardBody = document.getElementById("cards");
if (!cardBody) {
    cardBody = document.createElement("div");
    cardBody.id = "cards";
    document.body.appendChild(cardBody);
}
mostrarSeries(series);
averageSeasonsElm.innerHTML = "".concat(promedioSeries(series));
function mostrarSeries(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><a id=\"more-info-").concat(serie.nombre, "\" href=\"#card-").concat(serie.nombre, "\"> ").concat(serie.nombre, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var moreInfoBtn = document.getElementById("more-info-".concat(serie.nombre));
        moreInfoBtn.onclick = function () { return mostrarInfo(serie); };
        var cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.id = "card-".concat(serie.nombre);
        cardElement.style.display = "none";
        cardElement.style.width = "20rem";
        var imgElement = new Image();
        imgElement.id = "imagen-".concat(serie.nombre);
        imgElement.style.width = "100%";
        imgElement.style.height = "auto";
        imgElement.style.objectFit = "cover";
        var textElement = document.createElement("h3");
        textElement.id = "nombre-".concat(serie.nombre);
        textElement.style.padding = "15px";
        var descElement = document.createElement("p");
        descElement.id = "descrip-".concat(serie.nombre);
        descElement.style.padding = "10px";
        var linkElement = document.createElement("a");
        linkElement.id = "link-".concat(serie.nombre);
        linkElement.style.padding = "15px";
        cardBody.appendChild(cardElement);
        cardElement.appendChild(imgElement);
        cardElement.appendChild(textElement);
        cardElement.appendChild(descElement);
        cardElement.appendChild(linkElement);
    });
}
function promedioSeries(series) {
    var total = 0;
    var numSeries = series.length;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    var averageSeasons = total / numSeries;
    return averageSeasons;
}
function mostrarInfo(serie) {
    Ocultar(series);
    var imageCard = document.getElementById("imagen-".concat(serie.nombre));
    imageCard.src = serie.image;
    imageCard.alt = serie.nombre;
    var textElement = document.getElementById("nombre-".concat(serie.nombre));
    textElement.innerText = serie.nombre;
    var descElement = document.getElementById("descrip-".concat(serie.nombre));
    descElement.innerText = serie.description;
    var linkElement = document.getElementById("link-".concat(serie.nombre));
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;
    var card = document.getElementById("card-".concat(serie.nombre));
    card.style.display = "flex";
}
function Ocultar(series) {
    series.forEach(function (serie) {
        var cardInfo = document.getElementById("card-".concat(serie.nombre));
        cardInfo.style.display = "none";
    });
}
