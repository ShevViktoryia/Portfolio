function hoverImg(elem, src1, src2) {
  elem.addEventListener('mouseover', () => {
    elem.setAttribute('src', src1);
  });
  elem.addEventListener('mouseout', () => {
    elem.setAttribute('src', src2);
  });
}

//burger menu
let burger_menu = document.querySelector(".burger_menu");
let menu = document.querySelector(".header_nav");
let blackout = document.querySelector('.blackout');

burger_menu.onclick = () => {
  menu.classList.toggle('open');
  menu.classList.contains('open') ? blackout.style.display = 'block' : blackout.style.display = 'none';
}

blackout.onclick = () => {
  if(menu.classList.contains('open')) {
    menu.classList.remove('open');
    blackout.style.display = 'none';
  }
}

//popup
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

//header logo
let header_logo = document.querySelector('#header_logo');
hoverImg(header_logo, './assets/icons/logo_hover.svg', './assets/icons/logo_1.svg');

//change lang
let lang_ru = document.querySelector('.lang_ru');
let lang_en = document.querySelector('.lang_en');

lang_en.onclick = () => {
  if(!lang_en.classList.contains('active_lang')) {
    lang_en.classList.add('active_lang');
    lang_ru.classList.remove('active_lang');
  }
}

lang_ru.onclick = () => {
  if(!lang_ru.classList.contains('active_lang')) {
    lang_ru.classList.add('active_lang');
    lang_en.classList.remove('active_lang');
  }
}

//seasons_buttons
let seasons_buttons = document.querySelector('.seasons_buttons');
seasons_buttons.onclick = (e) => {
  [...seasons_buttons.children].map(item => item.classList.remove('active_season'));
  e.target.classList.add('active_season');
}

//video player
let play_btn = document.querySelector('.play_btn');
hoverImg(play_btn, './assets/icons/play_hover.svg', './assets/icons/play.svg');

let instagram = document.querySelector('.instagram');
let facebook = document.querySelector('.facebook');
let twitter = document.querySelector('.twitter');
let pinterest = document.querySelector('.pinterest');

hoverImg(instagram, './assets/icons/inst_hover.svg', './assets/icons/inst.svg');
hoverImg(facebook, './assets/icons/fb_hover.svg', './assets/icons/fb.svg');
hoverImg(twitter, './assets/icons/tw_hover.svg', './assets/icons/tw.svg');
hoverImg(pinterest, './assets/icons/pinterest_hover.svg', './assets/icons/pinterest.svg');