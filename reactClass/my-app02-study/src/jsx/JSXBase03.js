export function ElememtProperty01(props){
    return(
        <div className="rimary">
            <h3>엘리먼트의 속성은 {props.title}사용</h3>

        {/* label 태그의 for 속성은 for 키워드와 중복되어 JSX에서 htmlFor를 사용함 */}
            <label htmlFor="id">아이디 :</label>
            <input type="text" id="id" name="id"/>
        </div>
    )
}

export function ElememtProperty02(props){
    const style= {
        fontSize: '20px',
        backgroundColor:'red',
        width: '300px',
        textAlign:'center'
    }
    return (
        <>
            <p style={style}>{props.msg}</p>
        </>
    )
}