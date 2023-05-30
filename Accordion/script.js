const accordion_1_Btn = Array.from(document.getElementsByClassName('accordion-1-btn'));

accordion_1_Btn.forEach((accButton) => {
  accButton.addEventListener('click', () => {
    togglePanel(accButton, true);
  });
  accButton.addEventListener('keyup', ({ key }) => {
    key === 'Enter' || key === ' ' ? togglePanel(accButton, true) : '';
  });
});

function togglePanel(accButton, closeCurrentOpen) {
  let currentOpenPanel = document.getElementsByClassName('open')[0];
  const targetPanelId = accButton.getAttribute('aria-controls');
  const targetPanel = document.getElementById(targetPanelId);
  const isOpen = targetPanel.classList.contains('open');
  const panelContent = targetPanel.children[1];

  // if true close last opened panel if one is open
  currentOpenPanel && closeCurrentOpen ? currentOpenPanel.classList.remove('open') : '';
  targetPanel.classList.toggle('open');
  accButton.setAttribute('aria-expanded', !isOpen);
  panelContent.setAttribute('aria-hidden', isOpen);
}
