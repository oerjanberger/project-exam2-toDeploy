import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

// form for a logged in user to be able to edit an existing post or delete the post
export default function EditPost(props) {
    const [editError, setEditError] = useState(null);
    const [postTitle, setPostTitle] = useState(props.title);
    const [postBody, setPostBody] = useState(props.body);
    const [postImage, setPostImage] = useState(props.image);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

    async function onSubmit(data) {
        const editUrl = BASE_URL + `social/posts/${props.id}`;
        setEditError(null);

        try {
            await http.put(editUrl, data);
            setEditError(<Alert variant="success" > The post was successfully edited</Alert >);
            setTimeout(() => {
                navigate(0);
            }, 1000);
        } catch (error) {
            console.log(error);
            setEditError("We were unable to edit your post, please try again later");
        };
    };

    async function deletePost() {
        const deleteUrl = BASE_URL + `social/posts/${props.id}`;

        try {
            await http.delete(deleteUrl);
            setEditError(<Alert variant="success" > The post was successfully deleted</Alert >);
            setTimeout(() => {
                navigate(0);
            }, 1000);
        } catch (error) {
            console.log(error);
            setEditError("We were unable to delete your post, please try again later");
        };
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="form__editPost">
            {editError && <FormError>{editError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control {...register("title")} type="text" className="primary__input" id="form__editPost__title" value={postTitle} onChange={event => setPostTitle(event.target.value)} />
                {errors.title && <FormError>{errors.title.message}</FormError>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control {...register("body")} as="textarea" className="primary__input createPost__textarea" id="form__editPost__body" value={postBody} onChange={event => setPostBody(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control {...register("media")} type="url" className="primary__input" placeholder="image url" id="form__editPost__image" value={postImage} onChange={event => setPostImage(event.target.value)} />
                <Form.Text>Must be a url directly to the image</Form.Text>
            </Form.Group>
            <div className="editPost__btnContainer">
                <button className="primary__btn form__btn">Update Post</button>
                <button type="button" className="primary__btn secondary__btn form__btn" id="delete__btn" onClick={deletePost}>Delete Post</button>
            </div>
        </Form>
    );
};