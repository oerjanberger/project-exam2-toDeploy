import { useState, useEffect } from "react";
import Reactions from "./Reactions";

// displays the reactions that is on a post. If no reactions show zero reactions, if reactions show emojis and count
export default function DisplayReactions(props) {
    const [showReactions, setShowReactions] = useState([]);

    useEffect(() => {
        setShowReactions(props.props);
    }, []);

    if (props.props.length === 0) {
        return (
            <>
                <div className="postCard__reactionsContainer" >
                    <p className="number">0</p>
                    <p>Reactions</p>
                </div>
            </>
        )
    } else {

        return (
            <>
                <div className="postCard__reactionsContainer__with__symbols">
                    <div className="specificPost_symbolContainer">
                        {showReactions.map(function (reaction) {
                            const { symbol, count, postId } = reaction;
                            return <Reactions key={symbol} id={postId} symbol={symbol} count={count} />
                        })}
                    </div>
                </div>
            </>
        )
    };
};
