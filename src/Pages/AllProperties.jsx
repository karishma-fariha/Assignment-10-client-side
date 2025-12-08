import React, { useEffect, useState } from 'react';
import AllProperty from '../Components/AllProperty';
import { Link } from 'react-router';

const AllProperties = () => {
    const [search, setSearch] = useState('');
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch(`https://home-nest-server-side.vercel.app/properties`)
            .then(res => res.json())
            .then(data => setEstates(data))
            .catch(err => {
                console.log(err);
            })
    }, []);
    const filteredEstates = estates.filter((estate) =>
        estate.title?.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className='mb-20'>
            <h1 className='text-5xl font-bold text-primary text-center p-3'>Our All Properties</h1>
            <p className='text-xl text-gray-400 text-center mb-8'>Explore every listing — find your perfect home, investment, or commercial space</p>
            <div className="flex justify-between items-center mx-20">
                <h1 className='text-xl font-bold'>Total Properties({filteredEstates.length})</h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                        placeholder="Search by Property Name" />
                </label>


            </div>

            <AllProperty estates={filteredEstates}></AllProperty>
            <div className="flex items-center justify-center">
                <Link to='/' className='btn btn-primary px-10'>Back to Home</Link>
            </div>
        </div>
    );
};

export default AllProperties;