import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const CountdownTimer = ({ capturePhoto }) => {
    const [timeLeft, setTimeLeft] = useState(null);
    const [activeTimer, setActiveTimer] = useState(null);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    useEffect(() => {
        if(timeLeft === 0) {
            capturePhoto();
            setTimeLeft(null);
        }
    }, [timeLeft])

    const startCuntdown = (timer, timerString) => {
        setActiveTimer(timerString)
        setTimeout(() => {
            setTimeLeft(timer);
        }, 1000)
    }

    return (
        <>
            {timeLeft > 0 ? (
                <View style={styles.cuntdownTimer}>
                    <Text style={styles.timeLeft}>{timeLeft}</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => startCuntdown(10, 'ten')}>
                        <Text style={[styles.option, { opacity: activeTimer === 'ten' ? 5 : 0.5 }]}>10s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => startCuntdown(15, 'twenty')}>
                        <Text style={[styles.option, { opacity: activeTimer === 'twenty' ? 5 : 0.5 }]}>15s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => startCuntdown(20, 'fifteen')}>
                        <Text style={[styles.option, { opacity: activeTimer === 'fifteen' ? 5 : 0.5 }]}>20s</Text>
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
