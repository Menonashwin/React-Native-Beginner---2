import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';

const ListItem = ({photo,title,subTitle,isFree,price}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        marginTop:10
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          marginTop: 10,
        }}>
        <Image
          source={photo}
          style={{
            width: '55',
            height: '55',
            borderRadius: 10,
            marginRight: 8,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#333',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#666',
              textTransform: 'uppercase',
            }}>
           {subTitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          }}>
          {isFree == 'Yes' && 'play'}
          {isFree == 'No' && price }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
