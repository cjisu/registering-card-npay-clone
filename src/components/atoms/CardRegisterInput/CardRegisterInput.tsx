import styled from 'styled-components';

export default styled.input<{ inputWidth?: number }>`
  width: ${p => (p.inputWidth ? p.inputWidth + 'px' : '95%')};
  height: 28px;
  font-size: 17px;
  border: none;
  color: ${p => p.theme.colors.inputColor};
`;
