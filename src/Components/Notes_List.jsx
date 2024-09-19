import React from 'react'
import Note from './Note'
import NewNote from './NewNote'

export default function Notes_List(props) {
    

  return (
    <div className='notes_list'>
      {props.mynotes.map((ele ) => (
        <Note note={ele.note} date={ele.date} id = {ele.id}  handledelnotes={props.handledelnotes} />
      ))}
          <NewNote handleaddnotes={props.handleaddnotes}  />
    </div>
  )
}
