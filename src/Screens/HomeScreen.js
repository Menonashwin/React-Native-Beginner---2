import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import User from '../assets/images/userprofile.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {freeGames, paidGames} from '../model/data';

const HomeScreen = () => {
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const UpcomingGames = [
    {
      id: 1,
      image: require('../assets/images/slide/game-1.jpeg'),
    },
    {
      id: 2,
      image: require('../assets/images/slide/game-2.jpeg'),
    },
    {
      id: 3,
      image: require('../assets/images/slide/game-3.png'),
    },
  ];

  const {width} = Dimensions.get('window');

  return (
    <View>
      <SafeAreaView>
        <ScrollView style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontFamily: 'Robot-Medium'}}>
              Hello John Doe,
            </Text>
            <User
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: '#c6c6c6',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 13,
              marginTop: 20,
            }}>
            <Icon name="search" size={20} />
            <TextInput placeholder="Search" />
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Upcoming Games
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: '#0aada8',
                }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <Carousel
              width={width - 40}
              height={180}
              autoPlay={true}
              data={UpcomingGames}
              scrollAnimationDuration={1000}
              renderItem={({item}) => (
                <View style={styles.CarouselItem}>
                  <Image
                    source={item.image}
                    style={styles.carouselImage}
                    resizeMode="cover"
                  />
                </View>
              )}
            />
          </View>

          <View>
            <CustomSwitch
              selectionMode={1}
              option1="free to play"
              option2="paid games"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          {gamesTab == 1 &&
            freeGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                
              />
            ))}
          {gamesTab == 2 && paidGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
  },
  carouselImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;
