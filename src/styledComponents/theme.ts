export interface IDefaultTheme {
  colors: {
    inputColor: string;
  };

  font: {
    family: string;
    base: string;
    small: string;
    xsmall: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };
}

const theme: IDefaultTheme = {
  colors: {
    inputColor: '#8f8f8f'
  },

  font: {
    family: `'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`,
    xsmall: '9px',
    small: '10px',
    base: '13px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
    xxxlarge: '31px'
  }
};

export default theme;
