import React, { useEffect, useState } from 'react';
// import Calendar from 'react-awesome-calendar';
import axios from 'axios';
import Calendar from '../components/calendar';

const Dashboard = () => {

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {
        axios({
            url: `http://localhost:5000/`, //your url
            method: 'GET'
        }).then((res) => {

        });
    };

    const events = [{
        id: 1,
        color: '#FFFFFF',
        from: '2023-02-01',
        to: '2023-02-01',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-02',
        to: '2023-02-02',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 1,
        color: '#FFFFFF',
        from: '2023-02-03',
        to: '2023-02-03',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-04',
        to: '2023-02-04',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 1,
        color: '#FFFFFF',
        from: '2023-02-05',
        to: '2023-02-05',
        title: `⏱️2330 🔥2152`
    }, {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-06',
        to: '2023-02-06',
        title: `⏱️2330 🔥2152`
    }];

    return (
        <div className="bg-white dark:bg-slate-900" style={{ height: '100vh' }}>
            <div className="container  px-0 md:px-6 mx-auto">
                <Calendar
                    events={events}
                />
            </div>
        </div>
    )
}
export default Dashboard;