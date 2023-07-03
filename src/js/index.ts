const params = new URLSearchParams(window.location.search)
const texts = params.getAll('text')

// eslint-disable-next-line i18n-text/no-en
let text = 'Inspirational Quote'

if (texts.length > 0) {
  text = texts[Math.floor(Math.random() * texts.length)]
}

const h1 = document.querySelector<HTMLElement>('h1')!
h1.textContent = `"${text}"`

export {}
