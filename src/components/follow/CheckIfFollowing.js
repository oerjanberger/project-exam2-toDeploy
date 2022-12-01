import { useState, useEffect } from "react";
import FollowBtn from "./FollowBtn";
import UnfollowBtn from "./UnFollowBtn";

export default function CheckIfFollowing(props) {
    const [following, setFollowing] = useState(false);


    const followingNames = props.followingNames;
    const profileName = props.profileName;

    useEffect(() => {
        function matchFollowing() {
            const match = followingNames.find(name => name === profileName);
            if (match) {
                setFollowing(true);
            };
        };
        matchFollowing();
    }, []);

    if (following) {
        return <UnfollowBtn name={profileName} />
    };
    if (!following) {
        return <FollowBtn name={profileName} />
    };
};
