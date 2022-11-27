import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";
import AuthContext from "../context/AuthContext";

const schema = yup.object().shape({
    email: yup.string().trim().required("Please enter a valid Noroff student email"),
    password: yup.string().trim().required("Please enter your password"),
});

export default function LoginForm() {
    const [loginError, setLoginError] = useState(null);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {

        const loginUrl = BASE_URL + "social/auth/login";
        setLoginError(null);

        try {
            const response = await axios.post(loginUrl, data);
            setAuth(response.data)
            navigate("/postList", { replace: true });
        } catch (error) {
            console.log(error);
            setLoginError("Email or password was not correct");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control {...register("email")} type="email" placeholder="Enter your email" className="primary__input" />
                {errors.email && <FormError>{errors.email.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Enter Password" className="primary__input" />
                {errors.password && <FormError>{errors.password.message}</FormError>}
            </Form.Group>
            <button className="primary__btn form__btn">Login</button>
        </Form>
    );
};