import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Component/Countries/Countries'

function App() {
  const [count, setCount] = useState(0)


  const CountriesPromis = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

  return (
    <>
      <div>
        <Suspense fallback={<p>countries comming....</p>}>
          <Countries CountriesPromis={CountriesPromis}></Countries>
        </Suspense>
      </div>
    </>
  )
}

export default App
