let activeIndex = 0;

const groups = document.getElementsByClassName("container-lista");
const container = document.querySelector(".ul");

function esquerdaPraDireita(){
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`.container-lista[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`.container-lista[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    }, 1);
}

const direitaPraEsquerda = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    const currentGroup = document.querySelector(`.container-lista[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`.container-lista[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    }, 1);
}

let intervalo = setInterval(() => {
    esquerdaPraDireita();
}, 6000);

container.addEventListener("mouseover", () => {
    clearInterval(intervalo);
});

container.addEventListener("mouseout", () => {
    intervalo = setInterval(() => {
        esquerdaPraDireita();
    }, 6000);
});

const direita = () => {
    clearInterval(intervalo);
    esquerdaPraDireita();
    intervalo = setInterval(() => {
        esquerdaPraDireita();
    }, 6000);
}

const esquerda = () => {
    clearInterval(intervalo);
    direitaPraEsquerda();
    intervalo = setInterval(() => {
        esquerdaPraDireita();
    }, 6000);
}

let activeIndex02 = 0;

const groups02 = document.getElementsByClassName("artigoServicos");
const container02 = document.querySelector(".artigoServicos");


function esquerdaPraDireita02(){
    const nextIndex = activeIndex02 + 1 <= groups02.length - 1 ? activeIndex02 + 1 : 0;
    const currentGroup = document.querySelector(`.artigoServicos[data-index="${activeIndex02}"]`);
    const nextGroup = document.querySelector(`.artigoServicos[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex02 = nextIndex;
    }, 1);
}

const direitaPraEsquerda02 = () => {
    const nextIndex = activeIndex02 - 1 >= 0 ? activeIndex02 - 1 : groups02.length - 1;
    const currentGroup = document.querySelector(`.artigoServicos[data-index="${activeIndex02}"]`);
    const nextGroup = document.querySelector(`.artigoServicos[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex02 = nextIndex;
    }, 1);
}

let intervalo02 = setInterval(() => {
    esquerdaPraDireita02();
}, 6000);

container02.addEventListener("mouseover", () => {
    clearInterval(intervalo02);
});

container02.addEventListener("mouseout", () => {
    intervalo02 = setInterval(() => {
        esquerdaPraDireita02();
    }, 6000);
});

const direita02 = () => {
    clearInterval(intervalo02);
    esquerdaPraDireita02();
    intervalo02 = setInterval(() => {
        esquerdaPraDireita02();
    }, 6000);
}

const esquerda02 = () => {
    clearInterval(intervalo02);
    direitaPraEsquerda02();
    intervalo02 = setInterval(() => {
        esquerdaPraDireita02();
    }, 6000);
}