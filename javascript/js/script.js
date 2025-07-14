class HelloWorldElement extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });
    
    const gradientStart = '#ff0000';
    const gradientEnd = '#00fffb';
    const textSize = 'clamp(4rem, 30vw, 10rem)';
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: ${textSize};
          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          animation: fadeIn 1.5s ease-out;
          position: relative;
          line-height: 1;
          margin: 0;
          padding: 1.6em;
          background: linear-gradient(
            135deg,
            ${gradientStart},
            ${gradientEnd}
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(200px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      </style>
      <slot>HELLO WORLD</slot>
    `;
    console.log('Hello, World!');
  }
}

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorldElement);
}

alert ('Hello, World!');