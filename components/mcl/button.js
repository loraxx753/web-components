let shadow = document.createElement('body').attachShadow({ mode: 'open' })

class Button extends HTMLElement {
  constructor () {
    super()
    // <mcl-button>
    let link = document.createElement('button')
    // <mcl-button {link} /> @bool
    if (this.getAttributeNode('link')) {
      link = document.createElement('a')
      link.href = '#'
    }

    // Add yo' classes
    link.classList.add('icl-Button')
    if (this.getAttributeNode('secondary')) {
      link.classList.add('icl-Button--secondary')
    } else {
      link.classList.add('icl-Button--primary')
    }
    if (this.classList.length) link.classList.add(this.classList)

    // <mcl-button>{content}</mcl-button> @string
    link.textContent = this.textContent

    this.parentElement.replaceChild(link, this)
  }
}

customElements.define('mcl-button', Button)
