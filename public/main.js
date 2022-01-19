const languages = ["進行中の作業...","Trabajo en progreso...","Work in progress..."]
var elemento = document.getElementById('titulo')
let counter = 0
let now = new Date()

const change_text = () => {
  elemento.textContent = languages[counter]
  counter++
  if(counter === 3) {counter = 0}
}

if(now.getHours() < 19){
  elemento.textContent = languages[2]
  setInterval(change_text, 1500)
} else {
  document.getElementById('gif').setAttribute('src','./img/Night.gif')
  document.getElementById('gif_box').style.width = "100%"
}