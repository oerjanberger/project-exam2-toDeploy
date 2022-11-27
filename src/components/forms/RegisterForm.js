import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";
import { Alert } from "react-bootstrap";

let emailRegex = new RegExp("[a-z0-9]+@((stud.noroff|noroff)\.no)");

const schema = yup.object().shape({
    name: yup.string().required("Please enter your username"),
    email: yup.string().trim().required("Please enter a valid Noroff student email").matches(emailRegex, "Email is not valid, please enter a valid Noroff student email"),
    password: yup.string().trim().required("Please enter your password").min(8, "Password must be at least 8 characters"),
});

export default function RegisterForm() {
    const [registerError, setRegisterError] = useState(null);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        const registerUrl = BASE_URL + "social/auth/register";
        setRegisterError(null);

        try {
            await axios.post(registerUrl, data);
            setRegisterError(<Alert variant="success" > Your user was successfully registered </Alert >);
            setTimeout(() => {
                navigate(`/login`, { replace: true });
            }, 1000);
        } catch (error) {
            console.log(error);
            setRegisterError("Unfortunately we were not able to register you as a user, we are working on fixing the error. In the mean time make sure all fields are correct");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {registerError && <FormError>{registerError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control {...register("name")} type="text" placeholder="Enter you name" className="primary__input" />
                <Form.Text className="text-muted">
                    Use _underscore to separate name, do not use .period
                </Form.Text>
                {errors.name && <FormError>{errors.name.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control {...register("email")} type="email" placeholder="Enter a Noroff student email" className="primary__input" />
                <Form.Text className="text-muted">
                    Enter a valid student email
                </Form.Text>
                {errors.email && <FormError>{errors.email.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Enter Password" className="primary__input" />
                <Form.Text className="text-muted">
                    Choose a strong password, must be above 8 characters
                </Form.Text>
                {errors.password && <FormError>{errors.password.message}</FormError>}
            </Form.Group>
            <button className="primary__btn form__btn">Register</button>
        </Form>
    );
};