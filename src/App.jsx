import { useState } from 'react'
function App() {
  const n = 10;
  const jam = 9;
  const nama = "Ando"
  return (
    <>
      <div className='kantin'>
        <style>
        
        </style>
        <div>
          <h2>Kantin {nama}</h2>
          <p>{jam < 12? 'Selamat Pagi':'Selamat Siang'}</p>
          <p>Saldo awal kartu kantin: Rp  {n * 1000}</p>
        </div>
        <button disabled
          type="button"
          className="btnBayar"
        >
          Bayar
        </button>
      </div>
    </>
  )
}

export default App
