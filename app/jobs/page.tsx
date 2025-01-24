import JobListings from "@/components/JobListings"
import jobsJson from '@/jobs.json'

const JobsView = () => {
    return (
        <JobListings jobs={jobsJson.jobs} />
    )
}

export default JobsView
