import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';
import Registration from './Registration.jsx';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [registrationDetails, setRegistrationDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRegistration, setShowRegistration] = useState(false);

    useEffect(() => {
        const fetchRegistrationDetails = async () => {
            try {
                const userEmail = localStorage.getItem('userEmail');
                if (!userEmail) {
                    throw new Error('User email not found in local storage');
                }

                const response = await axios.get('http://localhost:8001/user/formdata', {
                    params: {
                        email: userEmail
                    }
                });
                setRegistrationDetails(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setShowRegistration(true);  // User not found, show registration
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchRegistrationDetails();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="home-wrapper">
            <div className="flex h-screen relative home-sub-wrapper">
                {/* Sidebar */}
                <div className={`home-container w-64 fixed top-0 left-0 h-full transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} md:relative md:translate-x-0>
                    <div className="p-6 flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <button className="md:hidden" onClick={toggleSidebar}>
                            <i className="fa-solid fa-circle-xmark fa-lg"></i>
                        </button>
                    </div>
                    <nav className="mt-6">
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Profile</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Settings</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Logout</a>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="home-main-content flex-1 flex flex-col overflow-auto">
                    <header className="home-main-header p-4 flex justify-between items-center">
                        <button className="text-blue-900 md:hidden" onClick={toggleSidebar}>
                            <i className="fa-solid fa-bars fa-lg"></i>
                        </button>
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <div>
                            <button className="bg-blue-900 text-white py-2 px-4 rounded">Profile</button>
                        </div>
                    </header>

                    <main className="main-content p-4 flex-grow overflow-auto">
                        {showRegistration ? (
                            <Registration />
                        ) : (
                            registrationDetails && (
                                <div>
                                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                                        <h2 className="text-xl font-bold mb-2">Name: {registrationDetails.name}</h2>
                                        <p className="text-gray-700">Registration Number: {registrationDetails.rollno}</p>
                                        <p className="text-gray-700">Branch: {registrationDetails.branch}</p>
                                        <p className="text-gray-700">Year: {registrationDetails.year}</p>
                                        <p className="text-gray-700">CGPA: {registrationDetails.cgpa}</p>
                                        <p className="text-gray-700">Attendance: {registrationDetails.attendance}</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Skills</h2>
                                            <ul className="list-disc pl-5">
                                                {registrationDetails.skills && registrationDetails.skills.map((skill, index) => (
                                                    <li key={index} className="text-gray-700">{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Expertise</h2>
                                            <ul className="list-disc pl-5">
                                                {registrationDetails.expertise && registrationDetails.expertise.map((expert, index) => (
                                                    <li key={index} className="text-gray-700">{expert}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Coding Platforms</h2>
                                            <p className="text-gray-700"><strong>Leetcode:</strong> <a href={registrationDetails.leetcode} className="text-blue-600" target="_blank" rel="noopener noreferrer">{registrationDetails.leetcode}</a></p>
                                            <p className="text-gray-700"><strong>Codechef:</strong> <a href={registrationDetails.codechef} className="text-blue-600" target="_blank" rel="noopener noreferrer">{registrationDetails.codechef}</a></p>
                                            <p className="text-gray-700"><strong>Codeforce:</strong> <a href={registrationDetails.codeforce} className="text-blue-600" target="_blank" rel="noopener noreferrer">{registrationDetails.codeforce}</a></p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Certificates</h2>
                                            <ul className="certificates list-disc pl-5 overflow-scroll max-h-40 ">
                                                {registrationDetails.certificates && registrationDetails.certificates.map((certificate, index) => (
                                                    <li key={index} className="text-gray-700">{certificate.name} - <a href={certificate.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">{certificate.link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Awards</h2>
                                            <ul className="awards clist-disc pl-5 overflow-scroll max-h-40">
                                                {registrationDetails.awards && registrationDetails.awards.map((award, index) => (
                                                    <li key={index} className="text-gray-700">{award.name} - <a href={award.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">{award.link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className=" bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Projects</h2>
                                            <ul className="projects list-disc pl-5 overflow-auto max-h-40">
                                                {registrationDetails.projects && registrationDetails.projects.map((project, index) => (
                                                    <li key={index} className="text-gray-700">{project.name} - <a href={project.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">{project.link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h2 className="text-xl font-bold mb-2">Papers</h2>
                                            <ul className="papers list-disc pl-5 overflow-auto max-h-40">
                                                {registrationDetails.papers && registrationDetails.papers.map((paper, index) => (
                                                    <li key={index} className="text-gray-700">{paper.name} - <a href={paper.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">{paper.link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Home;