import React from 'react'
import './formInput.css'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
  </div>
  )
}

export default FormInput