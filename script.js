/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membri del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/

const arrTeam = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scot Estrada',
        job: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    },
]
console.log(arrTeam[0].name)
// oppure
//console.log(arrTeam[0]['name'])


const teamContainer = document.querySelector('.team-container')

for (let i = 0; i < arrTeam.length; i++) {
    createCard(i);
}

function createCard(i){
    let codeCard =
    `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${arrTeam[i]['img']}"
            alt="${arrTeam[i]['name']}"
            />
        </div>
        <div class="card-text">
            <h3>${arrTeam[i]['name']}</h3>
            <p>${arrTeam[i]['job']}</p>
        </div>
    </div>
    `
    teamContainer.innerHTML = teamContainer.innerHTML + codeCard;
}