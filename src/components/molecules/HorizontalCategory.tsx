// CategoryBar.js
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const categories = [
  'Highlight',
  'Lifestyle',
  'Unique',
  'Trending',
  'New',
  'Popular',
];

const HorizontalCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Highlight');

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryContainer,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: '100%',
  },
  selectedCategory: {
    // borderBottomWidth: 1,
    borderBottomColor: '#007BFF',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#007BFF',
    // color: 'white',
    // backgroundColor: '#007BFF',
  },
});

export default HorizontalCategory;
