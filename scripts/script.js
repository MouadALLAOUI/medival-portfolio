import timelines from "../content/timelines.js";
import { closeImage } from "./viewimage.js";

const TimelinesContainer = document.querySelector('.timeline');
const imageViewerClose = document.getElementById('image-viewer-close');

document.addEventListener('DOMContentLoaded', () => {

  imageViewerClose.addEventListener("click", e => closeImage());

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