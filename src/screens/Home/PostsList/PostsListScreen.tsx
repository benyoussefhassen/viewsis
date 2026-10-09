//import liraries
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import PostsFlatList from '../../../components/Lists/PostsFlatList';
import HomeService from '../../../services/home.sevices';
import {MyThemeColors} from '../../../theme/Theme';
import {Post} from '../../../types/api.type';

// create a component
const PostsListScreen = ({route}: any) => {
  const {id, type} = route.params;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  // const [postByPage, setPostByPage] = useState<number>(10);
  const [stopLoading, setStopLoading] = useState<boolean>(false);

  const getPosts = useCallback(async () => {
    setLoading(true);
    await HomeService.getPostsData(
      id,
      'getPosts',
      type,
      // 'category' "dossiers" "post_tag",
      page,
      10,
    )
      .then(postsData => {
        console.log('getPosts ' + id + ' page :' + page + ' :');
        const newPosts = [...postsData.articles];
        setPage(page + 1); // increase page by 1
        setPosts([...posts, ...newPosts]);
        if (newPosts.length < 10) {
          setStopLoading(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id, type, page, posts]);

  useEffect(() => {
    console.log('useEffect called');
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    if (!loading && !stopLoading) {
      getPosts(); // method for API call
    }
  };

  if (loading && page == 1) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} style={styles.activityIndicator} />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <PostsFlatList
            posts={posts}
            loading={loading}
            handleLoadMore={handleLoadMore}
          />
        </View>
      </SafeAreaView>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyThemeColors.whiteRedish,
  },

  activityIndicator: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: MyThemeColors.bleu,
  },
});

//make this component available to the app
export default PostsListScreen;
