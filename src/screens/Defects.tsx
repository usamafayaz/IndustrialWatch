import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import SecondaryAppBar from '../components/SecondaryAppBar';

const Defects = () => {
  const [modalView, setModalView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  const images = [
    require('../../assets/images/defect1.jpeg'),
    require('../../assets/images/defect2.jpeg'),
    require('../../assets/images/defect3.jpeg'),
    require('../../assets/images/defect4.jpeg'),
    require('../../assets/images/defect5.jpeg'),
    require('../../assets/images/defect6.jpeg'),
  ];

  const openImageModal = (imageIndex: any) => {
    setSelectedImage(images[imageIndex]);
    setModalView(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setModalView(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closeImageModal}>
      <View style={styles.container}>
        <SecondaryAppBar text="Batch#11320051123" />
        <View style={styles.imageGrid}>
          <View style={styles.imageRow}>
            {images.slice(0, 3).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openImageModal(index)}>
                <Image
                  resizeMode="center"
                  source={image}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.imageRow}>
            {images.slice(3, 6).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openImageModal(index + 3)}>
                <Image
                  resizeMode="center"
                  source={image}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text style={styles.textStyle}>P#1132005112</Text>
        <Text style={styles.dateStyle}>20 May 2023</Text>

        <Text style={styles.defectsHeadingStyle}>Defects</Text>
        <Text style={styles.defectStyle}>{`●   `}SideCut</Text>
        <Text style={styles.defectStyle}>{`●   `}Pinhole</Text>

        <Modal isVisible={modalView}>
          <TouchableWithoutFeedback onPress={closeImageModal}>
            <View style={styles.modalWrapper}>
              {selectedImage && <Image source={selectedImage} />}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },

  imageGrid: {marginTop: '10%', marginBottom: '3%'},
  dateStyle: {color: 'grey', fontSize: 16, fontWeight: '500'},
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 2,
    borderRadius: 10,
  },
  defectsHeadingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'black',
    marginLeft: '8%',
    marginTop: '10%',
    marginBottom: '5%',
  },
  defectStyle: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: '25%',
    marginTop: '2%',
  },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 600,
    width: 350,
    alignSelf: 'center',
    borderRadius: 30,
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    marginLeft: '35%',
    marginTop: '7%',
  },
  cancelStyle: {
    color: '#2196F3',
    marginRight: 10,
    paddingVertical: '5%',
  },
  updateStyle: {
    color: 'white',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
});

export default Defects;
