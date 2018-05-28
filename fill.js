/**
 * Created by MATTIAS on 28/05/2018.
 */

// var xmlhttp = new XMLHttpRequest();
//
// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
//         if (xmlhttp.status === 200) {
//             var data = JSON.parse(xmlhttp.responseText).results[0];
//
//             document.getElementById('voornaam').value = data.name.first;
//             document.getElementById('achternaam').value = data.name.last;
//         }
//     }
// };
//
// xmlhttp.open("GET", "https://randomuser.me/api/?nat=nl", true);
// xmlhttp.send();

var voornamen = [
    'Emma',
    'Lucas',
    'Olivia',
    'Louis',
    'Louise',
    'Liam',
    'Mila',
    'Adam',
    'Elise',
    'Arthur'
];

var achternamen = [
    'Peeters',
    'Janssens',
    'Maes',
    'Jacobs',
    'Mertens',
    'Willems',
    'Claes',
    'Goossens',
    'Wouters',
    'De Smet'
];

var adressen = [
    {'straatnaam': 'Boerenkrijglaan', 'gemeente': 'Westerlo', 'postcode': '2260'},
    {'straatnaam': 'Gemeentestraat', 'gemeente': 'Oud-Heverlee', 'postcode': '3054'},
    {'straatnaam': 'Gellenberg', 'gemeente': 'Lubbeek', 'postcode': '3210'},
    {'straatnaam': 'Tervuursesteenweg', 'gemeente': 'Bertem', 'postcode': '3060'},
    {'straatnaam': 'Speelpleinstraat', 'gemeente': 'Bierbeek', 'postcode': '3360'},
    {'straatnaam': 'Dutselstraat', 'gemeente': 'Holsbeek', 'postcode': '3220'},
    {'straatnaam': 'Brusselsesteenweg', 'gemeente': 'Zemst', 'postcode': '1980'},
    {'straatnaam': 'Rijmenamseweg', 'gemeente': 'Bonheiden', 'postcode': '2820'},
    {'straatnaam': 'Gierlebaan', 'gemeente': 'Lille', 'postcode': '2275'},
    {'straatnaam': 'Dorpstraat', 'gemeente': 'Leefdaal', 'postcode': '3061'}
];

var telefoonnummers = [
    '0474 11 22 33',
    '0477 12 15 74',
    '0496 22 44 51',
    '0478 33 59 68',
    '0495 15 42 59',
    '0465 23 54 59',
    '0475 36 52 41',
    '0477 41 58 96',
    '0489 12 45 86',
    '0485 36 57 48'
];

var nr1 = Math.floor(Math.random() * 10);
var nr2 = Math.floor(Math.random() * 10);
var nr3 = Math.floor(Math.random() * 10);
var nr4 = Math.floor(Math.random() * 10);
var nr5 = Math.floor(Math.random() * 100);
var nr6 = Math.floor(Math.random() * 27) + 1;
var nr7 = Math.floor(Math.random() * 12) + 1;
var nr8 = Math.floor(Math.random() * 51) + 1950;

document.getElementById('voornaam').value = voornamen[nr3];
document.getElementById('achternaam').value = achternamen[nr2];
document.getElementById('straatnaam').value = adressen[nr3].straatnaam;
document.getElementById('huisnummer').value = nr5;
document.getElementById('postcode').value = adressen[nr3].postcode;
document.getElementById('gemeente').value = adressen[nr3].gemeente;
document.getElementById('telefoonLand').value = '32';
document.getElementById('telefoonnr').value = telefoonnummers[nr4];
document.getElementById('email').value = voornamen[nr1] + '@testkandidaat.be';
document.getElementById('dag').value = nr6;
document.getElementById('maand').value = nr7;
document.getElementById('jaar').value = nr8;
document.getElementById("privacy").checked = true;
