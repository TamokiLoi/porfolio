import React, { useCallback } from "react";

const About = () => {

    const getNumberOfYearsOfExperience = useCallback(() => {
        const yearCurrent = new Date().getFullYear();
        return yearCurrent - 2018;
    }, []);

    return (
        <>
            <h2 className="title__panel">About me</h2>
            <p>
                Hi, my name <strong className="text-light-gray">Nguyen Lam Thanh Loi</strong> (
                <span className="text-light-gray">Tamoki Loi</span>), {"I'm"} a Frontend Developer and I enjoy
                creating things that live on the internet. I have {getNumberOfYearsOfExperience()}+ years of experience in Web Development{" "}
                <span className="text-light-gray">since 2018</span>.
            </p>
            <p>
                Fast-forward to today, and {"I've"} had the privilege of working at{" "}
                <span className="text-light-green">an outsourcing</span>,{" "}
                <span className="text-light-green">a start-up</span>,{" "}
                <span className="text-light-green">a huge corporation</span> and {" "}
                <span className="text-light-green">a product Singapore company</span>.
            </p>
        </>
    );
};

export default About;
