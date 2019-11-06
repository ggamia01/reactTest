import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));

};

class Counter extends Component{
    /*state : 컴포넌트 내부에서 선언. 내부에서 값을 변경할 수 있음(cf.porps)) 
              class fields 문법을 사용해서 정의 -- 편의성 위해..
    */
    state = {
        number: 0,
        error: false
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount(deprecated)');
    }

    componentDidMount(){
        // 외부 라이브러리 연동 : D3, masonry, etc..
        // 컴포넌트에서 필요한 데이터 요청 : Ajax, GraphQL, etc..
        // DOM 에 관련된 작업 : 스크롤 설정, 크기 읽어오기 등 
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
        //5의 배수라면 리렌더링 하지 않음
        //Virutal DOM이 불필요한 리렌더링하는 것을 방지하기 위해 사용.
        //false를 반환할 경우 해당 조건에서는 render함수를 호출하지 않음.
        console.log('shouldComponentUpdatae');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        //shouldComponetUpdate에서 true를 반환했을때만 호출됨.
        //주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업을 함.
        //v16.3이후 deprecate ==> getSnapshotBeforeUpdate로 대체.
        console.log('componetWillUpdate');
    }

    componentDidUpdate(preProps, preState){
        //컴포넌트에서 render()를 호출하고 난 다음에 발생.
        //이 시점에선 this.props와 this.state가 바뀌어 있음.
        //파라미터를 통해 이전값인 preProps, preState를 조회할 수 있음.
        //getSnapshotBeforeUpdate에서 반환한 값은 세번째로 받아옴.
        console.log('componentDidUpdate');
    }

    /*method */
    handleIncrease = () => {    /*화살표 함수 형태로 하면 함수가 버튼의 클릭이벤트로 전달되는 과정에서 "this"와 연결이 끊어지지 않음 */
        /* this.setState({        /state에 있는 값을 바꾸기 위해 필수. 객체로 전달되는 값만 업데이트해줌./ 
            number: this.state.number + 1
        }); */
        const {number} = this.state;
        this.setState({ 
            number: number+1
        })
    }

    handleDecrease = () => {
       /* this.setState({
            number: this.state.number - 1
        }); */
        /* this.setState({
            (state) => ({
                number:state.number -1
            })
        })
        */
        this.setState(
            ({number}) => ({    /*setState에 객체 대신 함수전달 */
                number:number-1
            })
        );
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    render(){
        if(this.state.error) return (<h1>에러발생!</h1>);

        return(
            <div>
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                { this.state.number === 4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;