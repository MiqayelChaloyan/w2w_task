import PropTypes from 'prop-types';
import { useContext, useState, memo, useCallback } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import SaveButton from '../../components/saveBtn';
import { GlobalDataContext } from '../../contexts/context';
import styles from './style';

const GenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const { data, setData } = useContext(GlobalDataContext);

  const handleChangeGender = useCallback((selectedGender, buttonKey) => {
    setGender(selectedGender);
    setActiveButton(buttonKey);
  }, []);

  const handleSave = useCallback(() => {
    setData({ ...data, gender });
    navigation.navigate('Measurements');
  }, [data, gender, setData, navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.container}>
        <Text style={styles.gender}>Gender</Text>
        <View style={styles.genderOptions}>
          <Text style={styles.title}>Hi! How can we refer to you?</Text>
          <TouchableOpacity
            onPress={() => handleChangeGender('She', 'button1')}
            style={[
              styles.button,
              activeButton === 'button1' && styles.activeButton,
            ]}
          >
            <View>
              <Text style={styles.genderBtn}>She/Her</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeGender('He', 'button2')}
            style={[
              styles.button,
              activeButton === 'button2' && styles.activeButton,
            ]}
          >
            <View>
              <Text style={styles.genderBtn}>He/Him</Text>
            </View>
          </TouchableOpacity>
        </View>
        <SaveButton handleSave={handleSave} activeButton={activeButton} screen="Gender" />
      </View>
    </>
  );
};

GenderScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(GenderScreen);
