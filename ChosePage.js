
import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ChosePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onItemPress, items } = this.props;
        return (
            <View style={styles.outBox}>
                <View style={styles.container}>
                    {items.map((item, index) =>
                        <Text
                            style={styles.itemBox}
                            onPress={() => { onItemPress(index) }}
                        >
                            {item}
                        </Text>
                    )}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outBox: {
        // flex: 1,
    },
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    itemBox: {
        width:'40%',
        lineHeight: 40,
        textAlign: "center",
        marginVertical: 20,
        backgroundColor: "#f5f5f5",
        
    }
});
ChosePage.propTypes = {
    onItemPress: PropTypes.func,
    items: PropTypes.array,
}
ChosePage.defaultProps = {
    onItemPress: () => { },
    items: [],
}

