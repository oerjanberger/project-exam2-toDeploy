import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";
import { Alert } from "react-bootstrap";

const schema = yup.object().shape({
    title: yup.string().required("Please add a title to your post"),
});

//Form for a logged in user to create a post
export default function CreatePost() {
    const [createError, setCreateError] = useState(null);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

    async function onSubmit(data) {
        const createUrl = BASE_URL + `social/posts`
        setCreateError(null);

        try {
            await http.post(createUrl, data);
            setCreateError(<Alert variant="success" > Post Created</Alert >);
            setTimeout(() => {
                navigate(0);
            }, 1000);

        } catch (error) {
            console.log(error);
            setCreateError("We were unable to create your post, please try again later");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="form__createPost">
            {createError && <FormError>{createError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control {...register("title")} type="text" placeholder="What are you reacting to today?" className="primary__input" />
                {errors.title && <FormError>{errors.title.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control {...register("body")} as="textarea" className="primary__input createPost__textarea" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control {...register("media")} type="url" className="primary__input" placeholder="image url" />
                <Form.Text>Must be a url directly to the image</Form.Text>
            </Form.Group>
            <button className="primary__btn form__btn">Create Post</button>
        </Form>
    );
};