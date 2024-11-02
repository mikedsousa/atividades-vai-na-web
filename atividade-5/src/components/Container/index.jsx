import styled from 'styled-components';
import ScreenInput from '../ScreenInput';
import ButtonContainer from '../ButtonContainer';
import { useState } from 'react';

const StyledSection = styled.section`
	width: 375px;
	height: 95vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #151515;
	padding: 1rem;
	gap: 2rem;
  border-radius: 15px;
  padding: 1rem;
  margin: auto;
  margin-top: 0.5rem;

	hr {
		border-color: #4e4d4d;
		width: 100%;
	}
`;

const Container = () => {

  const [value, setValue] = useState('')
  const [count, setCount] = useState('')

  const valueState = { value, setValue, count, setCount }

	return (
		<StyledSection>
			<ScreenInput valueState={valueState}/>
			<hr />
			<ButtonContainer valueState={valueState} />
		</StyledSection>
	);
};

export default Container;
