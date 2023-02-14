import React, { useEffect, useState } from 'react';
import Calendar from 'react-awesome-calendar';
import axios from 'axios';

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
        from: '2023-02-01T18:00:00+00:00',
        to: '2023-02-01T19:00:00+00:00',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-02T20:00:00+00:00',
        to: '2023-02-02T21:00:00+00:00',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 1,
        color: '#FFFFFF',
        from: '2023-02-03T18:00:00+00:00',
        to: '2023-02-03T19:00:00+00:00',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-04T20:00:00+00:00',
        to: '2023-02-04T21:00:00+00:00',
        title: `⏱️2330 🔥2152`
    },
    {
        id: 1,
        color: '#FFFFFF',
        from: '2023-02-05T18:00:00+00:00',
        to: '2023-02-05T19:00:00+00:00',
        title: `⏱️2330 🔥2152`
    }, {
        id: 2,
        color: '#FFFFFF',
        from: '2023-02-06T20:00:00+00:00',
        to: '2023-02-06T21:00:00+00:00',
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