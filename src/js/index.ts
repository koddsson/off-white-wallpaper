const params = new URLSearchParams(window.location.search)
const texts = params.getAll('text')

let text = 'Inspirational Quote'

if (texts.length > 0) {
  text = texts[Math.floor(Math.random() * texts.length)]
}

const h1 = document.querySelector<HTMLElement>('h1')
if (h1) {
  h1.textContent = `"${text}"`
}

export {}
