import {makeStyles} from "@material-ui/core/styles";
import { useRouter } from 'next/router'
import React from "react";

const useStyles = makeStyles(() => ({
    bar: {
        top: "0",
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    barFront: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        "& > *": {
            marginLeft: "10px",
            marginRight: "10px",
        },
    },
    barPadding: {
        flexGrow: 1,
    },
    barBack: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
        "& > *": {
            marginLeft: "10px",
            marginRight: "10px",
        },
    }
}));

interface HeadBarProps {
    children?: React.ReactNode
}

export default function HeadBar(props: HeadBarProps) {
    const classes = useStyles();
    const history = useRouter();

    const backHandler = ()=> {
        history.back()
    }

    return (
        <div className={classes.bar}>
            <div className={classes.barFront}>
                <img src={"/back_arrow.svg"} onClick={backHandler} alt="back"/>
                <img src={"/exit.svg"} alt="exit"/>
            </div>

            <div className={classes.barPadding}>
            </div>

            <div className={classes.barBack}>
                {props.children}
            </div>
        </div>
    );
}