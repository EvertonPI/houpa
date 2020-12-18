import React from "react";
import { useState } from "react";
import CardCarousel from "../components/home/section/Carousel";

export default function Produto({ rightCheck }) {
  const [isCard, setIsCard] = useState(false);
  return <div>{console.log(rightCheck)}</div>;
}
