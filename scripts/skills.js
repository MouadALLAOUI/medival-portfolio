import { markdownToHtml } from "./markdowntohtml.js";
import skills from "../content/skills.js";

const skillsGridContainerP = document.querySelector('.skills-grid-container');
const skillsGridContainer = document.querySelector('.skills-grid');
const skillsGridPag = document.querySelector('.pagination');
const skillsOverviewContainer = document.querySelector('.skills-overview');

let skillPerPage = 6;
let currentPage = 1;
let isActiveSkills = false;

function overviewSkills(element) {
  const itemClass = `skill-${element.id}`;
  skillsOverviewContainer.innerHTML = "";

  if (
    skillsOverviewContainer.classList.contains("active") &&
    skillsOverviewContainer.classList.contains(itemClass)
  ) {
    skillsOverviewContainer.classList.remove("active", itemClass);
    skillsGridContainerP.classList.remove("active", itemClass);
    isActiveSkills = false;
    return;
  }

  skillsOverviewContainer.classList.forEach(cls => {
    if (cls.startsWith("skill-")) {
      skillsOverviewContainer.classList.remove(cls);
      skillsGridContainerP.classList.remove(cls);
    }
  });

  document.querySelectorAll(".skill-card").forEach(c => c.classList.remove("active"));
  const card = document.querySelector(`.skill-card[data-skill="${element.id}"]`);
  if (card) card.classList.add("active");

  isActiveSkills = true;
  skillsOverviewContainer.classList.add("active", itemClass);
  skillsGridContainerP.classList.add("active", itemClass);

  // ----

  const skillOverviewCont = document.createElement('div');
  skillOverviewCont.className = 'skill-overview active';

  const skillThumb = document.createElement('div');
  skillThumb.className = 'thumbnail';

  // add thumbnail

  const skillThumbImg = document.createElement('img');
  skillThumbImg.setAttribute('src', element.overview.thumbnail)
  skillThumbImg.setAttribute('alt', element.name + " thumbnail")

  skillThumb.append(skillThumbImg)
  skillOverviewCont.append(skillThumb)

  // add title name and intro desc, proficiency
  const skillNameContainer = document.createElement('div');
  skillNameContainer.className = 'skill-name-container';
  const skillNameIcon = document.createElement('div');
  skillNameIcon.className = 'skill-name-icon';
  const skillName = document.createElement('h2');
  skillName.className = 'skill-name';
  skillName.textContent = element.name;
  const skillIcon = document.createElement('p');
  skillIcon.className = 'skill-icon';
  skillIcon.textContent = element.icon;

  skillNameIcon.append(skillIcon, skillName)

  const skillStartDate = document.createElement('p');
  skillStartDate.className = 'skill-startdate';
  skillStartDate.innerHTML = `<strong>Started:</strong> ${element.overview.startdate || 'Unknown'}`;



  const starContainer = document.createElement('div');
  starContainer.className = 'proficiency';
  let level = element.level;
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    if (level >= 1) {
      star.innerHTML = '★';
      star.classList.remove('empty');
      starContainer.appendChild(star);
      level--;
    } else {
      star.innerHTML = '☆';
      star.classList.add('empty');
      starContainer.appendChild(star);
    }
  }

  skillNameContainer.append(skillNameIcon)
  skillNameContainer.append(skillStartDate)
  skillNameContainer.append(starContainer)
  const skillIntro = document.createElement('p');
  skillIntro.className = 'skill-intro';
  skillIntro.innerHTML = element.overview.intro || 'not defined';
  skillNameContainer.append(skillIntro)
  skillOverviewCont.append(skillNameContainer)

  // add skill detailed desc
  if (element.overview.desc) {
    const skillDetailledDscTitle = document.createElement('h3');
    skillDetailledDscTitle.textContent = "Detailled desciprion";

    const skillOverDesc = markdownToHtml(element.overview.desc);

    const skillDetailledDscContainer = document.createElement('div');
    skillDetailledDscContainer.className = 'markdown-content';
    skillDetailledDscContainer.innerHTML = skillOverDesc;

    skillOverviewCont.append(skillDetailledDscTitle)
    skillOverviewCont.append(skillDetailledDscContainer)
  }
  // Build features list HTML
  if (element.overview.features && element.overview.features.length > 0) {
    const skillFeaturesTitle = document.createElement('h3');
    skillFeaturesTitle.textContent = "Features";

    const skillFeaturesContainer = document.createElement('ul');
    skillFeaturesContainer.innerHTML = element.overview.features.map(
      (f, i) => `<li data-key="${i}">${f}</li>`).join('');

    skillOverviewCont.append(skillFeaturesTitle)
    skillOverviewCont.append(skillFeaturesContainer)
  }
  // Build images gallery HTML
  if (element.overview.imgs && element.overview.imgs.length > 0) {
    const skillGalTitle = document.createElement('h3');
    skillGalTitle.textContent = "Gallery";

    const skillGalContainer = document.createElement('div');
    skillGalContainer.className = "imgs-gal";
    skillGalContainer.innerHTML = element.overview.imgs.map(img =>
      `<div class="gal-item ${img.isBlured ? "blured" : ""}">
          <a href="${img.src}" target="_blank">
            <img src="../media/${img.src}" alt="${img.alt}" class="${img.isMobile ? "mobile-img" : ""}" />
          </a>
        </div>`).join('');

    skillOverviewCont.append(skillGalTitle)
    skillOverviewCont.append(skillGalContainer)
  }
  // skill-story
  if (element.overview.storyBehindIt) {
    const skillStoryTitle = document.createElement('h3');
    skillStoryTitle.textContent = "Story Behind It";

    const skillStory = markdownToHtml(element.overview.storyBehindIt);

    const skillStoryContainer = document.createElement('div');
    skillStoryContainer.className = 'markdown-content';
    skillStoryContainer.innerHTML = skillStory;

    skillOverviewCont.append(skillStoryTitle)
    skillOverviewCont.append(skillStoryContainer)
  }

  skillsOverviewContainer.append(skillOverviewCont);
  update();
}
function renderSkills(page) {
  skillsGridContainer.innerHTML = "";
  const startIndex = (page - 1) * skillPerPage;
  const endIndex = startIndex + skillPerPage;
  const paginatedSkills = skills.slice(startIndex, endIndex);
  paginatedSkills.forEach(element => {
    const skillCard = document.createElement('div');
    skillCard.className = `skill-card skill-${element.id}`;
    skillCard.dataset.skill = element.id;
    skillCard.addEventListener("click", () => overviewSkills(element));
    skillCard.innerHTML = `
      <div class="skill-name-container">
        <span class="skill-icon">${element.icon}</span>
        <h3 class="skill-name">${element.name}</h3>
      </div>
      <p class="skill-description">${element.description}</p>
    `;
    const starContainer = document.createElement('div');
    starContainer.className = 'proficiency';
    let level = element.level;
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      if (level >= 1) {
        star.innerHTML = '★';
        star.classList.remove('empty');
        starContainer.appendChild(star);
        level--;
      } else {
        // star.innerHTML = '☆'; // Empty star
        star.innerHTML = '★'; // Empty star
        star.classList.add('empty');
        starContainer.appendChild(star);
      }
    }
    skillCard.appendChild(starContainer);

    skillsGridContainer.appendChild(skillCard);
  });

}
function renderPagination() {
  skillsGridPag.innerHTML = "";
  const pageCount = Math.ceil(skills.length / skillPerPage);
  const nav = document.createElement("nav");
  nav.className = "pagination-container";
  nav.setAttribute("aria-label", "Skills pagination");

  const prev = document.createElement("a");
  prev.href = "#";
  prev.className = "pagination-container-link";
  prev.textContent = "<";
  prev.addEventListener("click", e => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      update();
    }
  });
  nav.appendChild(prev);

  for (let i = 1; i <= pageCount; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.className = "pagination-container-link" + (i === currentPage ? " active" : "");
    pageLink.textContent = i;
    pageLink.addEventListener("click", e => {
      e.preventDefault();
      currentPage = i;
      update();
    });
    nav.appendChild(pageLink);
  }

  const next = document.createElement("a");
  next.href = "#";
  next.className = "pagination-container-link";
  next.textContent = ">";
  next.addEventListener("click", e => {
    e.preventDefault();
    if (currentPage < pageCount) {
      currentPage++;
      update();
    }
  });
  nav.appendChild(next);
  skillsGridPag.appendChild(nav);
};

function setSkillPerPage(currentWidth) {
  if (currentWidth > 1024 && !isActiveSkills) {
    skillPerPage = 8;
  }
  else if ((currentWidth > 1024 && isActiveSkills) || (currentWidth > 768 && !isActiveSkills)) {
    skillPerPage = 6;
  }
  else if ((currentWidth > 768 && isActiveSkills) || (currentWidth > 400 && !isActiveSkills)) {
    skillPerPage = 4;
  }
  else {
    skillPerPage = 2;
  }
}


function update() {
  setSkillPerPage(window.innerWidth);
  renderSkills(currentPage);
  renderPagination();
}

document.addEventListener('DOMContentLoaded', () => {
  let resizeTimeout;

  update();

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      currentPage = 1;
      update();
    }, 150);
  });
});
