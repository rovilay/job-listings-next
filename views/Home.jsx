import JobListings from "../components/JobListings"
import jobsJson from '../../jobs.json'

const Home = () => {
    return (
        <JobListings jobs={jobsJson.jobs} showButton limit={3}/>
    )
}

export default Home
