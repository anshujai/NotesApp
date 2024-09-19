import { useEffect, useState } from 'react'
import Notes_List from './Components/Notes_List'
import { nanoid } from 'nanoid'
import SearchBar from './Components/SearchBar'

// import './App.css'

function App () {
  const [mynotes, setmynotes] = useState([])

  const delnote = id => {
    const newnote = mynotes.filter(note => note.id !== id)
    // console.log(id)
    setmynotes(newnote)
  }
  useEffect(() => {
    localStorage.setItem('react-notes-app', JSON.stringify(mynotes))
  }, [mynotes])

  useEffect(() => {
    const savednotes = JSON.parse(localStorage.getItem('react-notes-app'))
    if (savednotes) {
      setmynotes(savednotes)
    }
  }, [])

  const addnote = text => {
    const date = new Date()
    const newnote = {
      note: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newnotes = [...mynotes, newnote]
    setmynotes(newnotes)
  }

  const [searchText, setSearchText] = useState('')
  return (
    <div className='container'>
      <SearchBar setSearchText={setSearchText} />
      <hr />
      <Notes_List
        mynotes={mynotes.filter(note =>
          note.note.toLowerCase().includes(searchText)
        )}
        handleaddnotes={addnote}
        handledelnotes={delnote}
      />
    </div>
  )
}

export default App
