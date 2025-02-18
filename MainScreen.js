import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
    const [schools, setSchools] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://data.gov.sg/api/action/datastore_search?resource_id=d_688b934f82c1059ed0a6993d2a829089')
            .then((response) => response.json())
            .then((data) => {
                setSchools(data.result.records);
            })
            .catch((error) => console.error('Error fetching data: ', error));
    }, []);

    const filteredSchools = schools.filter((school) => {
        const schoolName = school.school_name || '';
        return schoolName.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MOE School Contact Details</Text>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAl_aMYIZqe5eD9SuMRxqD3NMShKnFwXuohw&s' }}
                style={styles.image}
            />
            <TextInput
                style={styles.searchBar}
                placeholder="Search by School Name"
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList
                data={filteredSchools}
                keyExtractor={(item) => item.school_name}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('Details', { school: item })}
                    >
                        <Text style={styles.itemText}>{item.school_name}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No schools found</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEB3B',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
    item: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
    },
});

export default MainScreen;
