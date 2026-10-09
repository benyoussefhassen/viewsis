import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
const ClockCircleIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M0 0h14.748v14.748H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        fill="#b70900"
        d="M7.374 0A7.374 7.374 0 1 1 0 7.375 7.373 7.373 0 0 1 7.374 0m0 13.32a5.947 5.947 0 1 0-5.947-5.945 5.945 5.945 0 0 0 5.947 5.945m1.814-3.091L6.661 8.385a.324.324 0 0 1-.12-.267V3.212a.362.362 0 0 1 .359-.357h.95a.383.383 0 0 1 .357.357v4.222l1.962 1.457a.347.347 0 0 1 .089.505l-.565.743a.346.346 0 0 1-.505.09"
      />
    </G>
  </Svg>
);
export default ClockCircleIcon;
