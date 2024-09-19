import React from 'react'

export default function Note (props) {
  return (
    <div className='note_body'>
      <div>{props.note}</div>
      <div className='note_footer'>
        <div className='date'>{props.date}</div>
        <button className='del button' onClick={() => props.handledelnotes(props.id)}>
          del
        </button>
      </div>
    </div>
  )
}
