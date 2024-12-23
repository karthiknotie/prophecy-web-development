import React from 'react'
import TeamPersonImage from "../Assets/Resources/team-1.png"
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../Assets/styles/Teams.css"
import BannerLogo from "../Assets/Resources/banner-logo.svg";
import AllPageLoader from '../Components/AllPageLoader';

const Teams = () => {
    return (
        <>
            <AllPageLoader />
            <section className='breadcrumb'>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1>Our Team</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptatibus eius reiciendis magnam cum asperiores perferendis at sit consequatur est?</p>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1>OurTeam</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className='team-members'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-item">
                                <div className="image">
                                    <img src={TeamPersonImage} alt="" />
                                </div>
                                <div className="person-content">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="person-details">
                                                <h1>William Henry</h1>
                                                <h6>Web Designer</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="linkedin-icon">
                                                <FaLinkedinIn className='icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-item grayscale">
                                <div className="image">
                                    <img src={TeamPersonImage} alt="" />
                                </div>
                                <div className="person-content">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="person-details">
                                                <h1>William Henry</h1>
                                                <h6>Web Designer</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="linkedin-icon">
                                                <FaLinkedinIn className='icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-item grayscale">
                                <div className="image">
                                    <img src={TeamPersonImage} alt="" />
                                </div>
                                <div className="person-content">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="person-details">
                                                <h1>William Henry</h1>
                                                <h6>Web Designer</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="linkedin-icon">
                                                <FaLinkedinIn className='icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teams