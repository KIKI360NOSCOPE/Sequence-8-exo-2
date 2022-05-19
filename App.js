import * as React from 'react';
import { Appbar, Avatar, Card, Title, Paragraph, List } from 'react-native-paper';
import { Platform, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const list = [
  {
    date: '26 mai 2021',
    img: require('../sequence8exo2/assets/damequicours.png'),
    activity: 'Marche à pied',
    distance: '6 Km',
    duration: '0h59m',
  },
  {
    date: '23 mai 2021',
    img: require('../sequence8exo2/assets/velo.png'),
    activity: 'Vélo',
    distance: '10 Km',
    duration: '1h38m',
  },
  {
    date: '20 mai 2021',
    img: require('../sequence8exo2/assets/damequicours.png'),
    activity: 'Marche à pied',
    distance: '2 Km',
    duration: '0h26m',
  },
]

const MyComponent = () => (
  <View style={{ flex: 1 }}>
    <Appbar.Header>
      <Appbar.Content title="Activity Tracker" />
      <Avatar.Image style={{ marginRight: 10 }} size={36} source={require('../sequence8exo2/assets/avatar.png')} />
    </Appbar.Header>
    <Text style={{ fontSize: 30, marginBottom: 15, marginTop: 15, fontWeight: 'bold', marginLeft: 10 }}>Home</Text>
      <Card style={{ borderColor: 'black', borderWidth: 3, marginLeft: 10, marginRight: 10 }}>
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View>
              <Paragraph>26 mai 2021</Paragraph>
              <Title>Marche à pied</Title>
            </View>
            <View style={{ flex: 2, flexDirection: 'row-reverse' }}>
              <Card.Cover style={{ height: 100, width: 150, borderColor: 'black', borderWidth: 3 }} source={require('../sequence8exo2/assets/damequicours.png')} />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Title>Distance</Title>
              <Paragraph style={{ fontSize: 20 }}>6 Km</Paragraph>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
              <View>
                <Title>Durée</Title>
                <Paragraph style={{ fontSize: 20 }}>0h59m</Paragraph>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
  </View>
);

export default MyComponent;