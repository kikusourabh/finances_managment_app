import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import COLORS from '../../config/COLORS';
import STYLES_CONSTANT from '../../config/STYLES';
// import moment from 'moment';
import IOIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Ilist from '../../dummy_data/icome_list.json';
import ListItem from '../../componets/ListItem';

function Income() {
  const [income_list, setIncome_list] = useState(Ilist);
  const [isFilter, setIsFilter] = useState(false);

  const IrenderItem = ({item}) => <ListItem item={item} />;

  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: COLORS.acent,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: COLORS.acent,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(32, 30, 42, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };

  const data = {
    labels: ['July', 'August', 'September', 'October'],
    datasets: [
      {
        data: [18000, 17500, 18500, 20000],
        color: (opacity = 1) => `rgba(71, 145, 255, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      // {
      //   data: [50, 55, 35, 70, 100, 22],
      //   color: (opacity = 1) => `rgba(2, 188, 119, ${opacity})`, // optional
      //   strokeWidth: 2, // optional
      // },
    ],
    // legend: ['January', 'February'], // optional
  };

  return (
    <View style={STYLES_CONSTANT.mainContainer}>
      <View style={STYLES_CONSTANT.bodyContainer}>
        {isFilter ? (
          <View
            style={{
              flexDirection: 'row',
              height: 56,
              marginBottom: 16,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: '100%',
                backgroundColor: COLORS.acent,
                borderRadius: 16,
                width: '35%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[STYLES_CONSTANT.titleText, {fontSize: 20}]}>
                January
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                backgroundColor: COLORS.acent,
                borderRadius: 16,
                width: 56,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[STYLES_CONSTANT.titleText, {fontSize: 20}]}>
                20
              </Text>
            </View>
            <View
              style={{
                height: '100%',
                backgroundColor: COLORS.primary,
                borderRadius: 16,
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  STYLES_CONSTANT.titleText,
                  {fontSize: 20, color: COLORS.acent},
                ]}>
                2020
              </Text>
            </View>

            <TouchableOpacity
              style={{
                height: '100%',
                backgroundColor: COLORS.acent,
                borderRadius: 16,
                width: 56,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setIsFilter(!isFilter)}>
              <MCIcon name="close" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        ) : null}

        <LineChart
          style={{alignItems: 'center', borderRadius: 10}}
          width={screenWidth - 32}
          data={data}
          height={220}
          chartConfig={chartConfig}
        />

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={STYLES_CONSTANT.titleText}>Income</Text>
            <IOIcon name="ios-chevron-down" size={20} color={COLORS.primary} />
          </View>
          {isFilter ? null : (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
              onPress={() => setIsFilter(!isFilter)}>
              <Text style={STYLES_CONSTANT.titleText}>Filter</Text>
              <MCIcon name="filter" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={income_list}
          renderItem={IrenderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Income;
