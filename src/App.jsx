import { useState } from 'react'

function App() {
  const [color, setColor] = useState('red')

  return (
    <div
      className="w-full h-screen  "
      style={{ backgroundColor: color }}
    >
          <button
            onClick={() => setColor('red')}
          style={{  backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
          style={{  backgroundColor: 'green' }}
           
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
          
            style={{  backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('olive')}
           
            style={{ backgroundColor: 'olive' }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor('gray')}
           
            style={{ backgroundColor: 'gray' }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor('yellow')}
          
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('pink')}
           
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor('purple')}
            
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('lavender')}
           
            style={{ backgroundColor: 'lavender' }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor('white')}
           
            style={{ backgroundColor: 'white' }}
          >
            White
          </button>
          <button
            onClick={() => setColor('black')}
         
            style={{ backgroundColor: 'black' ,color : 'wh'}}
          >
            Black
          </button>
        </div>
    
    
  )
}

export default App