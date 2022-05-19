import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


const CardComponent = (props) => {

    const { title, date, duration, distance, picture } = props

    return (<Card style={styles.card}>
        <View style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Card.Content >
                    <Paragraph>{date}</Paragraph>
                    <Title>{title}</Title>
                </Card.Content>
                <Card.Cover source={{ uri: picture }} style={styles.picture} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Card.Content>
                    <Title>Distance</Title>
                    <Paragraph style={styles.subtitle}>{distance}</Paragraph>
                </Card.Content>
                <Card.Content>
                    <Title>Durée</Title>
                    <Paragraph style={styles.subtitle}>{duration}</Paragraph>
                </Card.Content>
            </View>
        </View>
    </Card>)
}

const styles = StyleSheet.create({
    card : {
        height: 220,
        margin: 20,
        borderColor: 'black',
        borderWidth: 2
    },
    picture: {
        width: 150,
        height: 100,
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 10,
    }
});

export default CardComponent