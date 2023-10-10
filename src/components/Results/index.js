import {
  GameResultContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  ResultText,
} from './styledComponents'
import './index.css'

const Results = props => {
  const {choicesList, isShow, checkResult, text, restartGame, newList} = props

  const showGame = () => (
    <GameResultContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              key={choicesList[0].id}
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              key={choicesList[1].id}
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              key={choicesList[2].id}
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultContainer>
            <ResultName>You</ResultName>
            <GameImage src={newList[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>Opponent</ResultName>
            <GameImage src={newList[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultText>{text}</ResultText>
            <button
              type="button"
              className="result-button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultContainer>
        </>
      )}
    </GameResultContainer>
  )
  return showGame()
}
export default Results
