import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import Output from "./components/Output";
import Search from "./components/Search";
import { API, KEY } from "./Config";

export default function App() {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState();

  const searchWeather = async () => {
    let url = API + name + KEY;

    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    setWeather(res);
  };

  const background = {
    uri: "https://33.media.tumblr.com/1ca5db359ca40eeceab7f596b35627f4/tumblr_ncfalcTFq81tbueiso1_500.gif",
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={{ flex: 1, resizeMode: "cover", width: "100%" }}
      >
        <Search search={searchWeather} name={name} setName={setName} />

        <Output data={weather} />
      </ImageBackground>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "San Serif",
  },
};
