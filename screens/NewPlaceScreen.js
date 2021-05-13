import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';

import { useDispatch } from 'react-redux';

import * as placesActions from '../store/places-action';

const NewPlaceScreen = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitle(text);
    }
    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(title));
        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={title} />
                <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15,

    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 2
    }
})

export default NewPlaceScreen;