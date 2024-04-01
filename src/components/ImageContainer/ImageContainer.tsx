import { AspectRatio, Image } from "@chakra-ui/react";

export default function ImageContainer() {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  );
}
