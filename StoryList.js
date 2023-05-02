import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storyListItem = ({ item }) => (
<View style={styles.story_list_item}>
<Image
    style={styles.story_image_list}
    source={{uri: item.story_image_list}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
</View>
  );

const StoryList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.story_list}
    data={item}
    renderItem={storyListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default StoryList;

const styles = StyleSheet.create({
    'story_image_list': {
        'width': '18vw',
        'height': '18vw',
        'marginTop': 20,
        'borderRadius': 50,
        'marginLeft': 15,
        'borderWidth': 2,
        'borderColor': '#d93f3f'
    },
    'user_name': {
        'color': '#050505',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingTop': 5,
        'marginLeft': 22
    }
});