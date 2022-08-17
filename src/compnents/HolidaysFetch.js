import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HolidaysFetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://date.nager.at/api/v2/publicholidays/2022/us")
            .then((response) => { setData(response.data) })
            .catch((error) => console.log(error.message))
    }, []);

    return (
        <div>
            {data?.map((holiday) => { return <h1>{holiday.name}</h1> })}
        </div>
    );
}