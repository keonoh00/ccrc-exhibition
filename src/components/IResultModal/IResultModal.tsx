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
  const data =
    fullData[LABELS[image as keyof typeof LABELS] as keyof typeof fullData];

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>This is a demo result for prediction</TableCaption>
        <Thead>
          <Tr>
            <Th>Attack</Th>
            <Th></Th>
            <Th>No Attack</Th>
            <Th></Th>
          </Tr>
          <Tr>
            <Th fontWeight={"300"}>Baseline</Th>
            <Th>Ours</Th>
            <Th fontWeight={"300"}>Baseline</Th>
            <Th>Ours</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight={"300"}>{data[0]}</Td>
            <Td>{data[1]}</Td>
            <Td fontWeight={"300"}>{data[2]}</Td>
            <Td>{data[3]}</Td>
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
