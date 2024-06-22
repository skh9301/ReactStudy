import Child from './ChildComponent.js'

function ParentComponent(props){
    return(
    <div classsName="parent">
        <h2>여기는 부모 컴포넌트</h2>
        <div>
            <h3>{props.title}</h3>
            <ul>
                <Child name="FirshChild"/>
                <Child name="dieCh"/>
                <Child name="Obj 나하하하하~~"/>

            </ul>
        </div>
    </div>

    )
}

export default ParentComponent;