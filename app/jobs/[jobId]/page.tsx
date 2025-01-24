import { PulseLoader } from "react-spinners"
import jobsJson from '@/jobs.json'
import Link from "next/link";

const JobView = async ({ params }: { params: Promise<{ jobId: string }>}) => {
    const jobId = (await params).jobId
    const job = jobsJson.jobs.find(job => job.id === jobId)

    return (
        <>
        <section>
            <div className="container m-auto py-6 px-6">
                <Link
                href="/jobs"
                className="text-blue-500 hover:text-blue-600 flex items-center"
                >
                <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                </Link>
            </div>
        </section>

        
        {!!job &&
            <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
                <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                >
                <div className="text-gray-500 mb-4">{ job.type }</div>
                <h1 className="text-3xl font-bold mb-4">{ job.title }</h1>
                <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                    <i
                    className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                    ></i>
                    <p className="text-orange-700">{ job.location }</p>
                </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-blue-800 text-lg font-bold mb-6">
                    Job Description
                </h3>

                <p className="mb-4">
                    { job.description }
                </p>

                <h3 className="text-blue-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{ job.salary }</p>
                </div>
            </main>

            <aside>
                {/* <!-- Company Info --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{ job.company.name }</h2>

                <p className="my-2">
                    { job.company.description }
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-blue-100 p-2 font-bold">
                    { job.company.contactEmail }
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-blue-100 p-2 font-bold">{ job.company.contactPhone }</p>
                </div>

                {/* <!-- Manage --> */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                    href={`/jobs/edit/${job.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >Edit Job</Link>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Delete Job
                </button>
                </div>
            </aside>
            </div>
        </div>
            </section>
        }  

        {!job &&        <div className="text-center text-gray-500">
        <PulseLoader />
        </div>}

        </>
    )
}

export default JobView
