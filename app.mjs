import { render, addText, addImage, particles, onReady, handleEvents } from './functions.mjs'
import { camera, renderer, futuraFont } from './objects.mjs';
import config from './config.mjs';

/* Création de l'ensemble des paramètres nécessaires à l'environnement THREE */
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* Setting all events handlers */
window.onresize = handleEvents.resize
window.onload = handleEvents.load
window.onkeydown = handleEvents.keydown
window.onmousedown = handleEvents.mousedown
window.onmouseup = handleEvents.mouseup
window.onscroll = handleEvents.scroll


/* Définition de la position initiale de la caméra sur l'axe Z */
camera.position.z = config.defaultCameraPosition.z;
render();


addText(futuraFont, 'white', 0, 10, 20900, 100, 'Mon portrait chinois'); // Main title
addText(futuraFont, 'orange', 0, -200, 20900, 40, 'Loïc Etienne'); // Caption (name, orange)

addText(futuraFont, 'white', 0, 300, 18750, 80, 'Introduction'); // Intro title
addText(futuraFont, 'white', -300, 100, 18750, 30, 'Ce portrait chinois à pour but de retranscrire\nma personnalité et mes aspirations au travers\nde diverses comparaisons.\nCes comparaisons prennent la forme de\n«si j’étais […], je serais […]».\nJ’espère que vous apprécierez autant le parcourir\nque j’ai apprécié le réaliser.'); // Intro text
addImage('images/singapore_1_opti.jpg', 576, 360, 1, 550, -200, 18740); // Singapore pic
addImage('images/avatar_1_opti.jpg', 384, 216, 1, 300, 50, 18850); // Avatar pic

addText(futuraFont, 'white', 0, 300, 16150, 80, "Si j'étais un film, je serais Avatar."); // Avatar Title
addText(futuraFont, 'white', 450, 150, 16150, 30, "Le scénario de ce film nous plonge\ndans un univers parallèle où les\nhumains sont les intrus dans un\nmonde extraterrestre. Non seulement\nce choix était à contre-courant des\nidéaux cinématographiques de\nscience-fiction de l’époque, mais il\ns’est également avéré fructueux. Ce\nfilm représente ainsi bien mes\nconvictions personnelles, telles que,\nparfois, aller à contre-courant peut\ns’avérer être source de succès."); // Avatar Text
addImage('images/avatar_2_opti.jpg', 1280, 720, 0.36, -220, -50, 16450); // Avatar IMG

addText(futuraFont, 'white', 0, 600, 13850, 80, "Si j'étais un personnage de jeux vidéos, je serais Giovanni."); // Giovanni Title
addText(futuraFont, 'white', -750, 300, 13850, 50, "Personnage emblématique de la\nsaga Pokémon, Giovanni a incarné\nle mal durant les premières versions.\nOutre ses convictions souvent\ndouteuses, on peut constater chez ce\npersonnage un leadership, une\npolyvalence (de par ses différents\nrôles), ainsi qu’un pragmatisme qui\nne le cloisonne néanmoins pas dans\nses opinions. Giovanni a une\npersonnalité qui me correspond, et\nun potentiel scénaristique inexploré."); // Giovanni Text
addImage('images/giovanni_1_opti.jpg', 604, 340, 2, 700, -100, 13900); // Giovanni IMG

addText(futuraFont, 'white', 0, 400, 11850, 80, "Si j’étais une couleur, je serais le bleu."); // Blue title
addText(futuraFont, 'white', 500, 250, 11850, 35, "Couleur représentant la nature et la\nplanète, de par le ciel et la mer, elle\nreprésente également selon moi la\nmodernité, le progrès. Le bleu est\nune couleur qui, sous ses différentes\nnuances, correspond à merveille à\nune interface, quelle qu’elle soit. Elle\npeut également être utilisée en\npeinture, en art décoratif. Ce n’est\npas pour rien qu’on la retrouve\négalement sur les drapeaux français\n& européens."); // Blue text
addImage('images/blue_1_opti.jpg', 768, 576, 1, -400, -70, 11999); // Blue IMG

