import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { PhenologyContext } from '../context/phenology.context';
import { Selector } from '../components/selector.components';
import { Phenophase } from '../components/phenology.components';
import { InfoContext } from '../context/info.context';
import { LocationContext } from '../context/location.context';
import { CreditsContainer, Credits } from '../components/credits.components';

export const PhenologyScreen = ({ navigation }) => {
  const { phenology, month, updateMonth, phenoPhase, setPhenoPhase } = useContext(PhenologyContext);
  const { updateSelection } = useContext(InfoContext);
  const { updateLocationSelection } = useContext(LocationContext);

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

  const phenoPhases = [...new Set(phenology.map((p) => p.phenophase_name))].map((p) => ({
    title: p,
    value: p,
  }));

  return (
    <SafeArea>
      <Selector
        title={MONTHS.filter((m) => m.value === month)[0].title}
        items={MONTHS}
        action={updateMonth}
        expanded={false}
      />
      <Selector
        title={phenoPhases.filter((p) => p.value === phenoPhase)[0].title}
        items={phenoPhases}
        action={setPhenoPhase}
        expanded={false}
      />
      <ScrollView>
        {phenology
          .filter((p) => p.phenophase_name === phenoPhase)
          .map((p) => (
            <Phenophase
              key={p.genus + p.species + p.month + p.phenophase_name}
              name={p.genus + ' ' + p.species}
              description={p.common_name + '\n' + p.phenophase_name}
              onPress={() => {
                updateSelection(p.genus, p.species);
                updateLocationSelection(p.genus, p.species);
                navigation.navigate('Find');
              }}
            ></Phenophase>
          ))}
      </ScrollView>
      <CreditsContainer>
        <Credits>Credit: USANPN.org</Credits>
      </CreditsContainer>
    </SafeArea>
  );
};
