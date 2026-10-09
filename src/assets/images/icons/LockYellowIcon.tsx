import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';
const LockYellowIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <G transform="translate(-422 -629)">
      <Rect
        width={16}
        height={16}
        fill="#ffe499"
        rx={3}
        transform="translate(422 629)"
      />
      <Path
        fill="#1c0000"
        d="M433.258 636.239a.947.947 0 0 1 .887.974v3.9a.933.933 0 0 1-.887.974h-6.512a.922.922 0 0 1-.888-.976v-3.9a.935.935 0 0 1 .888-.974h.444v-1.46a2.969 2.969 0 0 1 2.81-3.086 2.982 2.982 0 0 1 2.81 3.086v1.462Zm-1.923 0v-1.462a1.421 1.421 0 0 0-1.335-1.462 1.408 1.408 0 0 0-1.331 1.462v1.462Z"
      />
    </G>
  </Svg>
);
export default LockYellowIcon;
