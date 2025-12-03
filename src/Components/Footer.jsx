import React from 'react';
import home from '../assets/icons8-home-64.png';
import facebook from '../assets/Group (2).png';
import linkedIn from '../assets/fi_145807.png';
import xmailImg from '../assets/fi_5969020.png';

const Footer = () => {
    return (
        <div className="bg-secondary md:flex p-10 md:justify-between items-center">
        <div className="flex gap-2 ">
            <img className='bg-white rounded-full w-10 h-10 text-white' src={home} alt="" />
           <div className="">
             <h2 className='text-2xl font-bold text-white'> Home<span className='text-primary'>Nest</span></h2>
            <p className='text-xl font-semibold text-white'>Real Estate Listings</p>
           </div>
        </div>
        <div className="md:block hidden">
            <p className='text-xl font-semibold text-white mb-2'>Social</p>
            <div className="flex gap-2">
                <img src={facebook} alt="" />
                <img src={linkedIn} alt="" />
                <img src={xmailImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Footer;