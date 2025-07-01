import './index.css'
import Header from './layout/Header'
import Main from './pages/main'
import Footer from './layout/footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='body_wrap'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
