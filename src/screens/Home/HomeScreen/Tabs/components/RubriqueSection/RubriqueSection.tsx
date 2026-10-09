//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {HomeRubriques} from '../../../../../../store/reducers/home/home.type';

import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import CardImageHorizontal from '../../../../../../components/Cards/CardImageHorizontal';
import {MyThemeColors} from '../../../../../../theme/Theme';
import {PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';

type Props = {
  rubrique: HomeRubriques;
};

// create a component
const RubriqueSection = ({rubrique}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml color={MyThemeColors.black} xml={rubrique.icons} />

        <Text style={styles.titleHeader}>{rubrique.titre}</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.navigationContainer}>
          <ButtonArrowIcon
            id={rubrique.id}
            titre={rubrique.titre}
            type={PostsApiType.Category}
            label="Voir tous les articles"
          />
        </View>

        {rubrique.posts.map((item, index) => {
          return (
            <CardImageHorizontal
              key={item.id_article}
              item={item}
              image={index < 2}
            />
          );
        })}
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
    paddingVertical: pixelSizeVertical(10),
  },
  titleHeader: {
    color: MyThemeColors.red,
    fontSize: fontPixel(24),
    fontFamily: 'Kadwa',
    fontWeight: 'bold',
    marginLeft: pixelSizeHorizontal(5),
  },
  navigationContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingBottom: pixelSizeVertical(30),
  },
});

//make this component available to the app
export default RubriqueSection;
