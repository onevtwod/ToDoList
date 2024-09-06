import React, { useState } from 'react'

const Priority = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: '', label:'Select an option' },
        { value: 'high', label: 'High' },
        { value: 'mid', label: 'Mid' },
        { value: 'low', label: 'Low' },
    ];

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <div>
        <label htmlFor="dropdown">Choose an option: </label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
    
  )
}

export default Priority