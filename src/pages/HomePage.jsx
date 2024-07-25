import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const { Fragment } = React

const HomePage = () => {
    return (
        <Fragment>
            {/* <!-- Hero --> */}
            <Hero title={"Become a React Dev"} subTitle={"Find the React job that fits your skills and needs"} />

            {/* <!-- Developers and Employers --> */}
            <HomeCards />

            {/* <!-- Browse Jobs --> */}
            <JobListings isHome={true} />

            <ViewAllJobs />

        </Fragment>
    )
}

export default HomePage