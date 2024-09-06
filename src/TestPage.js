import React from 'react'

const TestPage = () => {
    const items = ['Apple', 'Banana', 'Carrot']
  return (
    <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default TestPage