import { ActivityIndicator, View } from 'react-native';

import { colors } from '../../constans/colors';

import styles from './style';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="medium" color={colors.cyan} />
        </View>
    )
}

export default Loading;