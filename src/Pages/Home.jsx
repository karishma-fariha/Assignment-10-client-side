import React, { useEffect, useState } from 'react';
import BannerSlider from '../Components/BannerSlider';
import FeaturedEstates from '../Components/FeaturedEstates';
import WhyChoose from '../Components/WhyChoose';
import HowItWork from '../Components/HowItWork';
import CityHighlights from '../Components/CityHighlights';

const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch(`https://home-nest-server-side.vercel.app/properties/home`)
            .then(res => res.json())
            .then(data => setEstates(data))
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>

            <section>
                <BannerSlider></BannerSlider>
            </section>
            <section className='p-10'>
                <h1 className="text-center text-5xl font-bold mb-6 text-primary">Featured Real Estate</h1>
                <FeaturedEstates estates={estates}></FeaturedEstates>
            </section>
            <section>
                <WhyChoose></WhyChoose>
            </section>
            <section>
                <HowItWork></HowItWork>
            </section>
            <section>
                <CityHighlights></CityHighlights>
            </section>

        </div>
    );
};

export default Home;