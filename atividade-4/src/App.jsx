import { useState } from 'react'

import lampada from '/lampada.png'
import genio from '/genio.png'

import './styles/main.scss'

function App() {
  const [isTrue, setIsTrue] = useState(false)

  function mudarImagem() {
    setIsTrue(!isTrue)
  }

  return (
    <>
      <main>
        <h1>&quot;Liberte a magia da programação com a lâmpada de Aladin&quot;</h1>

        <section>
          <img src={!isTrue ? lampada : genio} alt="Lâmpada ou Gênio" />
          <button onClick={mudarImagem}>Clique Aqui</button>
        </section>
      </main>
    </>
  )
}

export default App
