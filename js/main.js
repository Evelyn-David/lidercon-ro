// TABS - feature section

const tabContent = [
    {
        title: 'Staţii de inspecţie tehnică (ITP)',
        body: 'Construirea sub chei şi instalarea staţiilor de inspecţie tehnică (ITP), fixe sau mobile, în orice ţară în care sunt necesare serviciile noastre.',
        img: './img/landing/4.jpg'
    },
    {
        title: 'Serviciile noastre în staţiile ITP includ:',
        body: 'Consultare Juridica, Proiecte si construcții, Administrarea şi instalarea echipamentelor şi utilajelor, Administrarea de software de administrare, Instruirea personalului Pregătirea softwarelor speciale - pentru controlul şi supravegherea parcului de vehiculele pentru administraţiile publice şi guvernamentale, Asistenţă şi întreţinere tehnică si informaticei în timpul exploatării.',
        img: './img/landing/2.jpg'
    },
    {
        title: 'Centre adaptate pentru vehicule speciale',
        body: 'Construirea si administrarea de centre adaptate pentru vehicule speciale. Oferim un sistem de curăţare şi decontaminare radiologica şi chimică (NBC) pentru tancuri, vehicule speciale, vehicule blindate, camioane şi altele. <br><br> Dispunem de utilaj special pentru trecerea reviziunilor tehnice pentru vehicule militare, precum şi elevatoare de coloane adaptate pentru aceste vehicule.',
        img: './img/landing/1.jpg'
    }
]
const tabs = document.querySelectorAll('.tab');
const featureTitle = document.querySelector('.feat-title');
const featureBody = document.querySelector('.feat-body');
const featureImg = document.querySelector('.feat-img');

function toggleTabs(tabNumber) {
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    event.target.classList.add("active-tab");
    featureTitle.innerHTML = `${tabContent[tabNumber].title}`;
    featureBody.innerHTML = `${tabContent[tabNumber].body}`;
    featureImg.src = `${tabContent[tabNumber].img}`;

}