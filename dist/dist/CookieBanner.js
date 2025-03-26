// Einfache JS-Version (kein React nötig!)
class CookieBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 16px;
        background: white;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        text-align: center;
        z-index: 1000;
      ">
        <p>Wir verwenden Cookies 🍪</p>
        <button id="accept-cookies" style="margin-right: 8px;">Akzeptieren</button>
        <button id="decline-cookies">Ablehnen</button>
      </div>
    `;

    this.querySelector('#accept-cookies').addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      this.style.display = 'none';
    });

    this.querySelector('#decline-cookies').addEventListener('click', () => {
      this.style.display = 'none';
    });

    if (localStorage.getItem('cookieConsent')) {
      this.style.display = 'none';
    }
  }
}

customElements.define('cookie-banner', CookieBanner);
