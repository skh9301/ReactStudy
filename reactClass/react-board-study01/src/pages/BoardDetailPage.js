import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();
    
    const [pass, setPass] = useState("");
    const handlePassChange = e => {
        setPass(e.target.value);
    }

    const handleBtnClick = async (e) => {
        // 수정하기 버튼 또는 삭제하기 버튼이 클릭되었는지 판단
        const isUpdate = e.target.id =="detailUpdate";

        //비밀번호가 입력이 안되었을때
        if(pass.length==0){
            alert(`게시글을 ${isUpdate ? "수정": "삭제"}하려면 비밀번호를 입력하세요`);
            return;
        }
        //비밀번호가 입력이 되었을때
        // 수정버튼 클릭
        if(isUpdate){
           //axios를 이용해서 서버로 요청을 보내고
        //응답이 false 면 비밀번호가 틀리다고 안내 true 면- 수정폼으로 보냄
        await axios.get(`http://localhost:3010/update/${no}/${pass}`)
            .then(res =>{
                console.log(res);
                if(!res.data.result){
                    alert("비밀번호가 틀립니다.");
                    return;
                }
                // 비밀번호가 맞으면  수정폼으로 이동
                navigate(`/boardUpdate?no=${no}`)
            })
            .catch(err=>{
                console.log("err: ",err);
            })
        }else{// 삭제버튼 클릭
         //axios를 이용해서 서버로 요청을 보내고
        //응답이 false 면 비밀번호가 틀리다고 안내 true 면- 게시글리스트 폼으로 보냄
            await axios.post(`http://localhost:3010/delete`,{no:no,pass:pass})
             .then(res=>{
                console.log(res)
                if(!res.data.result){
                    alert("비밀번호가 틀립니다.");
                    return;
                }
                navigate("/boardList",{replace: true});
             })
             .catch(err =>{
                console.log("err :",err);
             })
        }
    }

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
												<input className="form-control" type="password" name="pass" id="pass" onChange={handlePassChange} value={pass}/>
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
							<input className="btn btn-warning" type="button" id="detailUpdate" value="수정하기" onClick={handleBtnClick}/>
							&nbsp;&nbsp;<input className="btn btn-danger"  type="button" id="detailDelete" value="삭제하기"  onClick={handleBtnClick}/>			
							&nbsp;&nbsp;<Link className="btn btn-primary" to="/boardList">목록보기</Link>					
						</div>
					</div>
        </div>
    </div>
    )
    }