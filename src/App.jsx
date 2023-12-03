import './App.css'
import PropsDemo from './components/basic/PropsDemo'


const data = {
  id: 1,
  name: "Ram",
  phoneNumber: "9892349--"
}

function App() {

  return (
    /**
     * <> React  fragment
     * </>
     * React jsx element
     */
    <>
      <PropsDemo data={data} />
    </>
  )
}

export default App
