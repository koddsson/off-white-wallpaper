const parameters = new URLSearchParams(window.location.search)

const texts = parameters.getAll('text')
const background = parameters.get('background')
const foreground = parameters.get('foreground')

let text = 'Inspirational Quote'

if (texts.length > 0) {
  text = texts[Math.floor(Math.random() * texts.length)]
}

const h1 = document.querySelector<HTMLElement>('h1')
if (h1) {
  h1.textContent = `"${text}"`
}

document.documentElement.style.setProperty('--background', background)
document.documentElement.style.setProperty('--foreground', foreground)

export {}
