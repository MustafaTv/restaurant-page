function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const itemOne = document.createElement('div');
    itemOne.classList.add('item');
    const foodOne = document.createElement('div');
    foodOne.classList.add('food');
    foodOne.textContent = 'Karaage';
    itemOne.appendChild(foodOne);
    const karaage = document.createElement('div');
    karaage.id = 'karaage';
    itemOne.appendChild(karaage);

    const itemTwo = document.createElement('div');
    itemTwo.classList.add('item');
    const foodTwo = document.createElement('div');
    foodTwo.classList.add('food');
    foodTwo.textContent = 'Takoyaki';
    itemTwo.appendChild(foodTwo);
    const takoyaki = document.createElement('div');
    takoyaki.id = 'takoyaki';
    itemTwo.appendChild(takoyaki);

    const itemThree = document.createElement('div');
    itemThree.classList.add('item');
    const foodThree = document.createElement('div');
    foodThree.classList.add('food');
    foodThree.textContent = 'Ramen Combo One';
    itemThree.appendChild(foodThree);
    const comboOne = document.createElement('div');
    comboOne.id = 'comboOne';
    itemThree.appendChild(comboOne);

    const itemFour = document.createElement('div');
    itemFour.classList.add('item');
    const foodFour = document.createElement('div');
    foodFour.classList.add('food');
    foodFour.textContent = 'Ramen Combo Two';
    itemFour.appendChild(foodFour);
    const comboTwo = document.createElement('div');
    comboTwo.id = 'comboTwo';
    itemFour.appendChild(comboTwo);

    menu.appendChild(itemOne);
    menu.appendChild(itemTwo);
    menu.appendChild(itemThree);
    menu.appendChild(itemFour);

    return menu;
}

export default menu();