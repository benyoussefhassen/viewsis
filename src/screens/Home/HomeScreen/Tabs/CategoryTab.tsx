//import liraries
import React, {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonHashTagItem from '../../../../components/Buttons/ButtonHashTagItem';
import LoadingContainer from '../../../../components/Containers/LoadingContainer';
import PostsFlatList from '../../../../components/Lists/PostsFlatList';
import {HomeSlideHashtags} from '../../../../store/reducers/home/home.type';
import {MyThemeColors} from '../../../../theme/Theme';
import {Post} from '../../../../types/api.type';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../utils/PixelSize';
import HorizontalScrollList from './components/HorizantalScrollList/HorizontalScrollList';

type Props = {
  id: string;
  titre?: string;
  slide?: Post[];
  slideHashtags?: HomeSlideHashtags[];
  posts?: Post[];
  loading?: boolean;
};

// create a component
const CategoryTab = ({
  id,
  titre,
  slide = [],
  slideHashtags = [],
  posts = [],
  loading = false,
}: Props) => {
  const renderHeader = () => {
    return (
      <View
        style={styles.containerHeader}
        key={'category-Tab-' + titre + '-' + id}>
        {slide.length > 0 && <HorizontalScrollList posts={slide} />}
        {slideHashtags.length > 0 && (
          <ScrollView style={styles.containerScrollView} horizontal={true}>
            {slideHashtags.map(tag => {
              return (
                <ButtonHashTagItem
                  key={tag.id}
                  id={tag.id}
                  titre={tag.titre}
                  active={true}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    );
  };
  if (loading) {
    return <LoadingContainer />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <PostsFlatList
        posts={posts}
        loading={false}
        renderHeader={renderHeader}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.whiteRedish,
  },
  containerHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: pixelSizeVertical(20),
  },

  containerScrollView: {
    paddingTop: pixelSizeVertical(15),
    paddingBottom: pixelSizeVertical(10),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //width: '100%',
    flex: 1,
    borderColor: MyThemeColors.gray1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(15),
  },
  cardTitle: {
    fontSize: fontPixel(21),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    marginVertical: pixelSizeVertical(10),
    color: MyThemeColors.black,
  },
  cardHeadline: {
    fontSize: fontPixel(15),
    fontFamily: 'Lato',
    fontWeight: '500',
    marginVertical: pixelSizeVertical(10),
    color: MyThemeColors.black,
  },
  cardImage: {
    width: '100%',
    height: heightPixel(250),
    resizeMode: 'stretch',
  },
});

//make this component available to the app
export default memo(CategoryTab);
