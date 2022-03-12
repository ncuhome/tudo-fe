import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import ActCard from "../activity-card";
import { IActlistProps, IActsListAct } from "@/interface";

const ActList: React.FC<IActlistProps> = (props: IActlistProps) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {props.actsList
        ? props.actsList.map((item: IActsListAct) => {
            return (
              <div key={item.id} data-aos="fade-up">
                <Link style={{ color: "unset" }} to="/act-detail">
                  <ActCard
                    date={item.start_time}
                    start_time={item.start_time}
                    end_time={item.EndTime}
                    title={item.title}
                  />
                </Link>
              </div>
            );
          })
        : 
        <div style={{display:"flex",justifyContent:"center"}}>
          <p style={{color:"#a8a8a8"}}>当前没有别的活动咯</p>  
        </div>}
    </>
  );
};

export default ActList
