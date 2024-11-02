import styled from 'styled-components';

const StyledInput = styled.input`
	background-color: transparent;
	border: none;
  outline: none;
	height: 50px;
	font-size: 3rem;
	text-align: right;
	color: white;
	padding-top: 6rem;
`;

const ScreenInput = ({valueState}) => {
	const { value, setValue, count, setCount } = valueState;


	return <StyledInput type="text" readOnly value={count} />;
};

export default ScreenInput;
