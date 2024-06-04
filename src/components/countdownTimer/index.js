import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const CountdownTimer = ({ capturePhoto, disabled, device, timer: frontTimer }) => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [seconds, setSeconds] = useState(null);


    const startCuntdown = (timer) => {
        setTimeout(() => {
            setTimeLeft(timer);
            setSeconds(timer);
        }, 1000)
    }

    useEffect(() => {
        console.log("========", frontTimer);
        let timeoutId = null
        if (device !== 'front' && timeLeft == null) {
             timeoutId = setTimeout(() => {
                startCuntdown(frontTimer);
            }, 4000);
        }

        return () => timeoutId && clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) {
            capturePhoto(seconds);
        }
    }, [timeLeft])

    return (
        <>
            {timeLeft > 0 || timeLeft !== null || device !== 'front' ? (
                <View style={styles.cuntdownTimer}>
                    <Text style={styles.timeLeft}>{timeLeft}</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity disabled={disabled} onPress={() => startCuntdown(10)}>
                        <Text style={[styles.option, { opacity: seconds === 10 ? 5 : 0.5 }]}>10s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={disabled} onPress={() => startCuntdown(15)}>
                        <Text style={[styles.option, { opacity: seconds === 15 ? 5 : 0.5 }]}>15s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={disabled} onPress={() => startCuntdown(20)}>
                        <Text style={[styles.option, { opacity: seconds === 20 ? 5 : 0.5 }]}>20s</Text>
                    </TouchableOpacity>
                </View>
            )
            }
        </>
    );
};

CountdownTimer.propTypes = {
    capturePhoto: PropTypes.func.isRequired,
};

export default memo(CountdownTimer);
