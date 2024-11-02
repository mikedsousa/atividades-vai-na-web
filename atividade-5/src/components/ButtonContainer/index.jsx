import styled from 'styled-components';
import Button from './Button';
import { list } from '../../common/buttonList.js';

const StyledSection = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 1rem;
`;

const ButtonContainer = ({valueState}) => {
	return (
		<StyledSection>
			{list.map((botao) => {
				return <Button valueState={valueState} key={botao} botao={botao} />;
			})}
		</StyledSection>
	);
};

export default ButtonContainer;
