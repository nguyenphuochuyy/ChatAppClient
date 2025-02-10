import "./login.scss"
import logo from "../../styles/images/logo.png"
import { FaCircleUser , FaLock  } from "react-icons/fa6";
import { Checkbox , Button} from 'antd';
const Login = ()=>{
   
    // onchange remember me checkbox
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
    return(
        <>
            <div className="login">



                <div className="login__top">
                    <div className="login__top--logo">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="login__top--title">
                        <h3>Đăng nhập</h3>
                        <p>Đăng nhập để tiếp tục với Chatvia</p>
                    </div>
                </div>



                <div className="login__center">
                             {/* username block */}
                        <div className="login__center--username">
                            <p>Tài khoản</p>

                            <div style={{display:'flex' , marginTop : "10px" , justifyContent : 'space-between'  , alignItems : 'center'}}>
                            <FaCircleUser style={{fontSize : 25}} />
                                <input placeholder="admin@gmail.com" id="username" ></input>
                            </div>

                        </div>

                            {/* password block */}
                        <div className="login__center--password">
                            <div style={{display:'flex' , justifyContent : 'space-between'}}>
                            <p>Mật khẩu</p>
                            <p>
                                <a href="/">Forgot password ? </a>
                            </p>
                            </div>
                          
                            <div  style={{display:'flex' , marginTop : "10px" , justifyContent : 'space-between'  , alignItems : 'center'}}>
                                <p><FaLock></FaLock></p>
                                <input placeholder="*******"></input>
                            </div>
                        </div>
                            {/* Remember me block */}
                        <div className="login__center--rememberme">

                         <Checkbox onChange={onChange}>Checkbox</Checkbox>

                        </div> 
                        <Button type="primary" style={{width : "200px" , marginTop : '15px' , textAlign:'center'}} >Đăng nhập</Button>
                        <p>Bạn chưa có tài khoản ? <a href="/signup">Tạo mới </a></p>




                </div>
                {/* block tạo mới và bản quyền */}
           
                <div className="login__bottom">
                    <p>© 2025 Chatvia</p>
                </div>
            </div>
        </>
    )
}
export default Login