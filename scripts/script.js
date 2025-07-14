import { markdownToHtml } from "./markdowntohtml.js";
import projects from "../content/projects.js";
import skills from "../content/skills.js";
import timelines from "../content/timelines.js";


const skillsGridContainer = document.querySelector('.skills-grid');
const skillsOverviewContainer = document.querySelector('.skills-overview');
const projectsGridContainer = document.querySelector('.projects-container');
const projectsOverviewContainer = document.querySelector('.projects-overview');
const TimelinesContainer = document.querySelector('.timeline');


document.addEventListener('DOMContentLoaded', () => {

  function overviewSkills(element) {
    const itemClass = `skill-${element.id}`;

    if (
      skillsOverviewContainer.classList.contains("active") &&
      skillsOverviewContainer.classList.contains(itemClass)
    ) {
      skillsOverviewContainer.classList.remove("active", itemClass);
      return;
    }

    skillsOverviewContainer.classList.forEach(cls => {
      if (cls.startsWith("skill-")) {
        skillsOverviewContainer.classList.remove(cls);
      }
    });


    skillsOverviewContainer.classList.add("active", itemClass);

    // ----------------------------------

    // Build proficiency stars
    let starsHtml = '';
    let level = element.level;
    for (let i = 0; i < 5; i++) {
      starsHtml += level > 0 ? '★' : '☆';
      level--;
    }
    // Build features list HTML
    const featuresHtml = element.overview.features && element.overview.features.length > 0
      ? `<h3>Features</h3>
      <ul>
      ${element.overview.features.map((f, i) => `<li data-key="${i}">${f}</li>`).join('')}
      </ul>`
      : '';

    // Build images gallery HTML
    const imgsHtml = element.overview.imgs && element.overview.imgs.length > 0
      ? `
      <h3>Gallery</h3>
      <div class="imgs-gal">
        ${element.overview.imgs.map(img =>
        `<div class="gal-item ${img.isBlur ? "blured" : ""}">
          <img src="../media/${img.src}" alt="${img.alt}" />
          </div>`).join('')}
      </div>`
      : '';
    skillsOverviewContainer.innerHTML = `
    <div class="skill-overview active">
        
        ${element.overview.thumbnail &&
      (`<div class="thumbnail"><img src="${element.overview.thumbnail}" /></div>`)
      }
        <h2 class="skill-name">${element.name}</h2>
        <p class="skill-startdate"><strong>Started:</strong> ${element.overview.startdate || 'Unknown'}</p>
        <div class="skill-proficiency">${starsHtml}</div>
        <p class="skill-intro">${element.overview.intro || ''}</p>
        ${element.overview.desc &&
      (`<h3>Detailled desciprion</h3>
        <div class="markdown-content">${markdownToHtml(element.overview.desc)}</div>`)
      }
        ${featuresHtml}
        ${imgsHtml}
        
        <p class="skill-story">${element.overview.storyBehindIt || 'not listed'}</p>
        ${element.overview.storyBehindIt &&
      (`<h3>Story Behind It:</h3>
        <div class="markdown-content">${markdownToHtml(element.overview.storyBehindIt)}</div>`)
      }
      </div>

    `;
  }

  overviewSkills(skills[0]); // Show the first skill by default

  skills.forEach(element => {
    const skillCard = document.createElement('div');
    skillCard.className = `skill-card skill-${element.id}`;
    skillCard.addEventListener("click", () => overviewSkills(element));

    skillCard.innerHTML = `
      <div class="skill-icon">${element.icon}</div>
      <h3 class="skill-name">${element.name}</h3>
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
        star.innerHTML = '☆'; // Empty star
        star.classList.add('empty');
        starContainer.appendChild(star);
      }
    }
    skillCard.appendChild(starContainer);

    skillsGridContainer.appendChild(skillCard);
  });

  // a func that allow to visualize the project blog
  function overviewProject(element) {
    const itemClass = `item-${element.id}`;

    if (
      projectsOverviewContainer.classList.contains("active") &&
      projectsOverviewContainer.classList.contains(itemClass)
    ) {
      projectsOverviewContainer.classList.remove("active", itemClass);
      return; // Exit early
    }

    // Remove previous item-* classes
    projectsOverviewContainer.classList.forEach(cls => {
      if (cls.startsWith("item-")) {
        projectsOverviewContainer.classList.remove(cls);
      }
    });

    projectsOverviewContainer.classList.add("active", itemClass);
    // alert(element.title)
    projectsOverviewContainer.innerHTML = `
    ${element.overview.thumbnail &&
      (`<div class="thumbnail"><img src="${element.overview.thumbnail}" /></div>`)
      }
    <h1 class="title">${element.title}</h1>
      ${element.tags.length > 0 ?
        (`<div class="tech-stack">
      ${element.tags.map((item, i) => (
          `<div class="tech-item" data-key="item-${i}">
        ${item}
      </div>`
        )).join('')}
      </div>`) : ""
      }
      
      <h3>Intro</h3>
      <p>${element.overview.intro ? element.overview.intro : element.desc}</p>

      ${element.overview.desc &&
      (`<h3>Detailled desciprion</h3>
      <div class="markdown-content">${markdownToHtml(element.overview.desc)}</div>`)
      }
      

      ${element.overview.imgs.length > 0 ?
        (`<h3>Gallary</h3>
      <div class="imgs-gal">
        ${element.overview.imgs.map((item, i) => (
          `<div class="gal-item ${item.isBlur ? "blured" : ""}" data-key="item-${i}">
        <img src="../media/${item.src}" alt="${item.src}" />
      </div>`
        )).join('')}
      </div>`) : ''
      }
      ${element.overview.features.length > 0 ?
        (`<h3>features</h3>
      <ul>
      ${element.overview.features.map((item, i) => (
          `<li class="" data-key="${i}">${item}</li>`
        )).join('')}
      </ul>`) : ''
      }
      
      ${element.overview.link.length > 0 ?
        (`<h3>links</h3>
      <ul class="overview-links">
      ${element.overview.link.map((item, i) => (
          `<li class="overview-link" key="${i}">
          <${item.isDisabled ? "span" : "a"}
            class="overview-link-item ${item.isDisabled ? "disabled" : ""}"
            href="${item.href}"
            target="_blank"
          >
            <div>${item.icon}</div>
            ${item.label}
          </${item.isDisabled ? "span" : "a"}>
        </li>`
        )).join('')}
      </ul>`) : ''
      }
      
      <div class="timestamp-date">
        <p>${element.overview.startdate ? element.overview.startdate : "unkonwn"} | ${element.overview.enddate ? element.overview.enddate : element.overview.status}</p>
      </div>
    `;
  }
  // overviewProject(projects[0]); // Show the first project by default
  projects.forEach(element => {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card project-${element.id}`;
    projectCard.addEventListener("click", () => overviewProject(element));
    const techStack = document.createElement('div');
    techStack.className = 'tech-stack';

    let tags = element.tags;

    tags.forEach(tagitem => {
      techStack.innerHTML += `<span class="tech-item">${tagitem}</span>`;
    })
    projectCard.innerHTML = `
      <h3 class="project-title">${element.title}</h3>
      <p class="project-description">${element.desc}</p>
    `;
    projectCard.appendChild(techStack);
    projectCard.innerHTML += `
    <a href="${element.link.link}" class="project-link" target="_blank">
      <div class="project-link-icon">${element.link.icon}</div>
      <span>View the Arcane Repository</span>
    </a>`;
    projectsGridContainer.appendChild(projectCard);
  });

  timelines.toReversed().forEach(element => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    timelineItem.innerHTML = `
    <div class="timeline-content">
      <div class="timeline-year">${element.year}</div>
      <h3 class="timeline-title">${element.title}</h3>
      <p>${element.desc}</p>
      <p class="timeline-detailled-desc">${element.detailledDesc}</p>
    </div>
    `

    TimelinesContainer.appendChild(timelineItem);

    timelineItem.addEventListener("click", () => {
      // Remove "active" from all timeline items first
      document.querySelectorAll('.timeline-item.active').forEach(item => {
        if (!timelineItem.classList.contains('active')) {
          item.classList.remove('active');
        }
      });

      // Activate the clicked item
      timelineItem.classList.toggle('active');
    });
  });
});