import {makeStyles} from "@material-ui/core/styles";
import React from "react";

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
    line1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingTop: "20px",
        zIndex: 2,
    },
    line2: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        zIndex: 2,
    },
    month: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "14px",
        color: "#3889E8",
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
    th: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#FFFFFF",
        margin: 0,
        zIndex: 2,
    }
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
            <div className={classes.line1}>
                <p className={classes.day}>{props.day}</p>
                <p className={classes.th}>th</p>
            </div>
            <div className={classes.line2}>
                <p className={classes.month}>{props.month}</p>
            </div>
        </div>
    );
}