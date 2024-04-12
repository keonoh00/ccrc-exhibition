import { AspectRatio, Image } from "@chakra-ui/react";
import { SlidesSelector } from "../../assets";

export default function ImageContainer({
  src,
}: {
  src: typeof SlidesSelector;
}) {
  return (
    <AspectRatio maxW="400px" ratio={7 / 6}>
      <Image src={src as unknown as string} />
    </AspectRatio>
  );
}
