import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowMoreIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <Path
      fill={props.color ? props.color : '#b70900'}
      d="M7.75 0A7.75 7.75 0 1 1 0 7.75 7.749 7.749 0 0 1 7.75 0m-.906 4.5 2.344 2.25H3.5a.741.741 0 0 0-.75.75V8a.722.722 0 0 0 .75.75h5.688l-2.344 2.281a.747.747 0 0 0-.031 1.063l.343.343a.773.773 0 0 0 1.063 0l4.156-4.156a.736.736 0 0 0 0-1.031L8.219 3.094a.719.719 0 0 0-1.063 0l-.343.344A.746.746 0 0 0 6.844 4.5"
    />
  </Svg>
);
export default ArrowMoreIcon;
