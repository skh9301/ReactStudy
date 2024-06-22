import {useState } from 'react'

export default function TestForm01(){
  
    const[values,setValues] = useState({
        name:"",
        birth:"",
        grade:"",
        tellMe:""
    });


    const handleChange= (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const [errors,setErrors]=useState({
        name:"",
        birth:"",
        grade:"",
        tellMe:""
    })

    const validate =() =>{

        const errors = {
            name:"",
            birth:"",
            grade:"",
            tellMe:""
        }

        if(!values.name){
            errors.name="이름을 입력하세요";
        }
        if(!values.birth){
            errors.birth="생일을 입력하세요";
        }
        if(!values.grade){
            errors.grade="학년을 입력하세요";
        }
        if(!values.tellMe){
            errors. tellMe="자기소개를 입력하세요";
        }
        return errors;
       
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        const errors = validate();
        setErrors(errors);

        //["이름을 입력하세요","","",""]
        if( Object.values(errors).some(v=>v)){
            console.log(errors)
            return false;
        } //이중에 한개라도 ture면 반환한다.
    

        console.log("폼 전송 완료");
    }
  
    
    return(
        <div className="row my-5" id="global-content">
        <div className="col-10 offset-1">
        <form onSubmit={handleSubmit}>
            <div>
               이름: <input type="text" name="name" className='form-control' onChange={handleChange}/>
               {errors.name && <spna className="text-danger">{errors.name}</spna>}
            </div>
            <div>
               생일: <input type="date" name="birth"className='form-control'  onChange={handleChange}/>
               {errors.birth}
            </div>
            <div>
                학년:
                <select name="grade"className='form-select'  onChange={handleChange}>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>

                </select>
               {values.grade}
            </div>
            <div>
                자기소개:
                <textarea name="tellMe"className='form-control'  onChange={handleChange} />
                
            </div>
            <input type="submit" value="등록하기"/>
        </form>
        </div>
        </div>
    )
}