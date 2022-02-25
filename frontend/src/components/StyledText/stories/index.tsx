import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs, radios } from '@storybook/addon-knobs';

import Heading, { HeadingStyleLevels } from 'components/StyledText/Heading';
import Body, { ValidBodyStyleTypeValues } from 'components/StyledText/Body';
import Label, { LabelStyleLevels } from 'components/StyledText/Label';

import styles from './styles';

storiesOf('StyledText', module)
  .addDecorator(withKnobs)
  .add('All', () => {
    const sampleText = text('Text', 'Sample text');

    return (
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.column}>Heading</Text>
          <Text style={styles.column}>Level 1</Text>
          <Heading style={styles.column} styleLevel="1">
            {sampleText}
          </Heading>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Heading</Text>
          <Text style={styles.column}>Level 2</Text>
          <Heading style={styles.column} styleLevel="2">
            {sampleText}
          </Heading>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Heading</Text>
          <Text style={styles.column}>Level 3</Text>
          <Heading style={styles.column} styleLevel="3">
            {sampleText}
          </Heading>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Heading</Text>
          <Text style={styles.column}>Level 4</Text>
          <Heading style={styles.column} styleLevel="4">
            {sampleText}
          </Heading>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Body</Text>
          <Text style={styles.column}>Default</Text>
          <Body style={styles.column} styleType="default">
            {sampleText}
          </Body>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Body</Text>
          <Text style={styles.column}>Large</Text>
          <Body style={styles.column} styleType="large">
            {sampleText}
          </Body>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Label</Text>
          <Text style={styles.column}>Level 1</Text>
          <Label style={styles.column} styleLevel="1">
            {sampleText}
          </Label>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Label</Text>
          <Text style={styles.column}>Level 2</Text>
          <Label style={styles.column} styleLevel="2">
            {sampleText}
          </Label>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Label</Text>
          <Text style={styles.column}>Level 3</Text>
          <Label style={styles.column} styleLevel="3">
            {sampleText}
          </Label>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Label</Text>
          <Text style={styles.column}>Level 4</Text>
          <Label style={styles.column} styleLevel="4">
            {sampleText}
          </Label>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>Label</Text>
          <Text style={styles.column}>Level 5</Text>
          <Label style={styles.column} styleLevel="5">
            {sampleText}
          </Label>
        </View>
      </ScrollView>
    );
  })
  .add('Heading', () => {
    const sampleText = text('Text', 'Sample text');
    const levels: {
      [key: string]: HeadingStyleLevels;
    } = {
      'Level 1': '1',
      'Level 2': '2',
      'Level 3': '3',
      'Level 4': '4',
    };
    const headingLevel = radios('Heading style level', levels, '1');

    return (
      <Heading style={styles.column} styleLevel={headingLevel}>
        {sampleText}
      </Heading>
    );
  })
  .add('Body', () => {
    const sampleText = text('Text', 'Sample text');
    const types = {
      default: 'default' as ValidBodyStyleTypeValues,
      large: 'large' as ValidBodyStyleTypeValues,
    };
    const styleType = radios('Body style type', types, 'default');

    return (
      <Body style={styles.column} styleType={styleType}>
        {sampleText}
      </Body>
    );
  })
  .add('Label', () => {
    const sampleText = text('Text', 'Sample text');
    const levels: {
      [key: string]: LabelStyleLevels;
    } = {
      'Level 1': '1',
      'Level 2': '2',
      'Level 3': '3',
      'Level 4': '4',
      'Level 5': '5',
    };
    const styleLevel = radios('Label style level', levels, '1');

    return (
      <Label style={styles.column} styleLevel={styleLevel}>
        {sampleText}
      </Label>
    );
  });
