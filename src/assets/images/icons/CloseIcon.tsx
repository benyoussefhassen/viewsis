import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const CloseIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.707}
    height={16.707}
    {...props}>
    <G fill="none" stroke="#705252">
      <Path d="m16.354.354-16 16M.354.354l16 16" />
    </G>
  </Svg>
);
export default CloseIcon;
