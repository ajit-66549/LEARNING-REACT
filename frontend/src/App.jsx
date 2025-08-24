
import './App.css'
import MovieCard from './components/MovieCard'


function App() {
  return (
    <>
    <MovieCard movie={{title: "Comedy", release_date: "2024"}} />
    <MovieCard movie={{title: "Action", release_date: "2025"}} />
    </>
  )
}

export default App
