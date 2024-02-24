import React from 'react'

const Input_Field = (props) => {
  return (
    <div>
      <input {...props} className='w-full px-4 py-2 border-gray-200 border rounded-md focus:outline-primary_color'/>
    </div>
  )
}

export {Input_Field}
