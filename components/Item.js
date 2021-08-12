import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const Item = props => {
    return(
        <Text>{props.title}</Text>
    )
};
export default Item;