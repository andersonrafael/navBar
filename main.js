const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', () => {
    //modo alternativo sem chamar a função alterarContexto
    //html.setAttribute('data-contexto', 'foco')
    //banner.setAttribute('src', '/imagens/foco.png')
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    //modo alternativo sem chamar a função alterarContexto
    //html.setAttribute('data-contexto', 'descanso-curto')
    //banner.setAttribute('src', 'imagens/descanso-curto.png')
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    //modo alternativo sem chamar a função alterarContexto
    //html.setAttribute('data-contexto', 'descanso-longo')
    //banner.setAttribute('src', '/imagens/descanso-longo.png')
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}