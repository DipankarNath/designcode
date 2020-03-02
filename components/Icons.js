import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const NotificationIcon = props => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#4775F2">
        <Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const CloseIcon = props => {
  return (
    <Svg height={16.263} width={16.263} {...props}>
      <Path
        fill="#4775F2"
        fillRule="evenodd"
        d="M1.147 13.022L13.049 1.12a1.5 1.5 0 012.121 2.121L3.268 15.144a1.5 1.5 0 01-2.121-2.121z"
      />
      <Path
        fill="#4775F2"
        fillOpacity={0.49}
        fillRule="evenodd"
        d="M3.182 1.06l12.02 12.021a1.5 1.5 0 01-2.121 2.121L1.061 3.183a1.5 1.5 0 012.121-2.121z"
      />
    </Svg>
  );
};

export const ModeIcon = props => {
  return (
    <Svg height={16} width={16} {...props}>
      <Path
        fill="#546BFB"
        fillRule="evenodd"
        d="M4.3 4.1c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1 0 5.7 0 2.9 2.7L.7.5 0 6.9l6.4-.7-2.1-2.1z"
      />
      <Path
        fill="#D7DCFF"
        fillRule="evenodd"
        d="M15.6 8.3L9.2 9l2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z"
      />
    </Svg>
  );
};

export const LogoutIcon = props => {
  return (
    <Svg height={16} width={16.1} {...props}>
      <Path
        fill="#546BFB"
        fillRule="evenodd"
        d="M8 2H3.4l3.3 3.3c.2.2.3.4.3.7v9c0 .4-.2.8-.6.9-.1.1-.3.1-.4.1-.3 0-.5-.1-.7-.3l-5-5c-.2-.2-.3-.4-.3-.7V1c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v3H8V2zM2 9.6l3 3V6.4l-3-3v6.2z"
      />
      <Path
        fill="#D7DCFF"
        fillRule="evenodd"
        d="M15.7 7.3L12 3.6 10.6 5l2 2H8v2h4.6l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4z"
      />
    </Svg>
  );
};

export const CoursesIcon = props => {
  return (
    <Svg height={16} width={16.035} {...props}>
      <Path
        fill="#7D8FFF"
        fillRule="evenodd"
        d="M5.625 12.425h2c.6 0 1-.4 1-1v-7.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3l-3.8-9.3c-.2-.5-.8-.8-1.3-.5l-1.8.8c-.1-.4-.5-.8-1-.8h-2c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z"
      />
      <Path
        fill="#546BFB"
        fillRule="evenodd"
        d="M1 12.425h2c.6 0 1-.4 1-1v-10c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z"
      />
      <Path fill="#D7DCFF" fillRule="evenodd" d="M16 14H0v2h16v-2z" />
    </Svg>
  );
};

export const PlayIcon = props => {
  return (
    <Svg height={16.115} width={16} {...props}>
      <Path
        fill="#546BFB"
        fillRule="evenodd"
        d="M14 8.057c0 .001-.159-.632-.427-.819l-10-7A1 1 0 002 1.057v14.001a.999.999 0 001.573.819l10-7A.995.995 0 0014 8.059v-.002z"
      />
    </Svg>
  );
};

export const StarIcon = props => {
  return (
    <Svg height={16} width={16.035} {...props}>
      <Path
        fill="#546BFB"
        fillRule="evenodd"
        d="M15.162 5.057l-4.317-.628L8.918.518a1.041 1.041 0 00-1.8 0L5.19 4.43l-4.317.627a1 1 0 00-.556 1.706L3.44 9.808l-.737 4.3a1 1 0 001.45 1.054l3.864-2.031 3.86 2.029a1 1 0 001.452-1.054l-.737-4.3 3.125-3.043a1 1 0 00-.556-1.706z"
      />
    </Svg>
  );
};
