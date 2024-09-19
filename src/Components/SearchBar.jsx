import React, { useState } from 'react'

export default function SearchBar (props) {

  return (
    <div className='header'>
      <h1> Note App</h1>
      <input
        type='text'
        placeholder='Search for your note'
        onChange={(e) => {props.setSearchText(e.target.value)}}
      />
    </div>
  )
}
