import React from "react";

const Sidebar = ({ taskIndex, setTaskIndex, tasks }) => {
  const handleTaskChange = (index) => {
    setTaskIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <center>
          <svg
            className="svg__style"
            width="348.76220703125px"
            height="124.39999999999999px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="75.618896484375 12.800000000000004 348.76220703125 124.39999999999999"
            style={{background: "rgba(0, 0, 0, 0)"}}
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter id="editing-extrude-glow">
                <feFlood floodColor="#333333" result="flood-1"></feFlood>
                <feMorphology
                  operator="erode"
                  radius="1"
                  in="SourceAlpha"
                  result="erode"
                ></feMorphology>
                <feComposite
                  operator="in"
                  in="flood-1"
                  in2="erode"
                  result="comp1"
                ></feComposite>
                <feConvolveMatrix
                  order="3,3"
                  divisor="1"
                  in="comp1"
                  result="convolve"
                  kernelMatrix="0 0 0 1 1 1 0 0 0"
                ></feConvolveMatrix>
                <feOffset
                  dx="-3"
                  dy="0"
                  in="convolve"
                  result="extrude"
                ></feOffset>
                <feComposite
                  operator="in"
                  in="flood-1"
                  in2="extrude"
                  result="comp-extrude"
                ></feComposite>
                <feFlood floodColor="#000000" result="flood-2"></feFlood>
                <feComposite
                  operator="in"
                  in="flood-2"
                  in2="SourceAlpha"
                  result="comp2"
                ></feComposite>
                <feMorphology
                  operator="dilate"
                  radius="1"
                  in="comp2"
                  result="dilate"
                ></feMorphology>
                <feOffset
                  dx="-4.5"
                  dy="0"
                  in="dilate"
                  result="offset"
                ></feOffset>
                <feGaussianBlur
                  in="offset"
                  stdDeviation="5.8"
                  result="blur"
                ></feGaussianBlur>
                <feComponentTransfer in="blur" result="shadow">
                  <feFuncA type="linear" slope="0.8" intercept="-0.2"></feFuncA>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="shadow"></feMergeNode>
                  <feMergeNode in="comp-extrude"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#editing-extrude-glow)">
              <g transform="translate(127.85494232177734, 104.7650032043457)">
                <path
                  stroke="#003597"
                  strokeWidth="1"
                  className="path"
                  d="M30.78 0L28.88 0L12.16-32.84L12.16 0L5.75 0L5.75-44.81L12.75-44.81L29.81-11.06L46.91-44.81L53.88-44.81L53.88 0L47.50 0L47.50-32.84L30.78 0ZM73.16 13.44L67.03 13.44L74-3L60.94-33.28L67.41-33.28L77.13-10.38L86.84-33.28L93.31-33.28L73.16 13.44ZM96.50-38.41L96.50-44.81L132.34-44.81L132.34-38.41L117.63-38.41L117.63 0L111.22 0L111.22-38.41L96.50-38.41ZM135.56-6.16L135.56-14.53L135.56-14.53Q135.56-15.81 136.05-16.92L136.05-16.92L136.05-16.92Q136.53-18.03 137.36-18.88L137.36-18.88L137.36-18.88Q138.19-19.72 139.31-20.20L139.31-20.20L139.31-20.20Q140.44-20.69 141.69-20.69L141.69-20.69L157.56-20.69L157.56-27.13L137.47-27.13L137.47-33.28L157.56-33.28L157.56-33.28Q158.84-33.28 159.97-32.80L159.97-32.80L159.97-32.80Q161.09-32.31 161.92-31.48L161.92-31.48L161.92-31.48Q162.75-30.66 163.23-29.53L163.23-29.53L163.23-29.53Q163.72-28.41 163.72-27.13L163.72-27.13L163.72 0L157.56 0L157.56-5.63L157.56-5.63Q157.47-4.47 156.94-3.44L156.94-3.44L156.94-3.44Q156.41-2.41 155.58-1.64L155.58-1.64L155.58-1.64Q154.75-0.88 153.69-0.44L153.69-0.44L153.69-0.44Q152.63 0 151.44 0L151.44 0L141.69 0L141.69 0Q140.44 0 139.31-0.48L139.31-0.48L139.31-0.48Q138.19-0.97 137.36-1.80L137.36-1.80L137.36-1.80Q136.53-2.63 136.05-3.75L136.05-3.75L136.05-3.75Q135.56-4.88 135.56-6.16L135.56-6.16ZM141.69-14.53L141.69-6.16L157.56-6.16L157.56-14.53L141.69-14.53ZM173.31-6.16L194.06-6.16L194.06-13.88L179.47-13.88L179.47-13.88Q178.19-13.88 177.06-14.36L177.06-14.36L177.06-14.36Q175.94-14.84 175.11-15.67L175.11-15.67L175.11-15.67Q174.28-16.50 173.80-17.63L173.80-17.63L173.80-17.63Q173.31-18.75 173.31-20.03L173.31-20.03L173.31-27.13L173.31-27.13Q173.31-28.41 173.80-29.53L173.80-29.53L173.80-29.53Q174.28-30.66 175.11-31.48L175.11-31.48L175.11-31.48Q175.94-32.31 177.06-32.80L177.06-32.80L177.06-32.80Q178.19-33.28 179.47-33.28L179.47-33.28L198.94-33.28L198.94-27.13L179.47-27.13L179.47-20.03L194.06-20.03L194.06-20.03Q195.34-20.03 196.45-19.55L196.45-19.55L196.45-19.55Q197.56-19.06 198.41-18.23L198.41-18.23L198.41-18.23Q199.25-17.41 199.73-16.28L199.73-16.28L199.73-16.28Q200.22-15.16 200.22-13.88L200.22-13.88L200.22-6.16L200.22-6.16Q200.22-4.88 199.73-3.75L199.73-3.75L199.73-3.75Q199.25-2.63 198.41-1.80L198.41-1.80L198.41-1.80Q197.56-0.97 196.45-0.48L196.45-0.48L196.45-0.48Q195.34 0 194.06 0L194.06 0L173.31 0L173.31-6.16ZM240.47 0L231.81 0L215.94-14.22L215.94 0L209.81 0L209.81-46.09L215.94-46.09L215.94-20.16L230.53-33.28L239.19-33.28L221.31-17.22L240.47 0Z"
                  fill="#8fb9db"
                ></path>
              </g>
            </g>
            </svg>
        </center>
      </div>
      <div className="sidebar__list">
        {tasks.map((val, index) => (
          <button
            className={`sidebar__button ${taskIndex === index ? "active" : ""}`}
            onClick={() => handleTaskChange(index)}
            key={index}
          >
            Task - {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
