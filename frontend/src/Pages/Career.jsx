import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Assets/styles/Career.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { useFetchJobsQuery, useApplyJobMutation } from "../redux/features/career/CareerApi";
import AllPageLoader from "../Components/AllPageLoader";
import CareerSearch from "../Components/CareerSearch";
import axios from "axios";

const Career = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [locationFilter, setLocationFilter] = useState(""); // Location filter (dropdown)
    const [jobTypeFilter, setJobTypeFilter] = useState(""); // Job type filter (dropdown)
    const [query, setQuery] = useState({ search: "", category: "" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        resume: null,
    });


    const navigate = useNavigate();
    const location = useLocation();

    // Extract jobId from query parameters (for modal)
    const queryParams = new URLSearchParams(location.search);
    const jobId = queryParams.get("jobId");

    const { data: jobs = [], error, isLoading } = useFetchJobsQuery(query);

    const [selectedJob, setSelectedJob] = useState(null);

    const [applyJob, { isLoading: isApplying, error: applyError }] = useApplyJobMutation();

    useEffect(() => {
        if (jobId && jobs.length > 0) {
            const job = jobs.find((job) => job._id === jobId);
            setSelectedJob(job || null);
        }
    }, [jobId, jobs]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    // Handle location filter change (dropdown)
    const handleLocationFilterChange = (e) => {
        setLocationFilter(e.target.value);
    };

    // Handle job type filter change (dropdown)
    const handleJobTypeFilterChange = (e) => {
        setJobTypeFilter(e.target.value);
    };

    const handleSearch = () => {
        setQuery({ search, category });
    };

    const handleApplyClick = (job) => {
        navigate(`/career?jobId=${job._id}`);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            resume: file,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!selectedJob) {
            alert("No job selected");
            return;
        }

        if (!formData.name || !formData.email || !formData.phone || !formData.linkedin || !formData.resume) {
            alert("Please fill in all required fields.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("linkedin", formData.linkedin);
        formDataToSend.append("resume", formData.resume);
        formDataToSend.append("jobTitle", selectedJob.jobTitle); // Add the job title here

        axios
            .post("http://prophecytechs.com/api/apply", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log("Application submitted successfully:", response.data);

                // Reset form fields
                setFormData({
                    name: "",
                    jobTitle: "",
                    email: "",
                    phone: "",
                    linkedin: "",
                    resume: null,
                });

                closeModal();
            })
            .catch((error) => {
                console.error("Error submitting application:", error.response?.data || error.message);
            });
    };


    const closeModal = () => {
        navigate("/career"); // Close modal by removing jobId from query params
    };

    // Filter jobs based on location, job type, and search by role
    const filteredJobs = jobs.filter((job) => {
        const matchesLocation = locationFilter ? job.jobLocation.toLowerCase().includes(locationFilter.toLowerCase()) : true;

        // Split the selected jobTypeFilter and job.jobType into arrays of words for comparison
        const jobTypeWords = job.jobType.toLowerCase().split(" / ");
        const selectedJobTypeWords = jobTypeFilter.toLowerCase().split(" / ");

        const matchesJobType = selectedJobTypeWords.some((word) =>
            jobTypeWords.some((jobTypeWord) => jobTypeWord.includes(word))
        );

        // Matches role search (job title)
        const matchesRole = search ? job.jobTitle.toLowerCase().includes(search.toLowerCase()) : true;

        return matchesLocation && matchesJobType && matchesRole;
    });

    // Predefined locations for dropdown filter
    const locations = ["USA", "Canada", "Chennai", "Trichy", "Mexico", "Singapore", "Japan"];

    // Predefined job types for dropdown filter
    const jobTypes = ["Part-time / Remote", "Part-time / On-site", "Full-time / Remote", "Full-time / On-site"];

    return (
        <>
            <AllPageLoader />
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className="ban-title-animation">Join Our Team</h1>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>Join Our Team</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-section">
                <div className="container">
                    <div className="row title text-center">
                        <h3 className="small-title" data-aos="fade-down" data-aos-duration="1000">
                            Be a Part of Innovation: Work with Us
                        </h3>
                        <p data-aos="fade-down" data-aos-duration="1000">
                            We invite you to be part of a team dedicated to pushing boundaries, creating impact, and transforming industries.
                        </p>
                    </div>
                </div>
                <div className="container-fluid">
                    {isLoading && <div>Loading...</div>}
                    {error && <div>{error.message}</div>}

                    <div className="job-offers-section">
                        <div className="container">
                            <div className="search-blog filter-career">
                                <div>
                                    <h3>Latest Jobs</h3>
                                </div>
                                <div>
                                    <CareerSearch
                                        search={search}
                                        handleSearchChange={handleSearchChange}
                                        onSearch={handleSearch}
                                    />
                                </div>
                                <div>
                                    <select
                                        value={locationFilter}
                                        onChange={handleLocationFilterChange}
                                    >
                                        <option value="">Filter by Location</option>
                                        {locations.map((location, index) => (
                                            <option key={index} value={location}>
                                                {location}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select
                                        value={jobTypeFilter}
                                        onChange={handleJobTypeFilterChange}
                                    >
                                        <option value="">Filter by Job Type</option>
                                        {jobTypes.map((type, index) => (
                                            <option key={index} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row job-notices">
                                {filteredJobs.slice().reverse().map((job) => (
                                    <div className="col-lg-6" key={job._id}>
                                        <div className="box-content" data-aos="fade-right" data-aos-duration="3000">
                                            <div className="content">
                                                <div className="title">
                                                    <h1>{job.jobTitle}</h1>
                                                    <h6>
                                                        <FaLocationDot /> {job.jobLocation}
                                                    </h6>
                                                </div>
                                                <p>{job.jobHeadline.split(' ').slice(0, 10).join(' ')}{job.jobHeadline.split(' ').length > 10 && '...'}</p>
                                                <span className="hour">
                                                    <LuClock className="icon" /> {job.jobType}
                                                </span>
                                                <div className="apply-btn">
                                                    <button onClick={() => handleApplyClick(job)}>
                                                        Apply Now <FiArrowUpRight />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Section */}
            {jobId && selectedJob && (
                <div
                    className="modal show"
                    tabIndex="-1"
                    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable career-modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedJob.jobTitle}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <h3>Job Responsibilities</h3>
                                <p>{selectedJob.jobDescription}</p>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Job Role:</label>
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                readOnly
                                                value={selectedJob.jobTitle}
                                                onChange={selectedJob.jobTitle}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone">Phone:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="linkedin">LinkedIn:</label>
                                            <input
                                                type="url"
                                                id="linkedin"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="resume">Resume:</label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                onChange={handleFileChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="apply-btn">
                                        Submit Application
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Career;
