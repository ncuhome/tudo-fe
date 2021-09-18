import React from 'react';
import useStyles from "./css";
import HeadBar from "../../shared/headbar";
import Calendar from "../../shared/calendar";

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <HeadBar/>
            <Calendar month={"august"} day={"07"} />
        </div>
    );
}