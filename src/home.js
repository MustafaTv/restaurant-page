function createMiddle() {
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const info = document.createElement('div');
    info.classList.add('info');

    const catchy = document.createElement('span');
    catchy.textContent = 'The most authentic ramen in all of Montreal!';
    info.appendChild(catchy);

    middle.appendChild(info);

    return middle;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const copyright = document.createElement('h4');
    copyright.textContent = 'Copyright 2024 Samy Chattali';
    footer.appendChild(copyright);

    return footer;
}

function createHome() {
    const container = document.createElement('div');

    container.appendChild(createMiddle());
    container.appendChild(createFooter());

    return container;
}

export default createHome();
