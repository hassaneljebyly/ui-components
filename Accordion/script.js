const accordionHeading = Array.from(document.getElementsByClassName('accordion__heading'));
const accordionControlsBtn = document.getElementsByClassName('accordion__controls-btn')[0];

let isOpen = false;

accordionHeading.forEach((panelButton) => {
  panelButton.addEventListener('click', () => {
    isOpen = !isOpen;
    const panelToOpen = document.getElementById(panelButton.getAttribute('aria-controls'));
    togglePanel(panelToOpen);
    setAccordionAttr(panelButton, panelToOpen, isOpen);
  });
  panelButton.addEventListener('keyup', (e) => {
    e.key === 'Enter' ? openPanel(panelButton) : '';
  });
});

function togglePanel(panel) {
  panel.classList.toggle('open');
}

function setAccordionAttr(panelButton, panelToOpen, isOpen) {
  const targetedPanelContent = document.querySelector(`#${panelToOpen.getAttribute('id')} > .accordion__content`);
  panelButton.setAttribute('aria-expanded', isOpen);
  targetedPanelContent.setAttribute('aria-hidden', isOpen);
}
