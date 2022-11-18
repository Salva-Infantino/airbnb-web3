import React, { useContext, useEffect } from "react";
import { MyContext } from "../pages/_app";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from "react-date-range";

const DatePicker = ({nextOpen, range}) => {

    const {dateStart, setDateStart, dateEnd, setDateEnd} = useContext(MyContext);

    const pickedDate = (item) => {
        range === 'start' ? setDateStart(item) : range === 'end' && setDateEnd(item);
        nextOpen(true)
    }

    useEffect(() => {
        dateStart && setDateStart(dateStart);
        dateEnd && setDateEnd(dateEnd);
    }, [])

    return (
        <Calendar 
            onChange={item => pickedDate(item)} 
            date={range === 'start' ? dateStart : range === 'end' && dateEnd}
            months={2}
            direction='horizontal'
            minDate={new Date()}
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            showMonthAndYearPickers={false}
            monthDisplayFormat='MMMM yyyy'
            weekdayDisplayFormat='E.'
        />
    );
}

export default DatePicker;
