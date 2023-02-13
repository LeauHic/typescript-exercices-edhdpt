// Import stylesheets
import './style.css';

// Data models
import { companies, users, franckMonod } from './models';

// Interfaces

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const title = document.createElement('h1');
title.innerHTML = 'TypeScript Starter';
appDiv.appendChild(title);

const myCompany = {};
const usersName = [];
let sumAge = 0;

// /!\ Le terme affiché correspond à de simple console.log()

/**
 * Consignes - Level 1 :
 */
console.log('LEVEL 1');

// 1. Faire la somme des ages de tout les "users", afficher la valeur de sumAge.
// 2. Récupérer les noms des "users" dans le tableau "usersName", afficher sa valeur.
const p = document.createElement('p');
const usernames: Array<string> = [];
p.textContent = String(
  users.reduce((accumulator, user) => {
    usernames.push(user.name);
    return accumulator + user.age;
  }, 0)
);
console.log(usernames);
appDiv.appendChild(p);
/**
 * Consignes - Level 2 :
 */
console.log('LEVEL 2');

// 1. Ajouter l'utilisateur "franckMonod" à la liste "users".
// 2. Récupérer les "users" avec le status "alternant" dans le tableau "usersAlternant" grâce à une boucle "for", afficher sa valeur.
// 3. Changer le status de l'utilisateur "Thomas" en "cofondateur".
// 4. Récupérer les "users" avec le status "cofondateur", afficher ces utilisateurs en 1 seul console.log.
let currentUsers = [
  ...users,
  {
    id: franckMonod.id,
    name: franckMonod.name,
    age: franckMonod.age,
    company: {
      id: 1,
      name: franckMonod.company,
      location: 'Annecy',
    },
    status: franckMonod.status,
  },
];
const usersAlternant: Array<object> = [];
for (let i = 0; i < currentUsers.length; i++) {
  if (currentUsers[i].status === 'alternant') {
    usersAlternant.push(currentUsers[i]);
  }
}
currentUsers = currentUsers.map((elt) => {
  if (elt.name === 'Thomas') {
    elt.status = 'cofondateur';
  }
  return elt;
});
console.log(usersAlternant);
console.log(currentUsers.filter((user) => user.status === 'cofondateur'));

/**
 * Consignes - Level 3 :
 */
console.log('LEVEL 3');

// 1. Trouver le nom de l'entreprise de l'utilisateur ayant un id = 2.
// 2. Trouver le nom de la localisation de l'utilisateur ayant pour indice 2 dans le tableau "users".
// 3. Changer la localisation des entreprises ayant pour nom "PRISMO" en "Cran-Gevrier".
console.log(currentUsers.filter((user) => user.id === 2)[0].company.name);
console.log(currentUsers.filter((user) => user.id === 2)[0].company.location);

currentUsers = currentUsers.map((elt) => {
  if (elt.company?.name == 'PRISMO') {
    elt.company.location = 'Cran-Gevrier';
  }
  return elt;
});
console.log(currentUsers);
/**
 * Consignes - Level 4 :
 */
console.log('LEVEL 4');

// L'utilisatrice Leïla n'a pas de compagnie associée. Elle souhaite ajouter une entreprise sur son profil. Pour ce faire, elle doit :
// - Trouver l'entreprise "PRISMO", dans la liste des "companies";
// - Associer les valeurs de "PRISMO" à la propriété "company" de son compte
// - Afficher son compte
const prismoCompany = companies.filter(
  (company) => company.name == 'PRISMO'
)[0];
currentUsers = currentUsers.map((user) => {
  if (user.name == 'Leïla') {
    user.company = prismoCompany;
    console.log(user);
  }
  return user;
});
/**
 * Consignes - Bonus :
 */
console.log('Bonus');

// - Créer une interface correspondant à l'objet "user"
// - Créer une interface correspondant à l'objet "company"
// - Typer son code
