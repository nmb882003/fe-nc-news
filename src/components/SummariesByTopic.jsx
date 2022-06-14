import { useParams } from "react-router-dom";

const SummariesByTopic = () => {

    const { topic } = useParams();

    return (
        <>
            <p>Showing all articles in topic: {topic}</p>
        </>
    )
}

export default SummariesByTopic;