import React, {memo} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {MyThemeColors} from '../../theme/Theme';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/PixelSize';

type Props = React.ComponentProps<typeof TextInput> & {
  errorText?: string;
  label?: string;
  icon?: React.JSX.Element;
};

const TextInputLabel = ({errorText, label, icon, ...props}: Props) => (
  <View style={styles.container}>
    <View style={styles.containerLabel}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {icon ? icon : null}
    </View>

    <TextInput style={styles.input} {...props} />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: pixelSizeVertical(8),
  },
  containerLabel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(4),
    paddingVertical: pixelSizeVertical(4),
  },
  input: {
    backgroundColor: MyThemeColors.white,
  },
  error: {
    fontSize: fontPixel(14),
    color: MyThemeColors.red,
    paddingHorizontal: pixelSizeHorizontal(4),
    paddingTop: pixelSizeVertical(4),
  },
  label: {
    fontFamily: 'Lato-Italic',
    fontSize: fontPixel(12),
    color: MyThemeColors.brown,
  },
});

export default memo(TextInputLabel);
