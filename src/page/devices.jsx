import React, { useState } from 'react';
import axios from 'axios';
import Calendar from '../components/calendar';

const Devices = () => {
    const [fitbitChecked, setFitbitChecked] = useState(true);
    const [garminChecked, setGarminChecked] = useState(true);
    const [stravaChecked, setStravaChecked] = useState(true);
    const [samsungChecked, setSamsungChecked] = useState(true);

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {
        axios({
            url: `http://localhost:5000/`, //your url
            method: 'GET'
        }).then((res) => {

        });
    };

    return (
        <div className="bg-white dark:bg-slate-900" style={{ height: '100vh' }}>
            <div class="w-full bg-white dark:bg-gray-800 dark:border-gray-700">
                <div class="">
                    <ul role="list" class="px-2 py-2 md:py-14 md:mx-20 divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4 bg-gray-200 p-2 rounded my-2">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-24" src="https://logos-world.net/wp-content/uploads/2021/02/Fitbit-Emblem.png" alt="Neil image" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        FITBIT
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        connected
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input onClick={() => setFitbitChecked(!fitbitChecked)} type="checkbox" value="" class="sr-only peer" checked={fitbitChecked} />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4 bg-gray-200 rounded my-2">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 ml-6 mr-6">
                                    <img class="w-14" src="https://cdn.iconscout.com/icon/free/png-256/garmin-3521441-2944885.png" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        GARMIN
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        connected
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input onClick={() => setGarminChecked(!garminChecked)} type="checkbox" value="" class="sr-only peer" checked={garminChecked} />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4 bg-gray-200 rounded my-2">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 ml-6 mr-6">
                                    <img class="w-14" src="data:image/png;base64,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" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        STRAVA
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        connected
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input onClick={() => setStravaChecked(!stravaChecked)} type="checkbox" value="" class="sr-only peer" checked={stravaChecked} />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4 bg-gray-200 rounded my-2">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0 ml-6 mr-6">
                                    <img class="w-14" src="https://app.contingentfitness.com/static/media/samsungHealth.fc50d6b4.png" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        SAMSUNG HEALTH
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        connected
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input onClick={() => setSamsungChecked(!samsungChecked)} type="checkbox" value="" class="sr-only peer" checked={samsungChecked} />
                                        <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Devices;