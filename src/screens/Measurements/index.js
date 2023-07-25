import PropTypes from 'prop-types';
import { useState, memo, useContext, useCallback } from 'react';
import { Text, View, Image } from 'react-native';
import CustomTextInput from '../../components/customInput';
import SaveBuuton from '../../components/saveBtn';
import { GlobalDataContext } from '../../contexts/context';
import { averageFemaleBodyURL, verticalLineURL } from '../../constans/imagePath';
import BackIcon from '../../assets/icons/BackIcon.svg';
import styles from './style';

function MeasurementsScreen({ navigation }) {
    const [height, setHeight] = useState(null);
    const { data, setData } = useContext(GlobalDataContext);

    const handleSave = useCallback(() => {
        setData({ ...data, height });
        navigation.navigate('DevicePosition');
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                MeasurementsScreen
            </Text>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    How tall are you?
                </Text>
            </View>
            <View style={styles.inputContain}>
                <CustomTextInput
                    name="height"
                    placeholder="Your height"
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={false}
                />
            </View>
            <View>
                <Image style={styles.AverageFemaleBody} source={averageFemaleBodyURL} />
                <Image style={styles.VerticalLine} source={verticalLineURL} />
            </View>
            <SaveBuuton handleSave={handleSave} />
        </View>
    );
};

MeasurementsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(MeasurementsScreen);
