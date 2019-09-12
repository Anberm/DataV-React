import React, { useRef } from "react";

import useAutoResize from "../../use/autoResize";

import "./style.less";

export default () => {
  const { width, height, domRef } = useAutoResize();

  const {
    current: {
      animationId1,
      animationId2,
      animationId3,
      animationId4,
      animationId5,
      animationId6,
      animationId7
    }
  } = useRef({
    animationId1: `d10ani1${Date.now()}`,
    animationId2: `d10ani2${Date.now()}`,
    animationId3: `d10ani3${Date.now()}`,
    animationId4: `d10ani4${Date.now()}`,
    animationId5: `d10ani5${Date.now()}`,
    animationId6: `d10ani6${Date.now()}`,
    animationId7: `d10ani7${Date.now()}`
  });

  return (
    <div className="dv-decoration-10" ref={domRef}>
      <svg width={width} height={height}>
        <polyline
          stroke="rgba(0, 194, 255, 0.3)"
          stroke-width="2"
          points={`0, ${height / 2} ${width}, ${height / 2}`}
        />

        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points={`5, ${height / 2} ${width * 0.2 - 3}, ${height / 2}`}
          stroke-dasharray={`0, ${width * 0.2}`}
          fill="freeze"
        >
          <animate
            id={animationId2}
            attributeName="stroke-dasharray"
            values={`0, ${width * 0.2};${width * 0.2}, 0;`}
            dur="3s"
            begin={`${animationId1}.end`}
            fill="freeze"
          />
          <animate
            attributeName="stroke-dasharray"
            values={`${width * 0.2}, 0;0, ${width * 0.2}`}
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </polyline>

        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points={`${width * 0.2 + 3}, ${height / 2} ${width * 0.8 -
            3}, ${height / 2}`}
          stroke-dasharray={`0, ${width * 0.6}`}
        >
          <animate
            id={animationId4}
            attributeName="stroke-dasharray"
            values={`0, ${width * 0.6};${width * 0.6}, 0`}
            dur="3s"
            begin={`${animationId3}.end + 1s`}
            fill="freeze"
          />
          <animate
            attributeName="stroke-dasharray"
            values={`${width * 0.6}, 0;0, ${width * 0.6}`}
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </polyline>

        <polyline
          stroke="rgba(0, 194, 255, 1)"
          stroke-width="2"
          points={`${width * 0.8 + 3}, ${height / 2} ${width - 5}, ${height /
            2}`}
          strke-dasharray={`0, ${width * 0.2}`}
        >
          <animate
            id={animationId6}
            attributeName="stroke-dasharray"
            values={`0, ${width * 0.2};${width * 0.2}, 0`}
            dur="3s"
            begin={`${animationId5}.end + 1s`}
            fill="freeze"
          />
          <animate
            attributeName="stroke-dasharray"
            values={`${width * 0.2}, 0;0, ${width * 0.3}`}
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </polyline>

        <circle cx="2" cy={height / 2} r="2" fill="#03709f">
          <animate
            id={animationId1}
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin={`0s;${animationId7}.end`}
            dur="0.3s"
            fill="freeze"
          />
        </circle>

        <circle cx={width * 0.2} cy={height / 2} r="2" fill="#03709f">
          <animate
            id={animationId3}
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin={`${animationId2}.end`}
            dur="0.3s"
            fill="freeze"
          />
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </circle>

        <circle cx={width * 0.8} cy={height / 2} r="2" fill="#03709f">
          <animate
            id={animationId5}
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin={`${animationId4}.end`}
            dur="0.3s"
            fill="freeze"
          />
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </circle>

        <circle cx={width - 2} cy={height / 2} r="2" fill="#03709f">
          <animate
            id={animationId7}
            attributeName="fill"
            values="#03709f;#00c2ff"
            begin={`${animationId6}.end`}
            dur="0.3s"
            fill="freeze"
          />
          <animate
            attributeName="fill"
            values="#03709f;#03709f"
            dur="0.01s"
            begin={`${animationId7}.end`}
            fill="freeze"
          />
        </circle>
      </svg>
    </div>
  );
};
