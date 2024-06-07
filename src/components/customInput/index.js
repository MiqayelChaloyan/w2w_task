import PropTypes from 'prop-types';
import { useEffect, memo } from 'react';
import { Keyboard, TextInput, View } from 'react-native';
import useDelayDebounce from '../../customHooks';
import palette from '../../assets/theme/theme';
import styles from './style';

const CustomTextInput = ({
  name,
  placeholder,
  onChangeText,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
}) => {
  const [inputValue, setInputValue] = useDelayDebounce('', 500);

  useEffect(() => {
    onChangeText(inputValue);
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        placeholder={placeholder}
        placeholderTextColor={palette.primary_gray}
        style={styles.input}
        variant={'standard'}
        onChangeText={setInputValue}
        keyboardType='numeric'
        returnKeyType='done'
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        onBlur={()=>Keyboard.dismiss()}
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  name: '',
  placeholder: '',
  autoCapitalize: 'none',
  autoCorrect: false,
  secureTextEntry: false,
  keyboardType: 'default',
};

export default memo(CustomTextInput);