import React, { useState, useEffect } from "react";
import "./ProEvents.css";
import mobileBottom from "./Event_vector/mobile-bottom.png";
import cloud1 from "./Event_vector/cloud1.png";
import cloud2 from "./Event_vector/cloud2.png";
import eventTop from "./Event_vector/cloud.svg";
import eventBottom from "./Event_vector/bottom.svg";
import { Link } from "react-router-dom";
import events from "./Data/Data";
import cardCorner from "./Event_vector/card_corner.png";
import { Carousel } from "react-bootstrap";
import pro from "./Event_vector/pro.svg";

function ProEvents() {
  const mediaMatch = window.matchMedia("(max-width: 720px)");
  const [mobile, setMobile] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMobile(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const Card = ({ id, eventName, icon }) => {
    return (
      <div className="pro-Card">
        {/* <img src={cardCorner} className="card-corner" /> */}
        <div className="card-content">
          <div className="pro-poster">
            <Link to={`/proevent/${id}`}>
              <img
                src={pro}
                alt={eventName}
                className="poster-img"
                objectFit="contain"
              />
            </Link>

            {/* <p
              className="event-name"
              style={{ color: "grey", fontWeight: "bold", margin: "4px 0px" }}
            >
              {eventName.toUpperCase()}
            </p> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="proevents" id="proevents">
      <img src={eventTop} className="event-vector" style={{ left: "0px" }} />
      <img
        src={eventBottom}
        className="event-vector"
        style={{ bottom: "0px", left: "0px" }}
      />

      <img
        src={cloud1}
        className="mobile-event-vector"
        style={{ top: "0px", left: "0px", width: "100vw" }}
      />
      <img
        src={cloud2}
        className="mobile-event-vector"
        style={{ top: "0px", right: "0px", width: "100vw" }}
      />
      <img
        src={mobileBottom}
        className="mobile-event-vector"
        style={{ bottom: "0px", width: "100vw" }}
      />
      <p
        className="mobile-event-vector"
        style={{
          top: "12vh",
          width: "100vw",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          fontFamily: "Montserrat",
          color: "white",
        }}
      >
        P R O E V E N T S
      </p>

      {!mobile && (
        <div className="events-content">
          <div className="row-1">
            {events.map((event, index) => {
              if (index < 2) {
                return (
                  <Card
                    id={event.id}
                    eventName={event.eventName}
                    icon={event.icon}
                  />
                );
              }
            })}
          </div>
          <div className="row-2">
            {events.map((event, index) => {
              if (index >= 2) {
                return (
                  <Card
                    id={event.id}
                    eventName={event.eventName}
                    icon={event.icon}
                  />
                );
              }
            })}
          </div>
        </div>
      )}
      {mobile && (
        <div className="mobile-card">
          <Carousel
            interval={null}
            indicators={false}
            wrap={false}
            prevLabel=""
            nextLabel=""
          >
            <Carousel.Item>
              <div className="mobile-event">
                <div className="mobile-event-row1">
                  <Card
                    id={events[1].id}
                    eventName={events[1].eventName}
                    icon={events[1].icon}
                  />
                </div>
                <div className="mobile-event-row2">
                  <Card
                    id={events[2].id}
                    eventName={events[2].eventName}
                    icon={events[2].icon}
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="mobile-event">
                <div className="mobile-event-row1">
                  <Card
                    id={events[3].id}
                    eventName={events[3].eventName}
                    icon={events[3].icon}
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
      <div className="tab-card">
        <Carousel interval={null} indicators={false} wrap={false}>
          <Carousel.Item>
            <div className="tab-event">
              <div className="tab-event-row1">
                <Card
                  id={events[1].id}
                  eventName={events[1].eventName}
                  icon={events[1].icon}
                />
                <Card
                  id={events[2].id}
                  eventName={events[2].eventName}
                  icon={events[2].icon}
                />
              </div>
              <div className="tab-event-row2">
                <Card
                  id={events[3].id}
                  eventName={events[3].eventName}
                  icon={events[3].icon}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ProEvents;
