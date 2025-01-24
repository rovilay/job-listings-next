import { Job } from "@/types/Job.types"
import JobListing from "./JobListing"
import Link from "next/link"


const JobListings = ({ jobs, showButton, limit }: { jobs: Array<Job>, showButton?: boolean, limit?: number }) => {
    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                        Browse Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.slice(0, limit || jobs.length).map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>

            {showButton ? (<section className="m-auto max-w-lg my-10 px-6">
                <Link
                    href="/jobs"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All Jobs
                </Link>
            </section>) : null}
        </>
    )
}

export default JobListings
