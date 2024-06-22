import Child from "./ChildComponent"

const ParentComponent = (props) =>{
    return (
        <div className="parent">
            <h2>여기는 부모 컴포넌트</h2>
            <div>
                <h3>{props.title}</h3>
                <ul>
                    <li><Child name="FirstChild"/></li>
                    <li><Child name="SecondChild"/></li>
                </ul>
            </div>
        </div>
    )
}

export default ParentComponent;