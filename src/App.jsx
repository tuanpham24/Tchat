
import Sidebar from "./components/layout/sidebar/Sidebat"

export default function App(){

  return(
    <>
      <div id="app-container" className="flex-container">
        <Sidebar/>
        <div id="main-content">
          <h1>content</h1>
        </div>
      </div>
    </>
  )
}