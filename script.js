/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membri del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/

const arrTeam = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Scot Estrada',
        job: 'Developer',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
]
console.log(arrTeam[0].name)
// oppure
//console.log(arrTeam[0]['name'])


const teamContainer = document.querySelector('.team-container')
function createCard(){
    let codeCard =
    `
    <div class="team-card">
        <div class="card-image">
            <img
            src=${img}
            alt=${name}
            />
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${job}</p>
        </div>
    </div>
    `
    teamContainer.innerHTML = teamContainer.innerHTML + codeCard;
}