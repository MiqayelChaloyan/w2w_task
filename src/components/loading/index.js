import { ActivityIndicator, View } from 'react-native';
import palette from '../../assets/theme/theme';
import styles from './style';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="medium" color={palette.light_blue} />
        </View>
    )
}

export default Loading;