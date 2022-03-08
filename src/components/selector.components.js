import React, { useState } from 'react';
import styled from 'styled-components/native';
import { List } from 'react-native-paper';

import { theme } from '../theme';

const AccordionWithBackground = styled(List.Accordion)`
  background-color: ${(props) => props.theme.colors.ui[1]};
`;

const Option = styled(List.Item)`
  background-color: ${(props) => props.theme.colors.ui[1]};
`;

export function Selector({ title, items, action }) {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <AccordionWithBackground
      title={title}
      titleStyle={{ fontFamily: theme.fonts.heading, color: theme.colors.ui[3] }}
      expanded={expanded}
      onPress={handlePress}
    >
      {items.map((item) => (
        <Option
          key={item.value}
          title={item.title}
          titleStyle={{ fontFamily: theme.fonts.heading, color: theme.colors.ui[2] }}
          onPress={() => {
            action(item.value);
            setExpanded(!expanded);
          }}
        ></Option>
      ))}
    </AccordionWithBackground>
  );
}
