document.documentElement.classList.add('js-enabled');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeKey = 'portfolio-theme';
let savedTheme;
try { savedTheme = localStorage.getItem(themeKey); } catch { /* Storage can be disabled. */ }
const applyTheme = (dark) => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.textContent = dark ? 'Light mode' : 'Dark mode';
  }
};
applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
themeToggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  applyTheme(dark);
  try { localStorage.setItem(themeKey, dark ? 'dark' : 'light'); } catch { /* Theme still works without storage. */ }
});
const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#primary-navigation');
const closeMenu = (restoreFocus = false) => {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
  if (restoreFocus) menuButton?.focus();
};
menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close menu' : 'Menu';
});
navigation?.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  document.querySelector(link.hash)?.focus({preventScroll:true});
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('is-open')) closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.topbar')) closeMenu();
});
matchMedia('(min-width: 701px)').addEventListener('change', () => closeMenu());
const previewDialog = document.querySelector('#screenshot-dialog');
const previewImage = document.querySelector('#screenshot-image');
const previewTitle = document.querySelector('#screenshot-title');
let previewTrigger;
document.querySelectorAll('[data-preview]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!previewDialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    previewTrigger = link;
    previewImage.src = link.href;
    previewImage.alt = link.querySelector('img').alt;
    previewTitle.textContent = previewImage.alt;
    previewDialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
previewDialog?.addEventListener('close', () => {
  document.body.style.overflow = '';
  previewTrigger?.focus();
});
previewDialog?.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    previewDialog.querySelector('button').focus();
  }
});
previewDialog?.addEventListener('click', (event) => {
  if (event.target !== previewDialog) return;
  const rect = previewDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) previewDialog.close();
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
