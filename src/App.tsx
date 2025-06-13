import { useState } from 'react'
import './index.css'
import Header from './layout/Header'
import Main from './pages/main'
import Footer from './layout/footer'


function App() {
  const [] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className='body_wrap'>
          <div>
            <Header />
            <Main />
            <Footer />
        </div>
        </div>

    </div>
    </>
  )
}

export default App
