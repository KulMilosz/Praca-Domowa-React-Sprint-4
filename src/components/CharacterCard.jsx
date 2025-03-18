import {
  CardContainer,
  CardImage,
  CardName,
  CardButton,
} from "../styles/styles";

const CharacterCard = ({ characterImage, characterName, onClick }) => {
  return (
    <CardContainer>
      <CardImage src={characterImage} alt={characterName} />
      <CardName>{characterName}</CardName>
      <CardButton onClick={onClick}>{"LEARN MORE"}</CardButton>
    </CardContainer>
  );
};

export default CharacterCard;
