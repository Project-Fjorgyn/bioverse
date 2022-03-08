import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { PhenologyContext } from '../context/phenology.context';
import { Species } from '../components/species.components';

export const PhenologyScreen = () => {
  const { phenology } = useContext(PhenologyContext);
  return (
    <SafeArea>
      <ScrollView>
        {phenology.map((p) => (
          <Species
            key={p.species + p.month + p.phenophase_name}
            name={p.genus + ' ' + p.species}
            common_name={p.phenophase_name}
          ></Species>
        ))}
      </ScrollView>
    </SafeArea>
  );
};
