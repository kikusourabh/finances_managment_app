import React, {useState} from 'react';
import {Text, View} from 'react-native';
import COLORS from '../../config/COLORS';
import STYLES_CONSTANT from '../../config/STYLES';
import {styles} from './styles';
import LatestCard from '../../componets/LatestCard';
import IOIcon from 'react-native-vector-icons/Ionicons';
import Elist from '../../dummy_data/expenses_list.json';
import Slist from '../../dummy_data/saving_list.json';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '../../componets/ListItem';

function Home() {
  const [expenses_list, setExpenses_list] = useState(Elist);
  const [saving_list, setSaving_list] = useState(Slist);

  const ErenderItem = ({item}) => <ListItem item={item} />;
  const SrenderItem = ({item}) => <ListItem item={item} />;

  return (
    <View style={STYLES_CONSTANT.mainContainer}>
      <View style={STYLES_CONSTANT.bodyContainer}>
        <View style={{flex: 1}}>
          <Text style={STYLES_CONSTANT.titleText}>Latest</Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <LatestCard
              styles={[styles.latestContainer, {marginEnd: 8}]}
              iconName="payments"
              title="Income"
              amount="20,000"
              color={COLORS.primary}
            />

            <LatestCard
              styles={[
                styles.latestContainer,
                {marginHorizontal: 8, backgroundColor: COLORS.primary},
              ]}
              iconName="payment"
              title="Expenses"
              amount="20,000"
              color={COLORS.acent}
            />

            <LatestCard
              styles={[
                styles.latestContainer,
                {marginHorizontal: 8, backgroundColor: COLORS.acent},
              ]}
              iconName="piggy-bank"
              title="Savings"
              amount="10,000"
              color={COLORS.primary}
            />
          </View>
        </View>
        <View style={{flex: 2}}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 16,
              alignItems: 'center',
            }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={STYLES_CONSTANT.titleText}>Expenses</Text>
              <IOIcon
                name="ios-chevron-down"
                size={20}
                color={COLORS.primary}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={STYLES_CONSTANT.titleText}>All</Text>
              <IOIcon
                name="ios-chevron-forward"
                size={20}
                color={COLORS.primary}
              />
            </View>
          </View>
          <FlatList
            data={expenses_list}
            renderItem={ErenderItem}
            showsVerticalScrollIndicator={false}
          />

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 16,
              alignItems: 'center',
            }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={STYLES_CONSTANT.titleText}>Expenses</Text>
              <IOIcon
                name="ios-chevron-down"
                size={20}
                color={COLORS.primary}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={STYLES_CONSTANT.titleText}>All</Text>
              <IOIcon
                name="ios-chevron-forward"
                size={20}
                color={COLORS.primary}
              />
            </View>
          </View>
          <FlatList
            data={saving_list}
            renderItem={SrenderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
