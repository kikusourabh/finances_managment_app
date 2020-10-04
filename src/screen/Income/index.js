import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import COLORS from '../../config/COLORS';
import STYLES_CONSTANT from '../../config/STYLES';

function Income() {
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
    labels: ['week-1', 'week-2', 'week-3', 'week-4'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(71, 145, 255, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [50, 55, 35, 70, 100, 22],
        color: (opacity = 1) => `rgba(2, 188, 119, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['January', 'February'], // optional
  };

  return (
    <View style={STYLES_CONSTANT.mainContainer}>
      <LineChart
        style={{alignItems: 'center', marginTop: 16, borderRadius: 10}}
        width={screenWidth - 32}
        data={data}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
}

export default Income;
