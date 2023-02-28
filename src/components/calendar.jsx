import { useState } from 'react';
import classNames from 'classnames';

const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

const getMonthName = (month) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return monthNames[month - 1];
};

const Calendar = ({ events }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handlePreviousMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handlePreviousYear = () => {
        setCurrentYear(currentYear - 1);
    };

    const handleNextYear = () => {
        setCurrentYear(currentYear + 1);
    };

    const monthDays = daysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const weeks = Math.ceil((monthDays + firstDay) / 7);

    const days = [];
    for (let i = 1; i <= weeks * 7; i++) {
        if (i > firstDay && i <= monthDays + firstDay) {
            days.push(i - firstDay);
        } else {
            days.push(null);
        }
    }

    return (
        <div className="mx-auto max-w-lg p-1">
            <div className="flex justify-center">
                <div className="flex justify-between my-4 w-3/4 text-gray-700 bg-gray">
                    <button className="text-white px-4 py-2 rounded" onClick={handlePreviousYear}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="text-gray-700" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div className="text-md uppercase font-medium" style={{ marginTop: '5px' }}>
                        {currentYear}
                    </div>
                    <button className="text-white px-4 py-2 rounded" onClick={handleNextYear}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="text-gray-700" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between my-4 w-3/4 text-gray-700 bg-gray">
                    <button className="text-white px-4 py-2 rounded" onClick={handlePreviousMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="text-gray-700" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div className="text-md w-14 flex justify-center uppercase font-medium" style={{ marginTop: '5px' }}>
                        {getMonthName(currentMonth)}
                    </div>
                    <button className="text-white px-4 py-2 rounded" onClick={handleNextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="text-gray-700" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="w-[14.2867%] text-gray-600 text-center font-medium mb-2">
                        {day}
                    </div>
                ))}
                {days.map((day, index) => {
                    console.log(`${currentYear}-${currentMonth?.toString().padStart(2, '0')}-${day?.toString().padStart(2, '0')}`);
                    console.log(day, '-----', new Date().getDate(), '---------', currentMonth, '----------', new Date().getMonth() + 1, '----------', (day === new Date().getDate()) && (currentMonth === new Date().getMonth() + 1));
                    let currentFullDate = `${currentYear}-${currentMonth?.toString().padStart(2, '0')} -${day?.toString().padStart(2, '0')}`;
                    let isCurrentDate = (day === new Date().getDate()) && (currentMonth === new Date().getMonth() + 1) && (currentYear === new Date().getFullYear());
                    return (
                        <div
                            key={index}
                            className={`w-[14.2867%] text-sm h-24 text-gray-600 border border-gray-50 text-center py-1 md:py-2 ${(!day ? 'bg-gray-200' : 'bg-gray-200')}`}
                        >
                            <div className="flex justify-center">
                                <div className={`${isCurrentDate ? 'text-gray-50 bg-blue-800' : 'text-gray-50 bg-gray-500'} rounded w-6`}>{day}</div>
                            </div>
                            {day &&
                                (
                                    <div className="flex flex-wrap">
                                        <div className="text-xs">
                                            ⏱️2330
                                        </div>
                                        <div className="text-xs">
                                            🔥2152
                                        </div>
                                    </div>
                                )}
                        </div>
                    )
                }
                )}
            </div>
        </div >
    );
};

export default Calendar;
