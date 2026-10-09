//import liraries
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ArrowMoreIcon, EyeIcon} from '../../../assets/images';
import TextInputLabel from '../../../components/TextInput/TextInputLabel';
import {MyThemeColors} from '../../../theme/Theme';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../utils/PixelSize';

// create a component
const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.bienvenueTxt}>Bienvenue !</Text>
        <Text style={styles.loginInfoTxt}>
          Intensifiez-vous pour accéder au meilleur de Politis.
        </Text>
        <Text style={styles.loginInfoTxt}>
          Abonné·e à Politis ?{' '}
          <Text style={styles.loginInfoTxtRed}>
            Cliquez ici et activez votre compte dès maintenant
          </Text>{' '}
          pour lire votre journal en version numérique et accéder à tous les
          articles du site.
        </Text>

        <TextInputLabel
          label="Votre adresse email"
          //errorText="wrong mail"
          style={styles.input}
          // onChangeText={onChangeNumber}
          //value={number}
        />
        <TextInputLabel
          label="Votre mot de passe"
          style={styles.input}
          icon={<EyeIcon />}
          // onChangeText={onChangeNumber}
          //value={number}
        />
        <View style={styles.containerButons}>
          <Pressable style={styles.connextionBtn}>
            <ArrowMoreIcon color={MyThemeColors.white} />
            <Text style={styles.connextionBtnTxt}>JE ME CONNECTE</Text>
          </Pressable>
          <Pressable style={styles.mdpOublieBtn}>
            <Text style={styles.mdpOublieTxt}>Mot de passe oublié ?</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.offerSection}>
        <Text style={styles.loginInfoTxt}>
          Vous ne disposez pas d’abonnement Politis ,{' '}
          <Text style={styles.loginInfoTxtRed}>
            profitez de nos offres numériques en vous abonnant…
          </Text>
        </Text>
      </View>
      <View style={styles.signInSection}>
        <Text style={styles.signInSectionTxt}>Vous n’avez pas de compte ?</Text>
        <Text style={styles.loginInfoTxtRed}>Inscrivez-vous </Text>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyThemeColors.whiteRedish,
    paddingBottom: pixelSizeVertical(30),
  },

  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(50),
    width: '100%',
  },

  bienvenueTxt: {
    fontSize: fontPixel(21),
    color: MyThemeColors.black,
    fontFamily: 'Kadwa',
    fontWeight: 'bold',

    width: '100%',
    marginTop: pixelSizeVertical(20),
    marginBottom: pixelSizeVertical(20),
  },
  loginInfoTxt: {
    fontWeight: '500',
    fontSize: fontPixel(14),
    fontFamily: 'Lato',
    color: MyThemeColors.black,
    paddingVertical: pixelSizeVertical(10),
    width: '100%',
  },
  loginInfoTxtRed: {
    fontSize: fontPixel(14),
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: MyThemeColors.red,
    textDecorationLine: 'underline',
  },
  containerButons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: pixelSizeHorizontal(50),
  },

  connextionBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(25),
    elevation: 3,
    backgroundColor: MyThemeColors.red,
    borderRadius: 20,
  },
  connextionBtnTxt: {
    marginLeft: 5,
    color: MyThemeColors.white,
    fontSize: fontPixel(16),
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  mdpOublieBtn: {
    marginVertical: pixelSizeVertical(20),
    //   marginHorizontal: pixelSizeHorizontal(20),
  },
  mdpOublieTxt: {
    color: MyThemeColors.black,
    fontSize: fontPixel(13),
    fontFamily: 'Lato',
    fontWeight: 'normal',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    height: heightPixel(50),
    backgroundColor: MyThemeColors.white,
    color: MyThemeColors.black,
    marginVertical: pixelSizeVertical(5),
  },
  offerSection: {
    width: '100%',
    backgroundColor: MyThemeColors.gray2,
    paddingHorizontal: pixelSizeHorizontal(50),
    paddingVertical: pixelSizeVertical(7),
  },
  signInSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(50),
  },
  signInSectionTxt: {
    fontWeight: '500',
    fontSize: fontPixel(14),
    fontFamily: 'Lato',
    color: MyThemeColors.black,
    paddingVertical: pixelSizeVertical(10),
  },
});

//make this component available to the app
export default Login;
