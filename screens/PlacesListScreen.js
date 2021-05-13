import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Alert, TouchableOpacity, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

import CustomHeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem'

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places)
    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <PlaceItem
                    image={null}
                    title={itemData.item.title}
                    address={null}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        })
                    }}
                />
            }
        />
    )
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === 'android' ? "md-add" : "ios-add"}
                    onPress={() => {
                        navData.navigation.navigate('NewPlace')
                    }}
                />
            </HeaderButtons>
        )
    }
}

{/* <TouchableOpacity onPress={() => Alert.alert('Add')} style={{ marginRight: 16 }}>
    <Ionicons name={Platform.OS === 'android' ? "md-add" : "ios-add"} color={Platform.OS === 'android' ? 'white' : Colors.primary} size={23} />
</TouchableOpacity> */}

const styles = StyleSheet.create({

})

export default PlacesListScreen;