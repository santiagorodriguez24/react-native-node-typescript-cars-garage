import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "styles";

import { styles } from "./styles";

interface StarProps {
    isFavorite: boolean;
}

const FavoriteStar = (props: StarProps) => (
  <AntDesign
    size={24}
    name={props.isFavorite ? "star" : "staro"}
    color={props.isFavorite ? Colors.Generic.lightYellow : Colors.Generic.black}
  />
);

export default FavoriteStar;
