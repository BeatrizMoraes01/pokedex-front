//selecionar um pokemon + chamar evento de click => trocar imagem principal, nome do pokemon
//trocar imagem principal
const imgPrincipal = document.querySelector('.img--pokemon');
const ampharos = document.querySelector('.pokebola--pokemon-item__ampharos');
const croconaw = document.querySelector('.pokebola--pokemon-item__croconaw');
const pichu = document.querySelector('.pokebola--pokemon-item__pichu');
const togetic = document.querySelector('.pokebola--pokemon-item__togetic');
const igglybuff = document.querySelector('.pokebola--pokemon-item__igglybuff');
const nomePokemon = document.querySelector('.nome--pokemon');
const croconawMobile = document.querySelector('.pokebola--pokemon-item__croconaw_mobile');
const ampharosMobile = document.querySelector('.pokebola--pokemon-item__ampharos_mobile');
const pichuMobile = document.querySelector('.pokebola--pokemon-item__pichu_mobile');
const togeticMobile = document.querySelector('.pokebola--pokemon-item__togetic_mobile');
const igglybuffMobile = document.querySelector('.pokebola--pokemon-item__igglybuff_mobile');

function trocarImgPrincipal (pokemon) {
    imgPrincipal.setAttribute('src', `./assets/imgs/${pokemon}.webp`);
    switch (pokemon) {
        case 'croconaw':
            nomePokemon.innerHTML = 'Croconaw';
            break;
        case 'ampharos':
            nomePokemon.innerHTML = 'Ampharos';
            break;
        case 'pichu':
            nomePokemon.innerHTML = 'Pichu';
            break;
        case 'togetic':
            nomePokemon.innerHTML = 'Togetic';
            break;
        case 'igglybuff':
            nomePokemon.innerHTML = 'Igglybuff';
    
        default:
            break;
    }
}

croconaw.addEventListener('click', () =>{
    trocarImgPrincipal ('croconaw');
});
ampharos.addEventListener('click', () =>{
    trocarImgPrincipal ('ampharos')
});
pichu.addEventListener('click', () =>{
    trocarImgPrincipal ('pichu')
});
togetic.addEventListener('click', () => {
    trocarImgPrincipal ('togetic')
});
igglybuff.addEventListener('click', () => {
    trocarImgPrincipal ('igglybuff')
});
croconawMobile.addEventListener('click', () =>{
    trocarImgPrincipal ('croconaw');
})
ampharosMobile.addEventListener('click', () =>{
    trocarImgPrincipal ('ampharos');
})
pichuMobile.addEventListener('click', () =>{
    trocarImgPrincipal ('pichu');
})
togeticMobile.addEventListener('click', () =>{
    trocarImgPrincipal ('togetic');
})
igglybuffMobile.addEventListener('click', () =>{
    trocarImgPrincipal ('igglybuff');
})