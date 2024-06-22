function BoardListTable({bList}){
    return (
        <table className="table">
        <thead>
          <tr className="table table-dark">
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {/*  */}
          {
            bList.length>0 ? bList.map((board)=>(
              <tr  key={board.no}>
                <td>{board.no}</td>
                <td>{board.title}</td>
                <td>{board.writer}</td>
                <td>{board.reg_date}</td>
                <td>{board.read_count}</td>
              </tr>
            )) :
            (
              <tr>
                <td colSpan="5" className="text-center">게시 글이 존재하지않음</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
}

export default BoardListTable;