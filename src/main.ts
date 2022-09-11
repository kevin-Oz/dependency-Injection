import './style.css'
import { randomDog } from './Services/RandomDog.service';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <div> ${randomDog.status}</div>
  <a href="https://vitejs.dev" target="_blank"></a>
  <img src="${randomDog.message}" class="logo" alt="Vite logo" />
  </div>
`