addText(futuraFont, 'white', 0, 400, 9800, 80, "Si j’étais un pays, je serais Singapour."); // Singapore title
addText(futuraFont, 'white', -525, 200, 9700, 37, "Une cité-état qui a les qualités non négligeables\nd’avoir une économie flamboyante, des rues &\nbâtiments impeccables, et un taux de criminalité\nau ras des pâquerettes. Cela est rendu possible\ngrâce aux engagements de l’état de garantir une\nprospérité économique via des positions\nambitieuses sur les marchés mondiaux, et de\nprotéger sa population en appliquant des règles\nstrictes respectées par tous. Bien que ce pays ne\ncorresponde pas à tout le monde, il est pour moi\nl’image d’un pays sûr et prospère, et c’est\npourquoi je l’ai inscrit dans ce portrait chinois."); // Singapore text
addImage('images/singapore_2_opti.jpg', 912, 593, 1, 575, -100, 9800); // Singapore IMG

addText(futuraFont, 'white', 0, 500, 7750, 80, "Si j’étais une entreprise, je serais Coinbase Ltd."); // Coinbase title
addText(futuraFont, 'white', -700, 400, 7500, 53, "Pionnier et leader dans l’échange d’actifs\nvirtuels, Coinbase a pour ambition de\nradicalement modifier le modèle économique\nmondial en se plaçant en tant qu’acteur majeur\nde l’évolution de la blockchain. Les objectifs,\nconvictions et aspirations de cette entreprise\nsont en corrélation avec mes convictions\npersonnelles, concernant une économie plus\nlibre, plus indépendante et plus juste pour tous.\nÀ terme, Coinbase vise une démocratisation\ndes actifs virtuels, et une utilisation de ceux-ci\ndans un cadre autre que la spéculation, et c’est\nun objectif auquel j’adhère avec grand intérêt."); // Coinbase text
addImage('images/coinbase_1_opti.jpg', 678, 356, 2, 875, -100, 7500); // Coinbase IMG

addText(futuraFont, 'white', 0, 750, 5500, 80, "Si j’étais un morceau de musique, je serais Shoot To Thrill de AC/DC."); // ACDC title
addText(futuraFont, 'white', 700, 400, 5500, 56, "Ce morceau a la particularité d’offrir un rythme\nsoutenu et une ambiance musicale acharnée. Ce\nmorceau de musique, en mon opinion, reflète la\nvolonté d’un individu de réussir, de devenir\nmeilleur, et de gagner, quelqu’en soit le prix.\nJe trouve ce morceau très évocateur, il crée une\nambiance telle que rien n’est impossible, et que\nl’acharnement et la persévérance paye. De plus,\nle rythme est très bien géré, les paroles sont\nefficaces et correspondent à l’ambiance globale.\nJ’apprécie ce morceau car il me motive dans la\nplupart de mes travaux. C’est notamment pour\ncela qu’il se trouve dans ce portrait chinois."); // ACDC text
addImage('images/ACDC_1_opti.jpg', 640, 640, 1.5, -1000, 100, 5500); // ACDC IMG

addText(futuraFont, 'white', 0, 450, 3500, 80, "Si j'étais un outil, je serais un couteau suisse."); // Swiss knife title
addText(futuraFont, 'white', -550, 250, 3500, 40, "Allégorie de la polyvalence, et analogie\nconvergent à merveille avec l’esprit MMI,\nle couteau suisse se veut polyvalent,\nrépondant à moult problématiques. Un\ncouteau suisse a l’interêt non négligeable\nde rassembler un ensemble de fonctions\nen un seul outil, le rendant rapidement\nindispensable. J’aspire personnellement à\nacquérir cette polyvalence, à devenir un\nvéritable couteau suisse capable de\nrésoudre une multitude de problématiques\nde façon efficace."); // Swiss knife text
addImage('images/swiss_knife_1_opti.jpg', 807, 675, 0.8, 450, -80, 3750) // Swissh knife IMG

particles(1500);

onReady(function () {
    document.querySelector('.loader').style.display = 'none';
});