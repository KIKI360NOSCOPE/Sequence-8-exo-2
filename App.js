import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Text } from 'react-native';
import { Appbar, Avatar, BottomNavigation } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import CardComponent from '../sequence8exo2/src/components/CardComponents';


const HomeRoute = () => (<ScrollView style={{ flex: 1 }}>
  {data.map((e, k) => {

    const { title, date, distance, duration, picture } = e

    return (
      <CardComponent key={k} title={title} date={date} distance={distance} duration={duration} picture={picture} />
    )

  })}

</ScrollView>)

const HistoRoute = () => <View></View>

const AjoutRoute = () => <View></View>

const ParamsRoute = () => <View></View>

const data = require("../sequence8exo2/assets/data.json")


const App = () => {

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'histo', title: "Histo'", icon: 'history' },
    { key: 'ajout', title: "Ajout'", icon: 'plus-box' },
    { key: 'params', title: "Params'", icon: 'cog-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    histo: HistoRoute,
    ajout: AjoutRoute,
    params: ParamsRoute
  });

  return (
    <PaperProvider style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Activity Tracker" />
        <Avatar.Image style={{ marginRight: 10 }} size={36} source={require('../sequence8exo2/assets/avatar.png')} />
      </Appbar.Header>
      <Text style={{ fontSize: 30, marginBottom: 15, marginTop: 15, fontWeight: 'bold', marginLeft: 10 }}>Home</Text>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      <StatusBar />
    </PaperProvider>
  );
}


export default App