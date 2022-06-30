import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendars = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='h-screen'>
            <h1 className='font-bold text-purple-600 text-2xl mt-8 ml-8'>Calendar</h1>
            <div className='ml-10 md:ml-12 lg:ml-16 mt-10'>
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                <p>You picked {format(date, 'PPP')}.</p>
            </div>
        </div>
    );
};

export default Calendars;