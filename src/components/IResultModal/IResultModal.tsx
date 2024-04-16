import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BIMRESULT, FSGMRESULT, LABELS, PGDRESULT } from "./constant";
import { AttackType } from "../../screens/Demo";

interface IResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  attackType: string;
}

const getHardCodeData = (attackType: AttackType) => {
  switch (attackType) {
    case AttackType.FGSM:
      return FSGMRESULT;
    case AttackType.PGD:
      return PGDRESULT;
    case AttackType.BIM:
      return BIMRESULT;
    default:
      return Array(8).fill("N/A");
  }
};

const ResultTable = ({
  image,
  attackType,
}: {
  image: string;
  attackType: string;
}) => {
  const fullData = getHardCodeData(attackType as AttackType);
  const label = LABELS[image as keyof typeof LABELS];
  const data = fullData[label as keyof typeof fullData];

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>This is a demo result for prediction</TableCaption>
        <Thead>
          <Tr>
            <Th>Original Image</Th>
            <Th></Th>
            <Th>Perturbed Image</Th>
            <Th></Th>
          </Tr>
          <Tr>
            <Th fontWeight={"300"}>Baseline (Confidence Score)</Th>
            <Th>Ours (Confidence Score)</Th>
            <Th fontWeight={"300"}>Baseline (Confidence Score)</Th>
            <Th>Ours (Confidence Score)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {/*
            Data column order is 
            NoAttackBaseline, NoAttackOurs, AttackBaseline, AttackOurs
             */}
            <Td fontWeight={"300"}>{data[2]}</Td>
            <Td>{data[3]}</Td>
            <Td fontWeight={"300"}>{data[0]}</Td>
            <Td>{data[1]}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const IResultModal = (props: IResultModalProps) => {
  const { isOpen, onClose, image, attackType } = props;

  return (
    <Modal size={"7xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="70vw">
        <ModalHeader>Experiment Result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ResultTable image={image} attackType={attackType} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default IResultModal;
