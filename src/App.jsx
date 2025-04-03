import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
function App() {


  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col bg-blue-200'>
      <header className='w-full h-20 flex justify-center '>
        <Nav/>
      </header>
      <main className='w-full  border 1px solid '>  
        <Home/>
      </main>
      <footer className='w-full h-20 border 1px solid '>
       footer
      </footer>
    </div>
  )
}

export default App
