//import liraries
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {MyThemeColors} from '../../theme/Theme';
import {Post} from '../../types/api.type';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../utils/PixelSize';
import CardPostListItem from '../Cards/CardPostListItem';
import ItemSeparatorView from '../Containers/ItemSeparatorView';
type Props = {
  posts: Post[];
  loading: boolean;
  handleLoadMore?: () => void;
  renderHeader?: () => React.JSX.Element | null;
};
const renderSeparator = () => {
  return <ItemSeparatorView height={1.5} marginHorizontal={20} />;
};
// create a component
const PostsFlatList = ({
  posts,
  loading,
  handleLoadMore,
  renderHeader,
}: Props) => {
  const renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!loading) {
      return null;
    }
    return (
      <ActivityIndicator size={'large'} style={styles.activityIndicator} />
    );
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <CardPostListItem post={item} />}
      keyExtractor={(item, index) => item.id_article + '-' + index.toString()}
      ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={renderHeader}
      onEndReached={handleLoadMore}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: MyThemeColors.whiteRedish,
  },

  activityIndicator: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: MyThemeColors.bleu,
    paddingBottom: pixelSizeVertical(20),
  },
  footer: {
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default PostsFlatList;
