import Link from 'next/link'
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="bg-blue-700 border-b border-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div
                className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                >
                <Link className="flex flex-shrink-0 items-center mr-4" href="/">
                    <Image className="h-10 w-auto" src={logo} alt="Vue Jobs" />
                    <span className="hidden md:block text-white text-2xl font-bold ml-2"
                    >React Jobs</span>
                </Link>
                <div className="md:ml-auto">
                    <div className="flex space-x-2">
                    <Link
                        href="/"
                        className="text-white bg-blue-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        >Home</Link>
                    <Link
                        href="/jobs"
                        className="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
                    >
                        Jobs
                    </Link>
                    {/* <Link
                        href="/add-job"
                        className="text-white hover:bg-blue-900 hover:text-white rounded-md px-3 py-2"
                    >Add Job</Link> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
