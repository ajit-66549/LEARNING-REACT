
import './App.css'

function App() {
  return (
    <>
    <Text display_content="Hii.."/>
    <Text display_content="Hello World"/>
    </>
  )
}

function Text({display_content}) {
  return (
    <div>
      <p>{display_content}</p>
    </div>
  )
}

export default App
