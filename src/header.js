function createTitle() {
    const header = document.createElement('div');
    header.classList.add('header');

    const restoName = document.createElement('h1');
    restoName.textContent = 'Kumamoto';
    header.appendChild(restoName);

    return header;
}

function createSelection() {
    const navigation = document.createElement('div');
    navigation.classList.add('selection')

    const homeBtn = document.createElement('a');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'home';
    homeBtn.href = '#'
    homeBtn.classList.add('select-btn');
    navigation.appendChild(homeBtn);

    const menuBtn = document.createElement('a');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menu';
    menuBtn.href = '#'
    menuBtn.classList.add('select-btn');
    navigation.appendChild(menuBtn);

    const contactBtn = document.createElement('a');
    contactBtn.textContent = 'Contact';
    contactBtn.id = 'contact';
    contactBtn.href = '#'
    contactBtn.classList.add('select-btn');
    navigation.appendChild(contactBtn);

    return navigation;
}

function createHeader() {
    const container = document.createElement('div');

    container.appendChild(createTitle());
    container.appendChild(createSelection());

    return container;
}

export default createHeader();
