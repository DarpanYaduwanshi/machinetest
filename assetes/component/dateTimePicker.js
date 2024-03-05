import React, { useState } from 'react';
import { View, Text, Button, Platform, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDateTimePicker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);

    const handleDateTimeChange = (event, selectedDateTime) => {
        setShowDateTimePicker(false);
        if (selectedDateTime !== undefined) {
            setDateTime(selectedDateTime);
        }
    };

    return (
        <View style={{
            // flexDirection: "row",
            backgroundColor: "#fff",
            flexDirection: "row",
            // height: "50%",
            alignContent: "center",
            padding: 10
        }}>
            <Text style={{ width: "90%", color: "#244C87", fontSize: 18, fontWeight: "bold" }}>{formatDateTime(dateTime)}</Text>
            {/* <Button
                title="Time Picker"
                onPress={() => setShowDateTimePicker(true)}
            /> */}
            <TouchableOpacity style={{}}
                onPress={() => setShowDateTimePicker(true)}>
                <Image source={require('../images/calendar_month.png')} style={{ height: 25, width: 30, resizeMode: "contain", }} />
            </TouchableOpacity>

            {showDateTimePicker && (
                <DateTimePicker
                    value={dateTime}
                    mode="datetime"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleDateTimeChange}
                    minimumDate={new Date()} />
            )}
        </View>
    );
};

const formatDateTime = (dateTime) => {
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const datePart = dateTime.toLocaleDateString(undefined, options);

    return `${datePart}`;
};

export default MyDateTimePicker;
