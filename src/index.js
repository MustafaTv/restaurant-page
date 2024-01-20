import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import createHeader from './header';

const content = document.querySelector('#content');
const selector = createHeader.querySelectorAll('a');

content.appendChild(createHeader);
content.appendChild(home);

for (const element of selector) {
    element.addEventListener('click', (a) => {
        content.innerHTML = "";
        content.appendChild(createHeader);
        switch(a.target.id) {
            case 'home': content.appendChild(home);
            break;
            case 'menu': content.appendChild(menu);
            break;
            case 'contact': content.appendChild(contact);
            break;
        }
    })
}
