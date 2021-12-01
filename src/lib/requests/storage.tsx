// // @ts-ignore
// import AsyncStorage from "@react-native-community/async-storage";

// class Storage {
//   static async retrieveData(key: any) {
//     try {
//       if (key) {
//         const retrievedItem = await AsyncStorage.getItem(key);
//         const item = JSON.parse(retrievedItem);
//         return item;
//       }
//     } catch (error) { }
//   }

//   static async storeData(key: any, value: any) {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) { }
//   }

//   static async mergeData(key: any, value: any) {
//     try {
//       await AsyncStorage.mergeItem(key, JSON.stringify(value));
//     } catch (error) { }
//   }

//   static async getAllKeys() {
//     try {
//       const allKeys = await AsyncStorage.getAllKeys();
//       return allKeys;
//     } catch (error) { }
//   }

//   static async removeData(key: any) {
//     try {
//       await AsyncStorage.removeItem(key);
//     } catch (error) { }
//   }
// }
// export default Storage;

// @ts-ignore

import * as React from 'react';
