//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FolderIcon} from '../../../../../../assets/images';
import {useAppSelector} from '../../../../../../hooks/store.hooks';
import {MyThemeColors} from '../../../../../../theme/Theme';

import ButtonArrowIcon from '../../../../../../components/Buttons/ButtonArrowIcon';
import CardImageHorizontal from '../../../../../../components/Cards/CardImageHorizontal';
import {PostsApiType} from '../../../../../../types/api.type';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../../../utils/PixelSize';

// create a component
const FolderSection = () => {
  const FolderState = useAppSelector(state => state.home.dossier);

  if (FolderState) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <FolderIcon />
          <Text style={styles.headerTxt}>Dossier</Text>
        </View>
        <Text style={styles.titleTxt}>{FolderState.titre}</Text>
        <Text style={styles.descriptionTxt}>{FolderState.description}</Text>
        {FolderState.posts.map(item => {
          return <CardImageHorizontal key={item.id_article} item={item} />;
        })}

        <ButtonArrowIcon
          id={FolderState.id}
          titre={FolderState.titre}
          type={PostsApiType.Dossiers}
          label="Voir tous les dossiers"
        />
      </View>
    );
  } else {
    return null;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: MyThemeColors.white,
    marginHorizontal: pixelSizeHorizontal(20),
    marginVertical: pixelSizeVertical(30),
    borderColor: MyThemeColors.red,
    borderWidth: 1,
    flex: 1,
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(15),
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(10),
  },
  headerTxt: {
    color: MyThemeColors.red,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontSize: fontPixel(20),
    fontWeight: 'bold',
    marginLeft: pixelSizeHorizontal(10),
  },
  titleTxt: {
    color: MyThemeColors.black,
    textAlign: 'left',
    fontFamily: 'Kadwa',
    fontSize: fontPixel(21),
    fontWeight: 'bold',
    marginBottom: pixelSizeVertical(15),
  },
  descriptionTxt: {
    color: MyThemeColors.black,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontSize: fontPixel(14),
    fontWeight: '500',
  },
});

//make this component available to the app
export default FolderSection;
