import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import * as ImagePicker from "expo-image-picker"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ImageUpload = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageList, setImageList] = useState([])
  const items = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
  ]

  useEffect(() => {
    retrieveImageFromStorage()
  }, [])

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

     console.log(result)
    // ImageCropPicker.openPicker({
    //   mediaType: "photo",
    // }).then((image) => {
    //   setSelectedImage(image.path)
    // })
  

  if (!result.canceled) {
    console.log("ana")
    setSelectedImage(result.uri)
    storeImageToStorage(result.uri)
  }

}

  const storeImageToStorage = async (imageUri) => {
    try {
      await AsyncStorage.setItem("selectedImage", imageUri)
    } catch (error) {
      console.log("Error storing image to AsyncStorage:", error)
    }
  }

  const retrieveImageFromStorage = async () => {
    try {
      const storedImageUri = await AsyncStorage.getItem("selectedImage")
      if (storedImageUri) {
        setSelectedImage(storedImageUri)
      }
    } catch (error) {
      console.log("Error retrieving image from AsyncStorage:", error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/profilepic.jpeg")}
            style={styles.profilePic}
          />
          <Text style={styles.profileText}>Hi, Sophie</Text>
        </View>
        <Image
          source={require("./assets/world.png")}
          style={styles.worldIcon}
        />
      </View>
      <View style={styles.container2}>
        <DropDownPicker
          items={items}
          defaultValue={selectedItem}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyle}
          dropDownStyle={styles.dropdownMenu}
          itemStyle={styles.dropdownItem}
          labelStyle={styles.dropdownLabel}
          placeholder="Select item"
          onChangeItem={(item) => setSelectedItem(item.value)}
        />

        <Image
          style={styles.img}
          source={require("./assets/ImageSquare.png")}
        />
        <TouchableOpacity style={styles.fab} onPress={handleImagePicker}>
          <Image source={require("./assets/Fab.png")} />
        </TouchableOpacity>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200, fkex: 1, zIndex: 500 }}
          />
        )}
      </View>
      <View style={styles.navigator}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/group.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/home.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/settings.png")}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.2,
    backgroundColor: "#8A2BE2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  profileText: {
    color: "#808080",
  },
  worldIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  container2: {
    flex: 0.7,
    backgroundColor: "white",
    padding: 20,
    zIndex: 100,
  },
  dropdownContainer: {
    width: 200,
    height: 40,
    marginBottom: 20,
    zIndex: 100,
  },
  dropdownStyle: {
    backgroundColor: "#fafafa",
    zIndex: 100,
  },
  dropdownMenu: {
    marginTop: 8,
    backgroundColor: "#fafafa",
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  dropdownLabel: {
    color: "#333333",
  },
  fab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    alignItems: "center",
    marginLeft: 100,
    marginTop: 80,
  },
  navigator: {
    flex: 0.1,
    backgroundColor: "#8A2BE2",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
  },
  buttonIcon: {
    height: 24,
    marginBottom: 5,
    marginLeft: 60,
    marginRight: 60,
  },
  buttonText: {
    color: "#808080",
  },
})

export default ImageUpload
