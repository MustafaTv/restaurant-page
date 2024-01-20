function contact() {
    const contact = document.createElement('div');

    const auRevoir = document.createElement('div');
    auRevoir.id = 'auRevoir';
    const konbanwa = document.createElement('p');
    konbanwa.textContent = 'Konbanwa !';
    auRevoir.appendChild(konbanwa);

    const info = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Kumamoto Ramen';
    info.appendChild(title);
    const address = document.createElement('span');
    address.textContent = '1812 Saint-Catherine St W, Montreal, Quebec H3H 1M1';
    info.appendChild(address);
    const email = document.createElement('h2');
    email.textContent = 'Email Address';
    info.appendChild(email);
    const emailAddress = document.createElement('span');
    emailAddress.textContent = 'kumamotoramenmtl@gmail.com';
    info.appendChild(emailAddress);
    const phone = document.createElement('h2');
    phone.textContent = 'Phone Number';
    info.appendChild(phone);
    const phoneNumber = document.createElement('span');
    phoneNumber.textContent = '(514) 935-0777';
    info.appendChild(phoneNumber);

    contact.appendChild(auRevoir);
    contact.appendChild(info);

    return contact;
}

export default contact();