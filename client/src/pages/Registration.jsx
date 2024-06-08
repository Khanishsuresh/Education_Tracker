import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import '../styles/registration.css';
import { useAuth } from '../context/AuthContext';

function Registration() {
    const [certificates, setCertificates] = useState([{ name: "", link: "" }]);
    const [projects, setProjects] = useState([{ name: "", link: "" }]);
    const [papers, setPapers] = useState([{ name: "", link: "" }]);
    const [awards, setAwards] = useState([{ name: "", link: "" }]);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8001/user/registration', {
                    params: {
                        email: user.email,
                    },
                });
                if (response.status === 200) {
                    setUserDetails(response.data);
                } else {
                    setUserDetails(null);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
                setUserDetails(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [user]);

    useEffect(() => {
        if (userDetails) {
            navigate('/');
        }
    }, [userDetails, navigate]);

    const handleAddCertificate = () => {
        setCertificates([...certificates, { name: "", link: "" }]);
    };

    const handleCertificateChange = (e, index, field) => {
        const updatedCertificates = [...certificates];
        updatedCertificates[index][field] = e.target.value;
        setCertificates(updatedCertificates);
    };

    const handleAddProject = () => {
        setProjects([...projects, { name: "", link: "" }]);
    };

    const handleProjectChange = (e, index, field) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = e.target.value;
        setProjects(updatedProjects);
    };

    const handleAddPaper = () => {
        setPapers([...papers, { name: "", link: "" }]);
    };

    const handlePaperChange = (e, index, field) => {
        const updatedPapers = [...papers];
        updatedPapers[index][field] = e.target.value;
        setPapers(updatedPapers);
    };

    const handleAddAward = () => {
        setAwards([...awards, { name: "", link: "" }]);
    };

    const handleAwardChange = (e, index, field) => {
        const updatedAwards = [...awards];
        updatedAwards[index][field] = e.target.value;
        setAwards(updatedAwards);
    };

    const [name, setName] = useState("");
    const handlename = (e) => {
        setName(e.target.value);
    }

    const [registrationNumber, setRegistrationNumber] = useState("");
    const handlereg = (e) => {
        setRegistrationNumber(e.target.value);
    }

    const [branch, setBranch] = useState("");
    const handlebranch = (e) => {
        setBranch(e.target.value);
    }

    const [year, setYear] = useState("");
    const handleyear = (e) => {
        setYear(e.target.value);
    }

    const [cgpa, setCgpa] = useState("");
    const handlecgpa = (e) => {
        setCgpa(e.target.value);
    }

    const [attendance, setAttendance] = useState("");
    const handleattendance = (e) => {
        setAttendance(e.target.value);
    }

    const [skills, setSkills] = useState("");
    const handleskills = (e) => {
        setSkills(e.target.value);
    }

    const [expertise, setExpertise] = useState("");
    const handleexpertise = (e) => {
        setExpertise(e.target.value);
    }

    const [leetcode, setLeetcode] = useState("");
    const handleleet = (e) => {
        setLeetcode(e.target.value);
    }

    const [codechef, setCodechef] = useState("");
    const handlechef = (e) => {
        setCodechef(e.target.value);
    }

    const [codeforce, setCodeforce] = useState("");
    const handleforce = (e) => {
        setCodeforce(e.target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        
        if (submitted) return;

    
        const skillslist = skills.split(',');
        const expertiselist = expertise.split(',');
    
        const certificatesList = certificates.map(cert => ({ name: cert.name, link: cert.link }));
        const projectsList = projects.map(proj => ({ name: proj.name, link: proj.link }));
        const awardsList = awards.map(award => ({ name: award.name, link: award.link }));
        const papersList = papers.map(paper => ({ name: paper.name, link: paper.link }));
    
        const values = {
            name: name,
            rollno: registrationNumber,
            branch: branch,
            year: year,
            cgpa: cgpa,
            attendance: attendance,
            skills: skillslist,
            expertise: expertiselist,
            leetcode: leetcode,
            codechef: codechef,
            codeforce: codeforce,
            certificates: certificatesList,
            projects: projectsList,
            papers: papersList,
            awards: awardsList,
            email: user.email,
        };
    
        console.log('Submitting the following values:', values);
    
        try {
            const response = await axios.post('http://localhost:8001/form',values);
            console.log('Response:', response.data);
            setSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    if (submitted) {
        return null;
    }

    if (loading) {
        return <p className="text-center text-xl">Loading...</p>;
    }

    return (
        <div className= "registration-wrapper flex items-center justify-center">
            <div className="registration-container p-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <form onSubmit={handlesubmit}>
                    {/* Academic Details */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Academic Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <label className="block text-gray-700">Name</label>
                                <input name="name" onChange={handlename} type="text" placeholder="Enter your name" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Registration Number</label>
                                <input name="registrationNumber" onChange={handlereg} type="text" placeholder="Enter your registration number" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Branch</label>
                                <input name="branch" onChange={handlebranch} type="text" placeholder="Enter your branch" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Year</label>
                                <input name="year" onChange={handleyear} type="text" placeholder="Enter your year" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">CGPA</label>
                                <input name="cgpa" onChange={handlecgpa} type="text" placeholder="Enter your CGPA" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Attendance</label>
                                <input name="attendance" onChange={handleattendance} type="text" placeholder="Enter your attendance" className="mt-1 p-2 border rounded w-full" />
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <label className="block text-gray-700">Skills</label>
                                <input name="skills" onChange={handleskills} className="mt-1 p-2 border rounded w-full" type="text" placeholder="Enter your skills" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Expertise</label>
                                <input name="expertise" onChange={handleexpertise} className="mt-1 p-2 border rounded w-full" type="text" placeholder="Enter your expertise" />
                            </div>
                        </div>
                    </div>

                    {/* Coding Platforms */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Coding Platforms</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <label className="block text-gray-700">Leetcode</label>
                                <input name="leetcode" onChange={handleleet} type="text" placeholder="Enter your link" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Codechef</label>
                                <input name="codechef" onChange={handlechef} type="text" placeholder="Enter your link" className="mt-1 p-2 border rounded w-full" />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700">Codeforce</label>
                                <input name="codeforce" onChange={handleforce} type="text" placeholder="Enter your link" className="mt-1 p-2 border rounded w-full" />
                            </div>
                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Certificates</h2>
                        {certificates.map((certificate, index) => (
                            <div className="form-group mb-4" key={index}>
                                <label className="block text-gray-700">Certificate</label>
                                <input
                                    type="text"
                                    placeholder="Enter certificate name"
                                    value={certificate.name}
                                    onChange={(e) => handleCertificateChange(e, index, "name")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your link"
                                    value={certificate.link}
                                    onChange={(e) => handleCertificateChange(e, index, "link")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddCertificate} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Certificate
                        </button>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Projects</h2>
                        {projects.map((project, index) => (
                            <div className="form-group mb-4" key={index}>
                                <label className="block text-gray-700">Project</label>
                                <input
                                    type="text"
                                    placeholder="Enter project name"
                                    value={project.name}
                                    onChange={(e) => handleProjectChange(e, index, "name")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your link"
                                    value={project.link}
                                    onChange={(e) => handleProjectChange(e, index, "link")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddProject} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Project
                        </button>
                    </div>

                    {/* Papers */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Papers</h2>
                        {papers.map((paper, index) => (
                            <div className="form-group mb-4" key={index}>
                                <label className="block text-gray-700">Paper</label>
                                <input
                                    type="text"
                                    placeholder="Enter paper name"
                                    value={paper.name}
                                    onChange={(e) => handlePaperChange(e, index, "name")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your link"
                                    value={paper.link}
                                    onChange={(e) => handlePaperChange(e, index, "link")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddPaper} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Paper
                        </button>
                    </div>

                    {/* Awards */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Awards</h2>
                        {awards.map((award, index) => (
                            <div className="form-group mb-4" key={index}>
                                <label className="block text-gray-700">Award</label>
                                <input
                                    type="text"
                                    placeholder="Enter award name"
                                    value={award.name}
                                    onChange={(e) => handleAwardChange(e, index, "name")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your link"
                                    value={award.link}
                                    onChange={(e) => handleAwardChange(e, index, "link")}
                                    className="mt-1 p-2 border rounded w-full"
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddAward} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Award
                        </button>
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;

