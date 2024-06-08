import PropTypes from 'prop-types';
import { useState, memo, useCallback } from 'react';
import { Text, View, StatusBar } from 'react-native';

import MyButton from '../../components/button';
import MeasurementsFooter from '../../components/measurementsFooter';

import { horizontalScale, verticalScale } from '../../assets/metrics/metrics';
import { ButtonsTexts, PageName } from '../../constans';
import { colors } from '../../constans/colors';

import { useDispatch } from 'react-redux';
import { addValue } from '../../store/stateSlice';

import styles from './style';


const Button = ({ gender, activeGender, onPress }) => {
  const isActive = activeGender === gender;

  const props = {
      onPress: () => onPress(gender),
      title: gender,
      btnBgColor: isActive ? colors.cyan : 'transparent',
      width: horizontalScale(341),
      height: verticalScale(47),
      borderRadius: verticalScale(15),
      borderWidth: verticalScale(0.5),
      borderColor: isActive ? colors.cyan : colors.white,
  };

  return <MyButton {...props} />;
};

const UserGenderSelection = ({ navigation }) => {
  const [activeGender, setActiveGender] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (gender) => setActiveGender(gender)

  const handleSave = useCallback((gender) => {
      if (gender) {
          dispatch(addValue({ isFemale: gender === ButtonsTexts.female }));
          return navigation.navigate(PageName.measurements);
      }
  }, []);

  return (
    <>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content' />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Hi! How can we refer{'\n'}to you?
          </Text>
          <View style={styles.buttonGroup}>
            <View style={styles.buttonStyle}>
              <Button
                gender={ButtonsTexts.female}
                activeGender={activeGender}
                onPress={handleSubmit}
              />
            </View>
            <View>
              <Button
                gender={ButtonsTexts.male}
                activeGender={activeGender}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
        <MeasurementsFooter
          camera={false}
          handleSave={handleSave}
          param={activeGender}
          disabled={!activeGender}
        />
      </View>
    </>
  );
};

UserGenderSelection.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(UserGenderSelection);
