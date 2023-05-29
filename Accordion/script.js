const accordion_1_Btn = Array.from(document.getElementsByClassName('accordion-1-btn'));

accordion_1_Btn.forEach((accButton) => {
  accButton.addEventListener('click', () => {
    togglePanel(accButton);
  });
  accButton.addEventListener('keyup', ({ key }) => {
    key === 'Enter' || key === ' ' ? togglePanel(accButton) : '';
  });
});

function togglePanel(accButton) {
  const targetPanelId = accButton.getAttribute('aria-controls');
  const targetPanel = document.getElementById(targetPanelId);
  const isOpen = targetPanel.classList.contains('open');
  const panelContent = targetPanel.children[1];
  targetPanel.classList.toggle('open');
  accButton.setAttribute('aria-expanded', !isOpen);
  panelContent.setAttribute('aria-hidden', isOpen);
}
