import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";
import { Alert } from "react-bootstrap";

const schema = yup.object().shape({
    banner: yup.string().url("Please add valid url as the banner image"),
    avatar: yup.string().url("Please add valid url as the avatar image"),
});

export default function EditImages(props) {
    const [editImagesError, setEditImagesError] = useState(null);
    const [avatar, setAvatar] = useState(props.avatar);
    const [banner, setBanner] = useState(props.banner);
    const [auth] = useContext(AuthContext)

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const http = useAxios();

    async function onSubmit(data) {
        const editImagesUrl = BASE_URL + `social/profiles/${props.name}/media`;
        setEditImagesError(null);

        try {
            await http.put(editImagesUrl, data);
            auth.avatar = data.avatar;
            setEditImagesError(<Alert variant="success" > Your image was updated</Alert >);
            setTimeout(() => {
                navigate(0);
            }, 1000);

        } catch (error) {
            console.log(error);
            setEditImagesError("We were unable to edit your images, please try again later");
        };
    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="form__editPost">
            {editImagesError && <FormError>{editImagesError}</FormError>}
            <Form.Group className="mb-3">
                <Form.Label>Banner</Form.Label>
                <Form.Control {...register("banner")} type="url" className="primary__input" value={banner === null || banner === "" ? "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" : banner} onChange={event => setBanner(event.target.value)} />
                {errors.banner && <FormError>{errors.banner.message}</FormError>}
                <Form.Text>Must be a url directly to the image</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Avatar</Form.Label>
                <Form.Control {...register("avatar")} type="url" className="primary__input" value={avatar === null || avatar === "" ? "https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" : avatar} onChange={event => setAvatar(event.target.value)} />
                {errors.avatar && <FormError>{errors.avatar.message}</FormError>}
                <Form.Text>Must be a url directly to the image</Form.Text>
            </Form.Group>
            <button className="primary__btn form__btn">Update Images</button>
        </Form>
    );
};