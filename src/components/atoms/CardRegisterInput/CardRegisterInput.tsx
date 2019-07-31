import styled from 'styled-components';

export default styled.input<{ inputWidth?: number }>`
  width: ${p => (p.inputWidth ? p.inputWidth + 'px' : '90%')};
  height: 28px;
  font-size: 0.9em;
  border: none;
  color: ${p => p.theme.colors.inputColor};
`;
