import React from 'react';
import './App.css'

const name = 'react';
const value = 1;
const style ={
  backgroundColor : 'black',
  paddig: '16px',
  color: 'white',
  fontSize: '25px'
}
function App() {
  return (
    <div>
      <div>
        Hello {name}!
      </div>
      <div>
        {
          1+1 === 3
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
      <div>
        {
          1+1 === 2 && (<div>맞아요!</div>)
        }
      </div>
      <div>
        {
          (function(){
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()     
        }
      </div>
      <div>
        {
          (() => {
                if (value === 1) return (<div>하나</div>);
                if (value === 2) return (<div>둘</div>);
                if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
      <div style={style}>
        안녕하세요!
      </div>
      <div className="App">
        리액트
      </div>
    </div>
      
  );
}

export default App;
