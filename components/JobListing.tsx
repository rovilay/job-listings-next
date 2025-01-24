"use client"

import { Job } from '@/types/Job.types'
import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'

const JobListing = ({ job }: { job: Job }) => {
    const [showFullDesc, setShowFullDesc] = useState(false)

    const toggleFullDescription = useCallback(() => {
        setShowFullDesc((showFullDesc) => !showFullDesc)
    }, [setShowFullDesc])

    const desc = useMemo(() => {
        return showFullDesc ? job.description : job.description.substring(0, 90) + '...'
    }, [job, showFullDesc])


    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-600 my-2">{ job.type }</div>
                <h3 className="text-xl font-bold">{ job.title }</h3>
            </div>

            <div className="mb-5">
               {desc}
               <button onClick={toggleFullDescription} className="text-blue-500 hober:text-blue-600 mb-5">{ showFullDesc ? 'Less' : 'More' }</button>
            </div>

            <h3 className="text-blue-500 mb-2">{job.salary}</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                <i className="fa-solid fa-location-dot text-lg"></i>
                { job.location }
                </div>
                <Link
                href={"/jobs/" + job.id }
                className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                Read More
                </Link>
            </div>
            </div>
        </div>
    )
}

export default JobListing
