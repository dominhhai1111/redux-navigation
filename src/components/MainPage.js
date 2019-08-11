// MainPage.js
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { COLORS } from '../state/Colors.js';

class MainPage extends Component {

    onChooseColor() {

    }

    selectedColor() {
        const colorName = 'RED';

        return COLORS[colorName].hexCode;
    }

    render() {
        const color = this.selectedColor();
        return (
            <View style = { [styles.container, { backgroundColor: color }] }>
                <Button
                    onPress = { this.onChooseColor.bind(this) }
                    color = "black"
                    title = "Choose Color"
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
};

export default MainPage;