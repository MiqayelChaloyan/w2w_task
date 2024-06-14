import axios from "axios";
import { API_URL } from "../constans/apiUrl";
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

function cmToFeetInches(cm) {
    const totalInches = cm * 0.393701;
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(1);
    return `${feet}' ${Math.round(inches)}”`;
}

export const sendDataToServer = async (data, profile) => {
    try {
        const ft = 30.48;
        const folderName = uuid.v4();
        const frontReference = storage().ref(`${folderName}/front.jpg`);
        const sideReference = storage().ref(`${folderName}/side.jpg`);
        await frontReference.putFile(data?.front);
        await sideReference.putFile(profile);
        const height = data?.isCentimeter ? data?.height : (Number(data?.height) * ft);

        const apiUrl = `${API_URL}?folder_name=${folderName}&height=${Math.round(height)}`;
        
        const response = await axios.post(apiUrl, {});
        if (data?.isCentimeter) {
            return response.data;
        }
        const res = response.data;

        console.log(res);
        return {
            // "bust": res.bust * ft,
            // "hip": res.hip * ft,
            // "shoulder": res.shoulder * ft,
            // "waist": res.waist * ft
            "bust": cmToFeetInches(res.bust),
            "hip":  cmToFeetInches(res.hip),
            "shoulder": cmToFeetInches(res.shoulder),
            "waist": cmToFeetInches(res.waist)
        }
    } catch (error) {
        if (error.response) {
            console.error('API responded with an error:', error.response.status, error.response.data);
            return error.message;
        } else if (error.request) {
            console.error('No response received from API:', error.message);
            return error.message;
        } else {
            console.error('Error setting up the request:', error.message);
            return error.message;
        }
    }
};



