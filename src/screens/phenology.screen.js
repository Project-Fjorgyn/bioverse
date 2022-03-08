import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { PhenologyContext } from '../context/phenology.context';
import { Selector } from '../components/selector.components';
import { Phenophase } from '../components/phenology.components';

export const PhenologyScreen = ({ navigation }) => {
  const { phenology, month, updateMonth } = useContext(PhenologyContext);

  const MONTHS = [
    { title: 'January', value: 1 },
    { title: 'February', value: 2 },
    { title: 'March', value: 3 },
    { title: 'April', value: 4 },
    { title: 'May', value: 5 },
    { title: 'June', value: 6 },
    { title: 'July', value: 7 },
    { title: 'August', value: 8 },
    { title: 'September', value: 9 },
    { title: 'October', value: 10 },
    { title: 'November', value: 11 },
    { title: 'December', value: 12 },
  ];

  return (
    <SafeArea>
      <Selector
        title={MONTHS.filter((m) => m.value === month)[0].title}
        items={MONTHS}
        action={updateMonth}
        expanded={false}
      />
      <ScrollView>
        {phenology.map((p) => (
          <Phenophase
            key={p.genus + p.species + p.month + p.phenophase_name}
            name={p.genus + ' ' + p.species}
            description={p.common_name + '\n' + p.phenophase_name}
            onPress={() =>
              navigation.navigate('WebViewScreen', {
                uri: `https://en.wikipedia.org/wiki/${p.genus}_${p.species}`,
              })
            }
          ></Phenophase>
        ))}
      </ScrollView>
    </SafeArea>
  );
};
