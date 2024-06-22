import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';



export default function BoardDetailPage() {
    const [searchParams, setSearchParams] = useSearchParams(); // 두번째는 함수가옴
    const no = searchParams.get("no");

    const[board, setBoard] =useState({});
    const getBoard = async()=>{
        const res = await axios.get(`http://localhost:3010/boardDetail?no=${no}`);
        setBoard(res.data);
    }
    useEffect(()=>{
        getBoard();
    },[])

    return (
    <div className="row my-5" id="global-content">
        <div className="col-10 offset-1">
            <div className="row text-center">
                <div className="col">
                    <h2 className="fs-3 fw-bold">게시 글 상세보기</h2>
                </div>
            </div>
            <div className="row my-3">
						<div className="col">
							<table className="table table-bordered" >
								<tbody>					
									<tr>
										<th className="table-secondary">제 목</th>
										<td colSpan="3">{board.title}</td>		
									</tr>
									<tr>
										<th>글쓴이</th>
										<td>{board.write}</td>
										<th>작성일</th>
										<td>{board.reg_date}</td>		
									</tr>
									<tr>		
										<th>비밀번호</th>
										<td>
											<div className="col-sm-8">
												<input className="form-control" type="password" name="pass" id="pass"/>
											</div>
										</td>
										<th>조회수</th>
										<td>{board.read_count}</td>
									</tr>	
									<tr>
										<th>파&nbsp;&nbsp;&nbsp;&nbsp;일</th>
										<td colSpan="3">{board.file1 == null || board.file1 == "" ? "첨부파일이 없음" : <Link to={`/upload/${board.file1}`}>{board.file1}</Link>}										
										</td>		
									</tr>
									<tr>		
										<td colSpan="4" style={{whiteSpace:"pre"}}> 
											<pre>{board.content}</pre>
										</td>
									</tr>	
								</tbody>
							</table>
						</div>
					</div>
					<div className="row my-3">
						<div className="col text-center">
							<input className="btn btn-warning" type="button" id="detailUpdate" value="수정하기"/>
							&nbsp;&nbsp;<input className="btn btn-danger"  type="button" id="detailDelete" value="삭제하기" />			
							&nbsp;&nbsp;<Link className="btn btn-primary" to="/boardList">목록보기</Link>					
						</div>
					</div>
        </div>
    </div>
    )
    }