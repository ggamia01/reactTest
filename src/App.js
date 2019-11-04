import React, {Fragment} from 'react';
import './App.css'; /*style */ 
import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './Counter';

/*var / let / const
  var : ES6에서는 잘 안씀.
  let : 값을 선언한 후 바꿔야할 때
  const : 값을 선언한 후 바꾸지 않을때
*/
const name = 'react';
const value = 1;
const style ={ /*style적용. 객체형태로 작성 */
  backgroundColor : 'black',
  paddig: '16px',
  color: 'white',
  fontSize: '25px'
}
function App() {
  return (
    <Fragment>
        <div>
          {/*JSX 내부에서 자바스크립트 값 사용 */}
          Hello {name}!
        </div>
        <div>
          {/*조건부 렌더링 : 삼항연산자(true,false 각각 보여주는 것이 다를때)) */
            1+1 === 3
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </div>
        <div>
          {/*조건부 렌더링 : and연산자(true일때만 보여주고 false일때는 보여주지 않을때) */
            1+1 === 2 && (<div>맞아요!</div>)
          }
        </div>
        <div>
          {/*복잡한 조건을 작성해야할때(웬만하면 JSX밖에서 로직 작성할것) JSX내부에서 작성할 경우 */
            (function(){
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()     
          }
        </div>
        <div>
          {/*화살표함수 : this, arguments, super개념이 없는 익명함수 */
            (() => {
                  if (value === 1) return (<div>하나</div>);
                  if (value === 2) return (<div>둘</div>);
                  if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        {/*style적용 */}
        <div style={style}>
          안녕하세요!
        </div>
        {/*className : html의 class와 같음. */}
        <div className="App">
          리액트
        </div>
        <MyName name="리액트"/>{/*클래스형컴포넌트..props값은 name="리액트"..태그속성설정처럼 해줌..*/}
        <MyName2 name="react"/>{/*함수형컴포넌트*/}
        <Counter />
    </Fragment> 
  );
}

export default App;
