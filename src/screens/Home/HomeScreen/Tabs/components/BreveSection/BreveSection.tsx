//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import PostDateIconName from '../../../../../../components/Buttons/PostDateIconName';
import {HomeScreenProp} from '../../../../../../navigations/StackNavigator';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {Post, PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';

type Props = {
  id: string;
  title: string;
  icon: string;
  posts: Post[];
};

// create a component
const BreveSection = ({id, title, icon, posts}: Props) => {
  const navigation = useNavigation<HomeScreenProp>();

  const onPostPress = (id: string, titre: string) => {
    navigation.navigate('PostDetailScreen', {
      id: id,
      title: titre,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml xml={icon} />

        <Text style={styles.titleHeader}>{title}</Text>
      </View>
      <View style={styles.list}>
        {posts.map(item => {
          return (
            <Pressable
              style={styles.listItem}
              key={item.id_article}
              onPress={() =>
                onPostPress(item.id_article, item.titre ? item.titre : '')
              }>
              <Text style={styles.listItemTitle}>{item.titre} </Text>
              <PostDateIconName
                dotColor={MyThemeColors.red}
                dateColor={MyThemeColors.black}
                date={item.date}
              />
            </Pressable>
          );
        })}

        <ButtonArrowIcon
          id={id}
          titre={title}
          type={PostsApiType.Category}
          label={'Voir toutes les brèves du « ' + title + ' »'}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: MyThemeColors.gray1,
    paddingLeft: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(5),
  },
  titleHeader: {
    color: MyThemeColors.black,
    fontSize: 24,
    fontFamily: 'Kadwa-Bold',
    marginLeft: pixelSizeHorizontal(5),
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingBottom: pixelSizeVertical(10),
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: MyThemeColors.gray2,
    width: '100%',
    paddingVertical: pixelSizeVertical(10),
  },
  listItemTitle: {
    color: MyThemeColors.black,
    fontSize: fontPixel(16),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    marginBottom: pixelSizeVertical(7),
  },
  listItemDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listItemDateTxt: {
    color: MyThemeColors.black,
    fontSize: fontPixel(12),
    fontFamily: 'Lato',
    marginLeft: pixelSizeHorizontal(-3),
  },
  listItemRedDot: {
    color: MyThemeColors.red,
    fontSize: fontPixel(13),
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default BreveSection;
