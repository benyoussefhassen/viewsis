//import liraries
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import CardImageVertical from '../../../../../../components/Cards/CardImageVertical';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {Post} from '../../../../../../types/api.type';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';

type Props = {
  posts: Post[];
};

// create a component
const HorizontalScrollList = ({posts}: Props) => {
  return (
    <ScrollView style={styles.container} horizontal={true}>
      {posts.map(post => {
        return <CardImageVertical key={post.id_article} post={post} />;
      })}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: MyThemeColors.gray3,
    paddingVertical: pixelSizeVertical(5),
    //marginVertical: pixelSizeVertical(20),
    marginHorizontal: pixelSizeHorizontal(8),
  },
});

//make this component available to the app
export default HorizontalScrollList;
