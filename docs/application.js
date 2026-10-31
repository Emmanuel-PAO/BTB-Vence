(() => {
  'use strict';
  const contacts = window.BTB_CONTACTS || {};
  document.querySelectorAll('[data-contact]').forEach(link => {
    const value = contacts[link.dataset.contact];
    if (typeof value !== 'string' || !value.trim()) return;
    try { const url = new URL(value); if (url.protocol === 'https:') link.href = url.href; }
    catch { /* Conserver le lien de secours du HTML. */ }
  });
})();
