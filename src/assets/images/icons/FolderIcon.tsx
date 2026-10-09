import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
const FolderIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42.656}
    height={28.457}
    {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M0 0h42.656v28.457H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        fill="#b70900"
        d="m42.389 16.97-5.336 9.19a4.732 4.732 0 0 1-4.149 2.3H3.335a1.756 1.756 0 0 1-1.556-2.668L7.114 16.6a4.8 4.8 0 0 1 4.15-2.371h29.569a1.81 1.81 0 0 1 1.556 2.742m-31.125-5.114a7.131 7.131 0 0 0-6.151 3.557L0 24.233V3.557A3.558 3.558 0 0 1 3.557 0h11.857l4.743 4.743h11.857A3.606 3.606 0 0 1 35.571 8.3v3.557Z"
      />
    </G>
  </Svg>
);
export default FolderIcon;
