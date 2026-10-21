
import KartuMenu from './components/KartuMenu';

import Panel from './components/Panel';
function App() {
  const n = 10;
  return (
    <Panel judul = "Menu Hari Ini">
      <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (n * 100) }/>
      <KartuMenu nama="Es Teh Lemon" harga={6000} kategori='Minuman'/>
      <KartuMenu nama="AyamGeprek" harga={12000}/>
    </Panel>
  )
}

export default App
