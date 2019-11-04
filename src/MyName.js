import React, {Component} from 'react'

/*클래스형 컴포넌트 */
class MyName extends Component {
    /*props의 기본값 설정(만약 App.js에서 MyName 컴포넌트를 부를 때 name값을 생략하면 "기본이름"이 나타남.)*/
    static defaultProps ={
        name: '기본이름'
    }
    render(){   /*클래스형컴포넌트에서는 필수 */
        return (
            <div>
                {/*props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값.
                    자식컴포넌트에서는 props를 받아오기만 하고 받아온 prots를 직접 수정할 수 없음. */}
                안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        );
    }
}

export default MyName; /*작성된 컴포넌트를 다른곳에서 불러 사용할 수 있도록 내보내기를 해줌 */