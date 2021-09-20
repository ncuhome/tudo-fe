import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import style from "./index.module.css"

const useStyles = makeStyles(() => ({
    calendar: {
        position: "static",
        height: "76px",
        width: "78px",
    },
    calendarBack: {
        position: "absolute",
        zIndex: 1,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        zIndex: 2,
    },
    month: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "14px",
        color: "#FFFFFF",
        margin: 0,
        zIndex: 2,
    },
    day: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "36px",
        color: "#FFFFFF",
        margin: 0,
        zIndex: 2,
    },
}));

interface CalendarProps {
    month: string
    day: string
}

export default function Calendar(props: CalendarProps) {
    const classes = useStyles();

    return (
        <div className={classes.calendar}>
            <img src={"/calendar.svg"} alt="calendar" className={classes.calendarBack} width={76} height={78}/>
            <div className={`${classes.content} ${style.noSelect}`}>
                <p className={classes.day}>{props.day}</p>
                <p className={classes.month}>{props.month}</p>
            </div>
        </div>
    );
}