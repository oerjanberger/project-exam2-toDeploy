import * as unicodeEmoji from 'unicode-emoji';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

// shows emojis in the emoji modal. Adds Emojis to Post id. 
export default function ShowAllEmojis() {
    const [emojis, setEmojis] = useState([]);
    useEffect(() => {
        // categories with emojis that is removed is in the category object
        const omitWhere = { versionAbove: '12.0', category: ['flags', 'symbols', 'travel-places', 'animals-nature'] };
        const allEmojis = unicodeEmoji.getEmojis(omitWhere);
        setEmojis(allEmojis)
    }, []);
    const navigate = useNavigate();
    let { id } = useParams();

    const http = useAxios();

    async function handleClick(value) {
        const reactUrl = `social/posts/${id}/react/${value}`
        try {
            await http.put(reactUrl);
            navigate(0)
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            {emojis.map(function (symbol) {
                const { emoji, description } = symbol;
                return <button type='button' key={emoji} value={emoji} aria-label={description} onClick={(e) => handleClick(e.currentTarget.value)} className="emoji__btn">{emoji}</button>
            })}
        </>
    );
};