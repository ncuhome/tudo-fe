import React from 'react';
import useStyles from "./css";
import HeadBar from "../../components/shared/headbar";
import Calendar from "../../components/shared/calendar/calendar";

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <HeadBar />
            <Calendar month={"august"} day={"07"} />
            <Calendar month={"april"} day={"11"} />
        </div>
    );
}

export default HomePage;