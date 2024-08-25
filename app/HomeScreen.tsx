import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trang chính</Text>
        </View>
    );
};

export default HomeScreen;

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
