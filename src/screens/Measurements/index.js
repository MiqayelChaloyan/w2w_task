import PropTypes from 'prop-types';
import { useState, memo, useContext, useCallback } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/customInput';
import SaveBuuton from '../../components/saveBtn';
import { GlobalDataContext } from '../../contexts/context';
import { averageFemaleBodyURL, verticalLineURL } from '../../constans/imagePath';
import styles from './style';

function MeasurementsScreen({ navigation }) {
    const [height, setHeight] = useState(null);
    const { data, setData } = useContext(GlobalDataContext);

    const handleSave = useCallback(() => {
        setData({ ...data, height });
        navigation.navigate('DevicePosition');
    }, [height]);

    const goBack = () => navigation.navigate('Gender');

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goBack}>
                        <Text style={styles.arrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        MeasurementsScreen
                    </Text>
                </View>
                <View>
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
                <SaveBuuton handleSave={handleSave} activeButton={height} screen="Measurements" />
            </View>
        </>
    );
};

MeasurementsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default memo(MeasurementsScreen);
