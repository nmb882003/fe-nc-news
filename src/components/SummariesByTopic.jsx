import { useParams } from 'react-router-dom';
import SummaryList from './SummaryList.jsx';

const SummariesByTopic = () => {

    const { topic } = useParams();

    return (
        <>
            <p>Showing all articles in topic: {topic}</p>
            <SummaryList topic={topic}/>
        </>
    )
}

export default SummariesByTopic;