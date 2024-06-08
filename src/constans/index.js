import { Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import CameraIcon from '../assets/icons/camera.svg';
import CancelIcon from '../assets/icons/cancel.svg';
import BackIcon from '../assets/icons/back.svg';
import TriangleIcon from '../assets/icons/triangle.svg';

const PageName = {
    gender: 'gender',
    measurements: 'measurements',
    devicePosition: 'devicePosition',
    instructions: 'instructions',
    cameraFront: 'cameraFront',
    cameraSide: 'cameraSide',
    scann: 'scann'
};

const Styles = {
    // font sizes
    titleFontSize: RFValue(24),
    infoTextFontSize: RFValue(22),
    appTextFontSize: RFValue(12),
    infoTextTitle: RFValue(12),
    buttonFontSize: RFValue(14),
    inputFontSize: RFValue(14),
    inputModalTitleFontSize: RFValue(20),

    // font family
    fontFamily: 'SF-Pro-Display-Medium',

    // margins
    pageTitleMarginBottom: 10,
    pageTitleMarginLeft: 16,

    // font weights
    fontWeightThin: '100', // Thin
    fontWeightUltraLight: '200', // Ultra Light
    fontWeightLight: '300', // Light
    fontWeightRegular: '400', // Regular
    fontWeightMedium: '500', // Medium
    fontWeightSemibold: '600', // Semibold
    fontWeightBold: '700', // Bold
    fontWeightHeavy: '800', // Heavy
    fontWeightBlack: '900', // Black

    // activity indicator style
    smallSize: 'small',
    marginRightIndicator: 10,

    // flex row direction
    flexRowDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // Direction
    center: 'center',

    // Screen size
    fullSize: '100%',
    fullHeight: '100%',

    dialogContainer: {
        width: '80%',
        borderRadius: 15
    },

    modalize: {
        paddingHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    wrongDataContent: {
        flex: 1,
        justifyContent: 'center'
    },

    contentCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const ImagePaths = {
    maleFront: require('../assets/images/male/front.png'),
    femaleFront: require('../assets/images/female/front.png'),
    devicePosition: require('../assets/images/devicePosition.png'),
    goButton: require('../assets/images/button.png'),
    front: require('../assets/images/hourglassFront.png'),
    profile: require('../assets/images/hourglassProfile.png'),
    ring: require('../assets/images/Ring.png'),
    degree: require('../assets/images/Degree.png'),
    frontLook: require('../assets/images/Hourglass2.png'),
    sideLook:  require('../assets/images/Hourglass.png'),
    arrow: require('../assets/images/Arrow.png')
};

// const Hosts = {
//     service: 'https://wearify.ai/terms',
//     privacyPolicy: 'https://wearify.ai/privacy',
// };

const Position = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
    center: 'center'
};

const Typeof = {
    number: 'number',
    object: 'object',
    string: 'string',
    boolean: 'boolean'
};

const ToastTexts = {
    HeightNonEmpty: 'Height can not be empty',
    positionCamera: 'Hold your phone vertically until the frame turns green',
    sidePhoto: 'Turn left for a side photo'
};

const GeneralTexts = {
    devicePositionTitle: 'Device Position',
    devicePosition: 'Place your device at hip height on a table or similar surface.',
    measurementsTitle: 'How tall are you?'
};

const ButtonsTexts = {
    female: 'She/Her',
    male: 'He/Him',
    save: 'Save'
};

const PlatformType = {
    ios: 'ios',
    android: 'android'
}

const DEVICE_SETTINGS = {
    statusBarHeight: Platform.OS === PlatformType.ios ? StatusBarManager.HEIGHT : 0,
    isAndroid: Platform.OS === PlatformType.android,
}

export {
    PageName,
    Position,
    Typeof,
    ToastTexts,
    GeneralTexts,
    ButtonsTexts,
    Styles,
    DEVICE_SETTINGS,
    ImagePaths,
    CameraIcon,
    CancelIcon,
    BackIcon,
    TriangleIcon
};