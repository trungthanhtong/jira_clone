import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined} from "@ant-design/icons";
import {withFormik} from 'formik';

function Login(props) {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (userLogin.username === "thanh" && userLogin.password === "tong") {
            // Back to previous page
            // props.history.goBack();

            // Back to some page
            props.history.push("/home");
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
        } else {
            alert("Login failed");
            return;
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="container text-center d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
        >
            <div className="w-75">
                <h3 className="display-4">Login</h3>
                <div className="mt-2">
                    <Input
                        size="large"
                        placeholder="Enter your user name"
                        prefix={<UserOutlined />}
                    />
                </div>
                <div className="mt-2">
                    <Input
                        type="password"
                        size="large"
                        placeholder="Password"
                        prefix={<LockOutlined />}
                    />
                </div>
                <div className="mt-4">
                    <Button style={{width:'100%', backgroundColor:'rgb(102,117,223', color:'white'}} size="large">Login</Button>
                </div>
                <Prompt
                    when={true}
                    message={(location) => {
                        return "Are you sure want to leave?";
                    }}
                />
            </div>
        </form>
    );
}

const LoginWithFormik = withFormik({
    mapPropsToValues: () => ({name: ''}),
    validate: values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        return errors
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000)
    },
    displayName: 'BasicForm',
})(Login)

export default LoginWithFormik;
