let shadow = document.createElement('body').attachShadow({ mode: 'open' })

class Row extends HTMLElement {
  constructor () {
    super()
    // <mcl-row>
    let link = document.createElement('row')
    console.log(this)
    // <mcl-row {link} /> @bool
    if (this.getAttributeNode('link')) {
      link = document.createElement('a')
      link.href = '#'
      console.log('here')
    }

    // Add yo' classes
    link.classList.add('icl-row')
    if (this.getAttributeNode('secondary')) {
      link.classList.add('icl-row--secondary')
    } else {
      link.classList.add('icl-row--primary')
    }
    if (this.classList.length) link.classList.add(this.classList)

    // <mcl-row>{content}</mcl-row> @string
    link.textContent = this.textContent

    this.parentElement.replaceChild(link, this)
  }
}

customElements.define('mcl-row', Row)
