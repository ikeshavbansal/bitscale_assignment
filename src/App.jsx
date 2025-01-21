import SideBar from './components/sidebar'
import Header from './components/header'
import Table from './components/table'

function App() {


  return (
    <>
    <Header/>
    <div className="flex h-screen bg-gray-50">
      <SideBar/>
      <div className="flex-1">
        
        <Table/>
      </div>
      </div>
    </>
    
  )
}

export default App
