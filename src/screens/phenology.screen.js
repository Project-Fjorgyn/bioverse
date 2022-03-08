import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { PhenologyContext } from '../context/phenology.context';
import { Species } from '../components/species.components';
import { Selector } from '../components/selector.components';

export const PhenologyScreen = () => {
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
      <ScrollView>
        <Selector
          title={MONTHS.filter((m) => m.value === month)[0].title}
          items={MONTHS}
          action={updateMonth}
          expanded={false}
        />
        {phenology.map((p) => (
          <Species
            key={p.genus + p.species + p.month + p.phenophase_name}
            name={p.genus + ' ' + p.species}
            common_name={p.phenophase_name}
          ></Species>
        ))}
      </ScrollView>
    </SafeArea>
  );
};
