import styled from 'styled-components';
import { getBackgroundColor, getFontColor } from '../../../common/getColor.js';

const StyledButton = styled.button`
  width: 73px;
  height: 75px;
  background-color: ${({ $backgroundcolor }) => $backgroundcolor || '#343434'};
  color: ${({ $fontcolor }) => $fontcolor || '#FFFFFF'};
  font-size: 2rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

const Button = ({ botao, valueState }) => {
  const { value, setValue, count, setCount } = valueState;

  const getValue = (e) => {
    const newValue = e.target.value;

    if (newValue === "C") {
      setCount('');
      return;
    }

    if (newValue === "=") {
      try {
        const result = eval(count);
        setCount(result.toString());
      } catch (error) {
        console.error("Erro ao resolver a expressão:", error);
        setCount('Erro');
      }
      return;
    }

    if (newValue === "<") {
      setCount(prevCount => prevCount.slice(0, -1));
      return;
    }

    setCount(prevCount => {
      return prevCount ? `${prevCount}${newValue}` : newValue;
    });

    setValue(newValue);
  };

  return (
    <StyledButton
      $fontcolor={getFontColor(botao)}
      $backgroundcolor={getBackgroundColor(botao)}
      onClick={getValue}
      value={botao}
    >
      {botao}
    </StyledButton>
  );
};

export default Button;
