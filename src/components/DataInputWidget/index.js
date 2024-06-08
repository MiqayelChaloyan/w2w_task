import React from "react";
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import PropTypes from 'prop-types';

import Modal from "react-native-modal";

import { RFValue } from "react-native-responsive-fontsize";

import styles from "./style";
import { ButtonsTexts, CancelIcon, GeneralTexts } from "../../constans";
import { horizontalScale } from "../../assets/metrics/metrics";
import { colors } from "../../constans/colors";
import Button from "../button";

const DataInputWidget = ({
    title,
    label,
    isVisible,
    handleChangeModalStatus,
    handleSaveState,
    onChangeText,
    measurements
}) => {
    return (
        <Modal
            animationOutTiming={300}
            animationType="slide"
            isVisible={isVisible}
            transparent
            backdropColor={colors.darkBlue}
            backdropOpacity={0.9}
        >
            <View style={styles.modalContainer}>
                <View style={styles.close}>
                    <TouchableOpacity onPress={handleChangeModalStatus}>
                        <CancelIcon width={horizontalScale(20)} height={RFValue(20)} fill={colors.darkBlue} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeText(value, label)}
                        value={measurements[label.toLowerCase()]}
                        placeholder={label}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={handleSaveState}
                            title={ButtonsTexts.save}
                            btnBgColor={colors.darkBlue}
                            width={horizontalScale(150)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

DataInputWidget.propTypes = {
    label: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    handleChangeModalStatus: PropTypes.func.isRequired,
    handleSaveState: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    measurements: PropTypes.object.isRequired,
};

export default React.memo(DataInputWidget);