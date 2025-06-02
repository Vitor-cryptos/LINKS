import './style.css'

// http://localhost:5173?id=123

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `<h1>Olá, usuário ${id}!`