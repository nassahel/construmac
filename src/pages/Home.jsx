import React from 'react'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionTree from '../components/SectionTree'
import SectionTwo from '../components/SectionTwo'
import Servicios from '../components/Servicios'
import SectionOne from '../components/SectionOne'

const Home = () => {
    return (
        <div>
            <SectionOne />
            <Servicios />
            <SectionTwo />
            <SectionTree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}

export default Home