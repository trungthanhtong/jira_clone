import React from "react";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik } from "formik";
import * as Yup from 'yup'
import {connect} from 'react-redux'
import { signInAction } from "../../redux/actions/UserActions";

function Login(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <form
            onSubmit={handleSubmit}
            className="container text-center d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
        >
            <div className="w-75">
                <h3 className="display-4">Login</h3>
                <div className="mt-2">
                    <Input
                        name="email"
                        onChange={handleChange}
                        size="large"
                        placeholder="Enter your user name"
                        prefix={<UserOutlined />}
                    />
                    {touched.email ? <p className="text-danger">{errors.email}</p> : ''}
                </div>
                <div className="mt-2">
                    <Input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        size="large"
                        placeholder="Password"
                        prefix={<LockOutlined />}
                    />
                    {touched.password ? <p className="text-danger">{errors.password}</p> : ''}
                </div>
                <div className="mt-4">
                    <Button
                        htmlType="submit"
                        style={{
                            width: "100%",
                            backgroundColor: "rgb(102,117,223",
                            color: "white",
                        }}
                        size="large"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </form>
    );
}

const LoginWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    // validate: values => {
    //     const errors = {};
    //     if (!values.name) {
    //         errors.name = 'Required';
    //     }
    //     return errors
    // },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string().required('Password is required').min(6, 'Password requires 6 characters').max(32, 'Password cannot exceed 32 characters')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 1000)
        props.dispatch(signInAction(values.email, values.password));
    },
    displayName: "Login",
})(Login);

export default connect()(LoginWithFormik);
