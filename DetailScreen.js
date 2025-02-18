import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { school } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{school.school_name}</Text>

            <Text style={styles.label}>URL Address:</Text>
            <Text style={styles.text}>{school.url_address}</Text>

            <Text style={styles.label}>Address:</Text>
            <Text style={styles.text}>{school.address}</Text>

            <Text style={styles.label}>Postal Code:</Text>
            <Text style={styles.text}>{school.postal_code}</Text>

            <Text style={styles.label}>Telephone No:</Text>
            <Text style={styles.text}>{school.telephone_no}</Text>

            <Text style={styles.label}>Email Address:</Text>
            <Text style={styles.text}>{school.email_address}</Text>

            <Text style={styles.label}>Principal Name:</Text>
            <Text style={styles.text}>{school.principal_name}</Text>

            <Text style={styles.label}>First VP Name:</Text>
            <Text style={styles.text}>{school.first_vp_name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DetailsScreen;
