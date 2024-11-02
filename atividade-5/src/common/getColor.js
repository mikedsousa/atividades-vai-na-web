const operations = ['<', '%', '/', '*', '-', '+'];
const redAndGreen = ['C', '='];

export const getBackgroundColor = (value) => {
	if (value === 'C') return '#FF5959';
	if (value === '=') return '#66FF7F';
	return '#343434';
};

export const getFontColor = (value) => {
  if(operations.includes(value)) return '#66FF7F';
  if(redAndGreen.includes(value)) return '#343434';
  return '#FFFFFF'
};

// export default {getBackgroundColor, getFontColor};
