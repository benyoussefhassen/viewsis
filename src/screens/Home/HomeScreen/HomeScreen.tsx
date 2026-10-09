//import liraries
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import LoadingContainer from '../../../components/Containers/LoadingContainer';
import {useAppSelector} from '../../../hooks/store.hooks';
import CategoryTab from './Tabs/CategoryTab';
import Spotlight from './Tabs/Spotlight';
//import {useAppSelector} from '../../../hooks/store.hooks';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: '#705252'}}
    // tabStyle={{width: 100}}
    scrollEnabled={true}
    labelStyle={{fontWeight: '700'}}
  />
);

// create a component
const HomeScreen = () => {
  const layout = useWindowDimensions();
  const menuState = useAppSelector(state => state.home.menu);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Spotlight', title: 'À la une'},
    {key: '2642', title: 'Politique'},
    {key: '2655', title: 'Écologie'},
    {key: '2654', title: 'Société'},
    {key: '2643', title: 'Idées'},
    {key: '2644', title: 'Culture'},
  ]);
  /*
  useEffect(() => {
    console.log('menuState', menuState);
  {key: '2642', title: 'Politique'},
    {key: '2655', title: 'Écologie'},
    {key: '2654', title: 'Société'},
    {key: '2643', title: 'Idées'},
    {key: '2644', title: 'Culture'},
     if (routes.length < 2) {
      routes = [
        ...menuState.map(cat => {
          return {key: cat.id, title: cat.titre};
        }),
      ];
    }
  });
*/
  const renderScene = ({route}: any) => {
    if (route.key === 'Spotlight') {
      return <Spotlight />;
    } else {
      console.log(
        'render scene titre : ' +
          route.titre +
          ' index : ' +
          menuState.findIndex(t => t.id === route.key),
      );
      if (menuState.findIndex(t => t.id === route.key) > -1) {
        const indexCAt = menuState.findIndex(t => t.id === route.key);
        return (
          <CategoryTab
            id={route.key}
            titre={menuState[indexCAt].titre}
            slide={menuState[indexCAt].slide}
            slideHashtags={menuState[indexCAt].slideHashtags}
            posts={menuState[indexCAt].posts}
            loading={
              menuState[indexCAt].posts?.length === 0 &&
              menuState[indexCAt].slideHashtags?.length === 0 &&
              menuState[indexCAt].slide?.length === 0
            }
          />
        );
      } else {
        return <LoadingContainer />;
      }
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      swipeEnabled={false}
      /* needsOffscreenAlphaCompositing={true}
      overScrollMode={'auto'}
      swipeEnabled={true}*/
    />
  );
};

export default HomeScreen;
