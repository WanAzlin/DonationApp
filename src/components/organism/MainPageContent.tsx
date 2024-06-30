// MainPageContent.js
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainPageContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.greyBox}>
          <Text style={styles.category}>Environment</Text>
        </View>
        <Text style={styles.boxText1}>Tree Cactus Imitation</Text>
        <Text style={styles.boxText2}>$44.00</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.greyBox}>
          <Text style={styles.category}>Education</Text>
        </View>
        <Text style={styles.boxText1}>Genius Rubik</Text>
        <Text style={styles.boxText2}>$50.00</Text>
      </View>
    </View>
  );
};

export default MainPageContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyBox: {
    width: 155,
    height: 170,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginBottom: 10,
  },
  boxText1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    // textAlign: 'center',
  },
  boxText2: {
    fontWeight: 'bold',
    color: '#156CF7',
    fontSize: 16,
    textAlign: 'center',
  },
  category: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 12,
    padding: 16,
    backgroundColor: '#145855',
  },
});
