import PropTypes from 'prop-types';
import React, { memo, useCallback, useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GlobalDataContext } from '../../contexts/context';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';

function InstructionsCamera({ navigation, screen, children }) {
    const { setChangeStatusBar } = useContext(GlobalDataContext);

    useFocusEffect(
        useCallback(() => {
            setChangeStatusBar(false);
            return () => {
                setChangeStatusBar(true);
            };
        }, [children]),
    );

    const handleChangeScreen = useCallback(() => {
        navigation.navigate(screen);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {children}
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleChangeScreen}>
                    <Image
                        style={styles.gotItBtn}
                        source={require('../../assets/images/Button.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

InstructionsCamera.propTypes = {
    navigation: PropTypes.object,
    screen: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(InstructionsCamera);
