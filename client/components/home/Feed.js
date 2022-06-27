import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
};

const tweets = [
    {
        displayName: "Tanish",
        userName: "0x8chdgertherhtrehtj23213213",
        avatar: "https://avatars.githubusercontent.com/u/61084415",
        text: "gm",
        isProfileImageNft: false,
        timestamp: "2020-06-01T12:00:00.000Z",
    },
    {
        displayName: "Tanish",
        userName: "0x8chdgertherhtrehtj23213213",
        avatar: "https://avatars.githubusercontent.com/u/61084415",
        text: "gm",
        isProfileImageNft: false,
        timestamp: "2020-06-01T12:00:00.000Z",
    },
    {
        displayName: "Tanish",
        userName: "0x8chdgertherhtrehtj23213213",
        avatar: "https://avatars.githubusercontent.com/u/61084415",
        text: "gm",
        isProfileImageNft: false,
        timestamp: "2020-06-01T12:00:00.000Z",
    },
    {
        displayName: "Tanish",
        userName: "0x8chdgertherhtrehtj23213213",
        avatar: "https://avatars.githubusercontent.com/u/61084415",
        text: "gm",
        isProfileImageNft: false,
        timestamp: "2020-06-01T12:00:00.000Z",
    },
    {
        displayName: "Tanish",
        userName: "0x8chdgertherhtrehtj23213213",
        avatar: "https://avatars.githubusercontent.com/u/61084415",
        text: "gm",
        isProfileImageNft: false,
        timestamp: "2020-06-01T12:00:00.000Z",
    },
];

function Feed() {
    return (
        <div className={`${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(
                        0,
                        4
                    )}...${tweet.userName.slice(-4)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
}

export default Feed;
