document.documentElement.classList.add('js-enabled');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacao-principal');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
  );
  navigation.classList.toggle('is-open', isOpen);
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

const desktopBreakpoint = window.matchMedia('(min-width: 701px)');
desktopBreakpoint.addEventListener('change', (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});