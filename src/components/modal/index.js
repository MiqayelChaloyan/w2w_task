import PropTypes from 'prop-types';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './style';
import { PageName } from '../../constans';

const ErrorModal = ({modalVisible, setModalVisible, navigation}) => {

    const handleTryAgain = () => {
        setModalVisible(!modalVisible);
        navigation.navigate(PageName.gender);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>There is a problem with the server, please try again.</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleTryAgain}>
                            <Text style={styles.textStyle}>Try again</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

ErrorModal.propTypes = {
    navigation: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool,
    setModalVisible: PropTypes.func,
};


export default ErrorModal;
