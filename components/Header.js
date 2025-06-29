// components/Header.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View className="items-center pt-16 pb-8">
      <Image
        source={{ uri: 'https://placehold.co/120x120' }} // Ganti dengan URL foto Anda
        className="w-32 h-32 rounded-full mb-4 border-4 border-violet-500"
      />
      <Text className="text-white text-3xl font-bold">Nama Anda</Text>
      <Text className="text-gray-300 text-lg mt-1">React Native Developer</Text>
    </View>
  );
};

export default Header;