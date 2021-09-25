import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "../../utils/data";
import { Image } from "@chakra-ui/react";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = data.gallery.map(({ id, image }) => (
  <Image
    key={id}
    src={image}
    borderRadius="base"
    objectFit="cover"
    loading="lazy"
    boxSize="400px"
  />
));

export default function Slider() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      animationDuration={1000}
      animationType="fadeout"
      touchTracking
      infinite
      items={items}
      responsive={responsive}
      disableDotsControls
    />
  );
}
