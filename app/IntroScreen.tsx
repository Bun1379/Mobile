import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const IntroScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 10000); // 10 giây

        return () => clearTimeout(timer); // Xoá bộ đếm thời gian khi component unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Triệu Nhật Nam</Text>
        </View>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
