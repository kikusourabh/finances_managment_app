import React from 'react';
import {Text, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import STYLES_CONSTANT from '../config/STYLES';

function LatestCard({styles, iconName, title, amount, color}) {
  return (
    <View style={styles}>
      {iconName === 'piggy-bank' ? (
        <FIcon name={iconName} size={30} color={color} />
      ) : (
        <MIcon name={iconName} size={30} color={color} />
      )}

      <Text style={[STYLES_CONSTANT.contentText, {color: color}]}>{title}</Text>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[STYLES_CONSTANT.contentText, {color: color}]}>
          {amount}
        </Text>
        <MCIcon name="currency-inr" size={20} color={color} />
      </View>
    </View>
  );
}

export default LatestCard;
