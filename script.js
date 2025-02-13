// api documentation: https://whois.fdnd.nl/docs/
// "fav_color": "#ffae00",

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/220';
const myURL = baseURL + endpointMe;

const body = document.querySelector('body');

let myFavColor; // Globale variabele
let myH1 = document.querySelector('h1');

// Haalt de data op en dan 
getData(myURL).then(dataStijn => {  
    // Haal favoriete kleur op
    myFavColor = dataStijn.data.fav_color;

    // Pas de achtergrondkleur aan als er een favoriete kleur is
    body.style.backgroundColor = myFavColor;
    
    let myFavEmoji = dataStijn.data.fav_emoji;
    
    myH1.textContent = myFavEmoji;
});

console.log(myFavColor);



// Dit gedeelte hebben we bij de beginner API les niet besproken dus heb ik het met ChatGPT aan de praat gekregen
function getData(URL) {
    return fetch(URL)
        .then(response => response.json())
        .then(jsonData => { return jsonData });
}

//   /****************/
// /* FETCH DATA   */
// /* RETURNS JSON */
// /****************/

// // generieke functie om data aan een API te vragen
// // deze kun je keer op keer hergebruiken
// // nb. in het echt iets complexer --> bijv ook rekening houden met fouten

// // 1. doe een verzoek aan de API om data
// // 2. ga verder als de API antwoord geeft
// // 3. als het goed gaat krijg je een 'response'-object met data terug
// // 3. daarmee kun je nog niet aan de slag
// // 4. het 'response'-object zet je om naar JSON
// // 4. met JSON kun je aan de slag in jouw JS
// // 5. als de response is omgezet naar JSON kun je weer verder
// // 6. de naam van de naar JSON omgezette info is 'jsonData'
// // 6. Die naam mag je overigens zelf verzinnen
// // 7. de JSON ('jsonData') geef je terug aan de 'getData' functie
// // 8. de 'getData' functie geeft de 'jsonData' terug aan de functie die om de data vroeg
// // 9. async betekent dat terwijl de data wordt opgehaald er andere dingen gedaan kunnen worden
// // 9. op het moment dat de data er is geeft de functie een seintje
// // 9. dan kun je dan wat met de data gaan doen

// async /*9*/ function getData(URL) {
// 	return ( //8
// 		fetch(URL) //1
// 		.then ( //2
// 			response /*3*/ => response.json() //4
// 		)
// 		.then ( //5
// 			jsonData /*6*/ => {return jsonData} //7
// 		)
// 	);
// }

// variabelen die de audio paths en de sections ophalen
let songMFDoom = new Audio('music/Doomsday.mp3');
let songYe = new Audio('music/POWER.mp3');
let songFrank = new Audio('music/Pyramids.mp3');

let vinylMFDoom = document.querySelector('.Doomsday');
let vinylYe = document.querySelector('.Fantasies');
let vinylFrank = document.querySelector('.Orange');

vinylMFDoom.addEventListener('mouseenter', ( ) => {
    songMFDoom.currentTime = 0;
    songMFDoom.play();
    body.style.backgroundColor = ('#EC2224');
    myH1.style.animation = 'dance 0.5s ease-in-out infinite alternate';
});

vinylMFDoom.addEventListener('mouseleave', () => {
    songMFDoom.pause();
    songMFDoom.currentTime = 0;
    body.style.backgroundColor = myFavColor;
    myH1.style.animation = '';
})


vinylFrank.addEventListener('mouseenter', ( ) => {
    songFrank.currentTime = 0;
    songFrank.play();
    body.style.backgroundColor = ('#F37521');
    myH1.style.animation = 'dance 0.5s ease-in-out infinite alternate';
});

vinylFrank.addEventListener('mouseleave', () => {
    songFrank.pause();
    songFrank.currentTime = 0;
    body.style.backgroundColor = myFavColor;
    myH1.style.animation = '';
})


vinylYe.addEventListener('mouseenter', ( ) => {
    songYe.currentTime = 0;
    songYe.play();
    body.style.backgroundColor = ('#EF2C46');
    myH1.style.animation = 'dance 0.5s ease-in-out infinite alternate';
});

vinylYe.addEventListener('mouseleave', () => {
    songYe.pause();
    songYe.currentTime = 0;
    body.style.backgroundColor = myFavColor;
    myH1.style.animation = '';
})