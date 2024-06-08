import PropTypes from 'prop-types';
import { useState, memo, useCallback, useMemo } from 'react';

import { Text, View, Image, StatusBar } from 'react-native';

import Toast from 'react-native-simple-toast';

import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../../store/stateSlice';

import MeasurementsFooter from '../../components/measurementsFooter';
import DataInputWidget from '../../components/DataInputWidget';
import MeasurementsHeader from '../../components/measurementsHeader';
import HighlightedButton from '../../components/highlightButton';
import ToggleButton from '../../components/toggleButton';

import { horizontalScale } from '../../assets/metrics/metrics';

import { GeneralTexts, ImagePaths, PageName, ToastTexts } from '../../constans';

import styles from './style';


function Measurements({ navigation }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [height, setHeight] = useState('');
    const [unitOfMeasurement, setUnitOfMeasurement] = useState('cm');
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const isDisabled = !(height);

    const handleSave = () => {
        if (!height) {
            Toast.showWithGravity(ToastTexts.HeightNonEmpty, Toast.SHORT, Toast.BOTTOM);
            return
        }
        dispatch(addValue({ height, isCentimeter: unitOfMeasurement == 'cm' }));
        return navigation.navigate(PageName.devicePosition);
    }

    const imageSource = useMemo(() => state.isFemale ? ImagePaths.femaleFront : ImagePaths.maleFront, [state.isFemale]);

    const handleOpening = () => setIsVisible(true);

    const handleChangeMeasurement = useCallback((value) => {
        setUnitOfMeasurement(value)
    }
        , [handleChangeMeasurement]);

    const handleSaveState = useCallback(() => handleChangeModalStatus(), []);
    const handleChangeModalStatus = useCallback(() => setIsVisible(false), [isKeyboardVisible]);
    const handleChangeText = useCallback((value) => setHeight(value)
        , []);

    return (
        <>
            <DataInputWidget
                title={GeneralTexts.measurementsTitle}
                label='Height'
                isVisible={isVisible}
                handleChangeModalStatus={handleChangeModalStatus}
                handleSaveState={handleSaveState}
                onChangeText={handleChangeText}
                measurements={{ height }}
            />
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <MeasurementsHeader />
                </View>
                <View style={styles.main}>
                    <Text style={styles.headerText}>
                        {GeneralTexts.measurementsTitle}
                    </Text>
                    <ToggleButton
                        rightText='ft in'
                        leftText='cm'
                        width={horizontalScale(98)}
                        handleChange={handleChangeMeasurement}
                        value1={unitOfMeasurement}
                        fontSize={20}
                    />
                </View>
                <View style={styles.section}>
                    <Image source={imageSource} style={styles.scilet} />
                    {height && <View style={styles.size}>
                        <Text style={styles.sizeText}>
                            {height}
                        </Text>
                    </View>}
                </View>
                <View style={styles.highlightedButton}>
                    <HighlightedButton
                        onPress={handleOpening}
                        label='height'
                        measurements={{ height }}
                    />
                </View>
            </View>
            <MeasurementsFooter
                camera={true}
                handleSave={handleSave}
                disabled={isDisabled}
            />
        </>
    );
};

Measurements.propTypes = {
    navigation: PropTypes.object,
};

export default memo(Measurements);
