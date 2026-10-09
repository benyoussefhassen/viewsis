//import liraries
import React, {memo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FooterPolitisBestOf from '../../../../components/Containers/FooterPolitisBestOf';
import LoadingContainer from '../../../../components/Containers/LoadingContainer';
import {useAppSelector} from '../../../../hooks/store.hooks';
import {MyThemeColors} from '../../../../theme/Theme';
import {pixelSizeVertical} from '../../../../utils/PixelSize';
import AgoraSection from './components/AgoraSection/AgoraSection';
import BreveSection from './components/BreveSection/BreveSection';
import FolderSection from './components/FolderSection/FolderSection';
import HorizontalScrollList from './components/HorizantalScrollList/HorizontalScrollList';
import SlideHashtags from './components/HorizantalScrollList/SlideHashtags';
import RubriqueSection from './components/RubriqueSection/RubriqueSection';

// create a component
const Spotlight = () => {
  const homeState = useAppSelector(state => state.home);

  if (homeState.loading) {
    return <LoadingContainer />;
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <HorizontalScrollList posts={homeState.slide} />
            <SlideHashtags />

            {homeState.breves.map(breve => {
              return (
                <BreveSection
                  id={breve.id}
                  title={breve.titre}
                  icon={breve.icons}
                  posts={breve.posts}
                  key={breve.id}
                />
              );
            })}
            <AgoraSection />
            <FolderSection />
            {homeState.rubriques.map(rubrique => {
              return <RubriqueSection rubrique={rubrique} key={rubrique.id} />;
            })}

            <FooterPolitisBestOf paddingHorizontal={30} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyThemeColors.whiteRedish,
    paddingVertical: pixelSizeVertical(20),
  },
});

//make this component available to the app
export default memo(Spotlight);
