import React, { useState, useContext } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import { MyContext } from "../pages/_app";
const moment = extendMoment(originalMoment);

const Example = ({setPeopleOpen}) => {

    const {setDateStart, setDateEnd} = useContext(MyContext);

    const [value, setValue] = useState(null);

    const onSelect = (value) => {
        setDateStart(value.start.format("MMM DD"));
        setDateEnd(value.end.format("MMM DD"));
        setValue(value);
        setPeopleOpen(true)
    };

    return (
        <DateRangePicker
            value={value}
            onSelect={onSelect}
            singleDateRange={true}
            numberOfCalendars={2}
            locale='fr'
            minimumDate={new Date()}
            maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        />
    );
}

export default Example;
