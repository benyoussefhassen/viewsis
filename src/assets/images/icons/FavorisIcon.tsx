import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FavorisIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} {...props}>
    <Path
      fill={props.focused ? '#b70900' : '#fff'}
      d="M17.5 0A17.5 17.5 0 1 1 0 17.5 17.5 17.5 0 0 1 17.5 0"
    />
    <Path
      fill="#b70900"
      d="M17.5 35A17.5 17.5 0 1 1 35 17.5 17.52 17.52 0 0 1 17.5 35m0-34.125A16.625 16.625 0 1 0 34.125 17.5 16.643 16.643 0 0 0 17.5.875"
    />
    <Path
      fill={props.focused ? '#fff' : 'none'}
      stroke={props.focused ? '#fff' : '#b70900'}
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M10.5 9.25v17.964l7.388-7.371 7.388 7.371V9.25Z"
    />
  </Svg>
);
export default FavorisIcon;
