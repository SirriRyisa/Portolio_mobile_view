const projects = [
  {
    name: 'TONIC',
    tag: ['CANOPY', 'Backend Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum qui cumque omnis, quaerat labore distinctio! Corporis ipsum blanditiis architecto voluptatibus illo maiores sunt id exercitationem quis totam deserunt odit, vel numquam in doloremque suscipit dicta fugit eius. <span class="hide--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus beatae minus molestias expedita, sunt repellat itaque vero tempore quo, corporis quidem assumenda ut est autem obcaecati totam reiciendis repudiandae.</span>',
    imageurl: './images/first_img.png',
    technologies: ['html', 'css', 'javaScript'],
    live_version: '',
    codesource: '',
  },
  {
    name: 'Multi-Post <br> Stories',
    tag: ['Facebook', 'Fullstack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum qui cumque omnis, quaerat labore distinctio! Corporis ipsum blanditiis architecto voluptatibus illo maiores sunt id exercitationem quis totam deserunt odit, vel numquam in doloremque suscipit dicta fugit eius. <span class="hide--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus beatae minus molestias expedita, sunt repellat itaque vero tempore quo, corporis quidem assumenda ut est autem obcaecati totam reiciendis repudiandae.</span>',
    imageurl: './images/second_img.png',
    technologies: ['html', 'ruby on rails', 'css', 'javaScript'],
    live_version: '',
    codesource: '',
  },
  {
    name: 'Facebook 360',
    tag: ['Facebook', 'Fullstack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum qui cumque omnis, quaerat labore distinctio! Corporis ipsum blanditiis architecto voluptatibus illo maiores sunt id exercitationem quis totam deserunt odit, vel numquam in doloremque suscipit dicta fugit eius. <span class="hide--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus beatae minus molestias expedita, sunt repellat itaque vero tempore quo, corporis quidem assumenda ut est autem obcaecati totam reiciendis repudiandae.</span>',
    imageurl: './images/third_img.png',
    technologies: ['html', 'ruby on rail', 'css', 'javaScript'],
    live_version: '',
    codesource: '',
  },
  {
    name: 'Uber Navigation',
    tag: ['Uber', 'Lead developer', '2018'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDes: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum qui cumque omnis, quaerat labore distinctio! Corporis ipsum blanditiis architecto voluptatibus illo maiores sunt id exercitationem quis totam deserunt odit, vel numquam in doloremque suscipit dicta fugit eius. <span class="hide--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus beatae minus molestias expedita, sunt repellat itaque vero tempore quo, corporis quidem assumenda ut est autem obcaecati totam reiciendis repudiandae.</span>',
    imageurl: './images/forth_img.png',
    technologies: ['html', 'ruby on rail', ' css', 'javaScript'],
    live_version: '',
    codesource: '',
  },
];

const cardSection = document.querySelector('.card-section');
const popupSection = document.querySelector('.popup--cover');
popupSection.classList.add('hide-pop');

Object.keys(projects).forEach((k) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'card');
  const ProjectData = projects[k];
  div.innerHTML = `<div class="card-img">
          <img src= '${ProjectData.imageurl}' alt="project image" />
        </div>
        <div  class="card-decri">
          <h3>
            ${ProjectData.name}
          </h3>
          <div class="tags-canopy">
            <h5>${ProjectData.tag[0]}</h5>
            <ul class="list-tags">
              <li>${ProjectData.tag[1]}</li>
              <li>${ProjectData.tag[2]}</li>
            </ul>
          </div>
          <p>
          ${ProjectData.description}
          </p>

          <ul class="tag-ul">
            <li>${ProjectData.technologies[0]}</li>
            <li>${ProjectData.technologies[1]}</li>
            <li>${ProjectData.technologies[2]}</li>
          </ul>
          <div>
            <button type="button" class="btn-card" id="project1">See project</button>
          </div>
      </div>`;
  cardSection.appendChild(div.cloneNode(true));
});

//  Dynamic popup

Object.keys(projects).forEach((k) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'popup-white');
  div.classList.add('hide-pop');
  const PopupData = projects[k];
  div.innerHTML = `
        <div class="tonic-icon">
          <h2>${PopupData.name}</h2>
          <div class="exit-popup">&times;</div>
        </div>
        <ul class="ben">
          <li class="popup-list canopy-style">${PopupData.tag[0]}</li>
          <li class="popup-list">${PopupData.tag[1]}</li>
          <li class="popup-list">${PopupData.tag[2]}</li>
        </ul>
        <img src='${PopupData.imageurl}' class="pop-image">
        <div class='ryisa'>
          <p>
          ${PopupData.popDes}
          </p>
          <div >
            <ul class="techno">
              <li class="techno-list">html</li>
              <li class="techno-list">css</li>
              <li     class="techno-list">Javascript</li>
              <li class="techno-list mike">github</li>
              <li class="techno-list mike">rubby</li>
              <li class="techno-list mike">Bootstrap</li>
            </ul>
            <hr>
            <div class="pop-button">
              <button>See Live <img src="./images/see_live.png"></button>
              <button>See Source <img src="./images/see_source.png"></button>
            </div>
          </div>
      </div>`;
  popupSection.appendChild(div.cloneNode(true));
});

const cardBtn = Array.from(document.getElementsByClassName('btn-card'));

const popCard = Array.from(document.getElementsByClassName('popup-white'));

const existPop = Array.from(document.getElementsByClassName('exit-popup'));
let p = 0;
let count = 0;

// Pop-Up generation clicked
Object.keys(cardBtn).forEach((i) => {
  cardBtn[i].addEventListener('click', () => {
    while (p < cardBtn.length) {
      if (i === '0') {
        popupSection.classList.toggle('hide-pop');
        popCard[0].classList.toggle('hide-pop');
        break;
      } else if (i === '1') {
        popupSection.classList.toggle('hide-pop');
        popCard[1].classList.toggle('hide-pop');
        break;
      } else if (i === '2') {
        popupSection.classList.toggle('hide-pop');
        popCard[2].classList.toggle('hide-pop');
        break;
      } else {
        popupSection.classList.toggle('hide-pop');
        popCard[3].classList.toggle('hide-pop');
        break;
      }
      // eslint-disable-next-line no-unreachable
      p += 1;
    }
  });
});

// Close popUp
Object.keys(existPop).forEach((i) => {
  existPop[i].addEventListener('click', () => {
    while (count < popCard.length) {
      if (i === '0') {
        popupSection.classList.toggle('hide-pop');
        popCard[0].classList.toggle('hide-pop');
        break;
      } else if (i === '1') {
        popupSection.classList.toggle('hide-pop');
        popCard[1].classList.toggle('hide-pop');
        break;
      } else if (i === '2') {
        popupSection.classList.toggle('hide-pop');
        popCard[2].classList.toggle('hide-pop');
        break;
      } else {
        popupSection.classList.toggle('hide-pop');
        popCard[3].classList.toggle('hide-pop');
        break;
      }
      // eslint-disable-next-line no-unreachable
      count += 1;
    }
  });
});