/*
Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membri del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
*/

const arrTeam = [
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
    },
    {
        name: 'Scot Estrada',
        job: 'Developer',
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
    },
]
console.log(arrTeam[0].name)
// oppure
//console.log(arrTeam[0]['name'])