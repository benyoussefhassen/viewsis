import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
const HomeIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#b70900" d="M0 0h20.634v20.628H0z" />
      </ClipPath>
    </Defs>
    <Path
      fill={props.focused ? '#b70900' : '#fff'}
      d="M17.5 0A17.5 17.5 0 1 1 0 17.5 17.5 17.5 0 0 1 17.5 0"
    />
    <Path
      fill="#b70900"
      d="M17.5 35A17.5 17.5 0 1 1 35 17.5 17.52 17.52 0 0 1 17.5 35m0-34.125A16.625 16.625 0 1 0 34.125 17.5 16.643 16.643 0 0 0 17.5.875"
    />
    <G clipPath="url(#a)" transform="translate(7 7)">
      <Path
        fill={props.focused ? '#fff' : '#b70900'}
        d="M7.722-.001a7.725 7.725 0 1 0 4.545 13.975l6.3 6.3a1.213 1.213 0 0 0 1.715-1.715l-6.3-6.3A7.719 7.719 0 0 0 7.723-.001Zm0 13.027a5.308 5.308 0 1 1 3.747-1.555 5.3 5.3 0 0 1-3.747 1.555"
      />
    </G>
  </Svg>
);
export default HomeIcon;
