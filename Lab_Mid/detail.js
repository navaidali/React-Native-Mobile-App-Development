import React from 'react';
import { View } from 'react-native';

const details = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Salah Performed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default details;