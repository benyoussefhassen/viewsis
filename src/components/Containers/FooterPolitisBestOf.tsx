//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PolitisBestOf} from '../../assets/images';
import {useAppSelector} from '../../hooks/store.hooks';
import {HomeScreenProp} from '../../navigations/StackNavigator';
import {MyThemeColors} from '../../theme/Theme';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';
type Props = {
  marginHorizontal?: number;
  paddingHorizontal?: number;
};
// create a component
const FooterPolitisBestOf = ({paddingHorizontal, marginHorizontal}: Props) => {
  const bestofState = useAppSelector(state => state.home.bestof);
  const navigation = useNavigation<HomeScreenProp>();

  const onPostPress = (id: string, titre: string) => {
    navigation.navigate('PostDetailScreen', {
      id: id,
      title: titre,
    });
  };
  return (
    <View
      style={{
        ...styles.container,
        marginHorizontal: marginHorizontal
          ? pixelSizeHorizontal(marginHorizontal)
          : 0,
        paddingHorizontal: paddingHorizontal
          ? pixelSizeHorizontal(paddingHorizontal)
          : 0,
      }}>
      <View style={styles.containerView}>
        <View style={styles.containerIcon}>
          <PolitisBestOf />
        </View>

        <View style={styles.containerList}>
          {bestofState.map((post, index) => {
            return (
              <Pressable
                style={styles.item}
                key={post.id_article}
                onPress={() =>
                  onPostPress(post.id_article, post.titre ? post.titre : '')
                }>
                <Text style={styles.itemNumber}>{index + 1}</Text>
                <Text style={styles.itemTitle}>{post.titre}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: pixelSizeVertical(30),
  },
  containerView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: pixelSizeVertical(-60),
    marginBottom: -50,
  },
  containerList: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    //marginHorizontal: pixelSizeHorizontal(20),
    marginVertical: pixelSizeVertical(10),
  },
  itemNumber: {
    color: MyThemeColors.red,
    fontSize: fontPixel(34),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    borderRightColor: MyThemeColors.red,
    borderRightWidth: 2,
    marginRight: pixelSizeHorizontal(15),
    paddingRight: pixelSizeHorizontal(10),
  },
  itemTitle: {
    color: MyThemeColors.black,
    fontSize: fontPixel(18),
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default FooterPolitisBestOf;
