import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
    <div>
        <form>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <label>
                Your name is {value}.
            </label>
        </form>
    </div>
  )
}

export default Form