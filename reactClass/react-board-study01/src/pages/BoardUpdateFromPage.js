export default function BoardUpdateFromPage(){

    return(
			<div class="row my-5" id="global-content">
				<div class="col-10 offset-1">
					<form name="checkForm" id="checkForm">
						<input type="hidden" name="no" id="no" />
						<input type="hidden" name="pass" id="rPass" />
					</form>
					<div class="row text-center">
						<div class="col">
							<h2 class="fs-3 fw-bold">게시 글 상세보기</h2>
						</div>
					</div> 
					<div class="row my-3">
						<div class="col">
							<table class="table table-bordered" >
								<tbody>					
									<tr>
										<th class="table-secondary">제 목</th>
										<td colspan="3"></td>		
									</tr>
									<tr>
										<th>글쓴이</th>
										<td></td>
										<th>작성일</th>
										<td></td>		
									</tr>
									<tr>		
										<th>비밀번호</th>
										<td>
											<div class="col-sm-8">
												<input class="form-control" type="password" name="pass" id="pass"/>
											</div>
										</td>
										<th>조회수</th>
										<td></td>
									</tr>	
									<tr>
										<th>파&nbsp;&nbsp;&nbsp;&nbsp;일</th>
										<td colspan="3">										
										</td>		
									</tr>
									<tr>		
										<td colspan="4">
											<pre></pre>
										</td>
									</tr>	
								</tbody>
							</table>
						</div>
					</div>
					<div class="row my-3">
						<div class="col text-center">
							<input class="btn btn-warning" type="button" id="detailUpdate" value="수정하기"/>
							&nbsp;&nbsp;<input class="btn btn-danger"  type="button" id="detailDelete" value="삭제하기" />			
							&nbsp;&nbsp;<input class="btn btn-primary" type="button" value="목록보기"/>						
						</div>
					</div>
				</div>	
			</div>		

    )
}   