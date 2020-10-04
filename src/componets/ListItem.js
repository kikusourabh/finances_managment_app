import React from 'react';
import {Text, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../config/COLORS';
import STYLES_CONSTANT from '../config/STYLES';

function ListItem({item}) {
  return (
    <View style={{height: 56, flexDirection: 'row', marginBottom: 16}}>
      <View style={{flex: 1}}>
        <View
          style={{
            width: 56,
            height: 56,
            alignItems: 'center',
            borderRadius: 16,
            justifyContent: 'center',
            backgroundColor: COLORS.acent,
          }}>
          {item.icon_tag === 'MaterialIcons' ? (
            <MIcon name={item.icon} size={25} color={COLORS.primary} />
          ) : item.icon_tag === 'MaterialCommunityIcons' ? (
            <MCIcon name={item.icon} size={25} color={COLORS.primary} />
          ) : item.icon_tag === 'Feather' ? (
            <FIcon name={item.icon} size={25} color={COLORS.primary} />
          ) : (
            <F5Icon name={item.icon} size={25} color={COLORS.primary} />
          )}
        </View>
      </View>
      <View style={{flex: 3.5, justifyContent: 'center'}}>
        <Text
          style={[STYLES_CONSTANT.titleText, {fontSize: 16, lineHeight: 22}]}>
          {item.title}
        </Text>
        <Text style={[STYLES_CONSTANT.contentText, {color: COLORS.secondary}]}>
          {item.description}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text>{item.amount}</Text>
        <MCIcon name="currency-inr" size={20} color={COLORS.primary} />
      </View>
    </View>
  );
}

export default ListItem;
