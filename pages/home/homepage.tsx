import React from 'react';
// import useStyles from "./css";
import HeadBar from "../../components/shared/head-bar/";
// import Calendar from "../../components/shared/calendar/calendar";
import ActCard from '../../components/shared/activity-card/';
import styles from "./index.module.scss"

const HomePage: React.FC = () => {
    // const classes = useStyles

    return (
        <div className={styles.background}>
            <HeadBar />
            {/* <Calendar month={"august"} day={"07"} /> */}
            {/* <Calendar month={"april"} day={"11"} /> */}
            <ActCard/>
        </div>
    );
}

export default HomePage;