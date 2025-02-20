import './App.css'

import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes'

function App() {

  return (
    <>
      <RecoilRoot>
        <RouterProvider router={Routes}/>
      </RecoilRoot>
    </>
  )
}

export default App
