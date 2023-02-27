let hero_button = document.querySelector('.hero_button');
let popup = document.querySelector('.popup');
let portfolio_list = document.querySelector('.portfolio_list');

hero_button.addEventListener('click', () => {
  popup.classList.add('opened');

  let popup_content = document.createElement('div');
  popup_content.className = 'popup_content';

  let close_popup = document.createElement('button');
  close_popup.className = 'close_popup';
  close_popup.textContent = 'X';

  let contacts_heading = document.createElement('h3');
  contacts_heading.className = 'contacts_heading';
  contacts_heading.textContent = 'Contact me';

  let form = document.createElement('form');
  let email = document.createElement('input');
  email.id = 'email';
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'E-mail');
  let tel = document.createElement('input');
  tel.id = 'tel';
  tel.setAttribute('type', 'tel');
  tel.setAttribute('placeholder', 'Phone');
  let text = document.createElement('input');
  text.id = 'message';
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Message');
  let submit = document.createElement('button');
  submit.className = 'form_btn';
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Send message';

  form.append(email);
  form.append(tel);
  form.append(text);
  form.append(submit);

  popup_content.append(close_popup);
  popup_content.append(contacts_heading);
  popup_content.append(form);

  popup.append(popup_content);

  close_popup.addEventListener('click', () => {
    popup.classList.remove('opened');
    popup_content.remove();
  });

  window.addEventListener('click', event => {
    if(event.target.classList.contains('opened')) {
      popup.classList.remove('opened');
      popup_content.remove();
    }
  });
});

portfolio_list.addEventListener('click', e => {
  if(e.target.currentSrc) {
    popup.classList.add('opened');

    let popup_content = document.createElement('div');
    popup_content.className = 'popup_content';

    let close_popup = document.createElement('button');
    close_popup.className = 'close_popup';
    close_popup.textContent = 'X';
    
    let portfolio_img = document.createElement('img');
    portfolio_img.className = 'portfolio_img';
    portfolio_img.setAttribute('src', e.target.currentSrc);
    portfolio_img.setAttribute('alt', 'photo');

    popup_content.append(close_popup);
    popup_content.append(portfolio_img);
    popup.append(popup_content);

    close_popup.addEventListener('click', () => {
      popup.classList.remove('opened');
      popup_content.remove();
    });
  
    window.addEventListener('click', event => {
      if(event.target.classList.contains('opened')) {
        popup.classList.remove('opened');
        popup_content.remove();
      }
    });
  }
});