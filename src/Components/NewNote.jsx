import React, { useState } from 'react'

export default function NewNote (props) {
  const [newnote, setnewnote] = useState('')

  const Character = 200

  const newnotehandler = e => {
    if (Character - e.target.value.length >= 0) setnewnote(e.target.value)
  }

  const savehandler = () => {
    props.handleaddnotes(newnote)
    setnewnote('')
  }
  return (
    <div className='new note_body'>
      <textarea
        type='area'
        placeholder='Type your note...'
        className='inputnote'
        value={newnote}
        onChange={newnotehandler}
        rows={'8'}
        cols={'10'}
      />
      <div className='note_footer'>
        <div className='remaining'>{Character - newnote.length} Remaining</div>
        <button className='save button' onClick={savehandler}>
          save
        </button>
      </div>
    </div>
  )
}
