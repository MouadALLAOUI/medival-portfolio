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