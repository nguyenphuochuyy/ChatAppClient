import "./signup.scss"
import logo from "../../styles/images/logo.png"
import { Button, Checkbox, Form, Input } from "antd"
const SignUp = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    }
    return (
        <>
            <div className="signup">

                <div className="signup__top">
                    <div className="signup__top--logo">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="signup__top--title">
                        <h3>Đăng nhập</h3>
                        <p>Đăng nhập để tiếp tục với Chatvia</p>
                    </div>
                </div>

                {/* form đăng kí */}
                <div className="signup__form">

                    <Form
                        name="signup"
                        onFinish={onFinish}
                        autoComplete="off"

                    >
                        <Form.Item
                            label="Tài khoản"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tài khoản để tạo mới'
                                }
                            ]}
                        >
                            <Input style={{ marginLeft: 60 }} />

                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu',
                                },
                            ]}
                        >
                            <Input.Password style={{ marginLeft: 60 }} />
                        </Form.Item>


                        <Form.Item
                            label="Xác nhận mật khẩu"
                            name="repassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng xác nhận nhập mật khẩu',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Đăng Kí
                            </Button>
                            <p>Bạn đã có tài khoản ? <a href="/login">Đăng nhập</a></p>
                        </Form.Item>

                    </Form>
                </div>
            </div>


        </>
    )
}
export default SignUp