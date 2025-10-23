import timelines from "../content/timelines.js";
import { closeImage } from "./viewimage.js";
import showAlert from "./alerts.js"

const TimelinesContainer = document.querySelector('.timeline');
const imageViewerClose = document.getElementById('image-viewer-close');

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});



document.addEventListener('DOMContentLoaded', () => {
  showAlert("Welcome to my palace, hope you find whatever you desire", "royal", 3000);
  showAlert("this portfolio is still under development thank you for your understanding", "chaos", 4000);
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy-btn")) {
    const targetId = e.target.getAttribute("data-target");
    const codeElement = document.getElementById(targetId);
    if (codeElement) {
      navigator.clipboard.writeText(codeElement.textContent).then(() => {
        e.target.textContent = "✅";
        showAlert("Copied to clipboard ✅", "success");
        setTimeout(() => (e.target.textContent = "📋"), 1500);
      });
    }
  }

  // Inline code click-to-copy
  if (e.target.classList.contains("inline-code")) {
    const text = e.target.textContent;
    navigator.clipboard.writeText(text).then(() => {
      e.target.classList.add("copied");
      showAlert(`Copied to clipboard ✅: ${text}`, "success");
      setTimeout(() => e.target.classList.remove("copied"), 1200);
    });
  }
});
