import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const feedListItem = ({ item }) => (
<View style={styles.feed_list_item}>
<Image
    style={styles.post_user}
    source={{uri: item.post_user}}
   />
<Image
    style={styles.news_feed}
    source={{uri: item.news_feed}}
    />
<Image
    style={styles.like_icon}
    source={{uri: item.like_icon}}
   />
<Text style={styles.num_like}>{item.num_like}</Text>
<Text style={styles.description}>{item.description}</Text>
</View>
  );

const FeedList = ({ item }) => (
<FlatList
    style={styles.feed_list}
    data={item}
    renderItem={feedListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default FeedList;

const styles = StyleSheet.create({
    'post_user': {
        'width': '10vw',
        'height': '10vw',
        'margin': 3,
        'borderRadius': 50,
        'marginTop': 25,
        'marginLeft': 10
    },
    'news_feed': {
        'width': '100vw',
        'height': '65vw',
        'marginTop': 5
    },
    'like_icon': {
        'width': '7vw',
        'height': '7vw',
        'margin': 3,
        'marginLeft': 10,
        'borderRadius': 50
    },
    'num_like': {
        'color': '#0b0a0a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 1
    },
    'description': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});