import React, { useRef } from 'react';
import styled from 'styled-components';
import LinkedInput from '../../molecules/LinkedInput';
import LinkedInputUsingKeyboard from '../../molecules/LinkedInputUsingKeyboard';
import imgKakaoBank from '../../../assets/images/kakao_bank.png';
const Bank = styled.div`
  padding: 20px;
  font-size: 20px;
  background: #ffdf00;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RegisterCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e2e6e9;
  border-right: 1px solid #e2e6e9;
  background: #ffffff;
  font-family: 'Noto Sans KR';
`;

const Title = styled.div`
  font-size: 13px;
`;

const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 13px;
  height: 80px;
  border-bottom: 1px solid #e2e6e9;
`;

const CardDashDiv = styled.div`
  margin: 0 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardDash = styled.div`
  width: 4px;
  height: 1px;
  background: #333333;
`;

const InputForm = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  >input: focus {
    outline: none;
    border: 1px solid #4480d9;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 13px;
  height: 80px;
`;

const ExpirationPeriod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 80px;
  border-right: 1px solid #e2e6e9;
`;

const CVC = styled.div`
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 80px;
`;

const CardPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e2e6e9;
  border-bottom: 1px solid #e2e6e9;
  padding: 0px 13px;
  height: 80px;
`;

const getKeyboardNumbers = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1];
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
};

const RegisterCard: React.FC = () => {
  const first = useRef<any>();
  const second = useRef<any>();
  const third = useRef<any>();
  const fourth = useRef<any>();
  const expirationPeriod = useRef<any>();
  const cvc = useRef<any>();
  const cardPassword = useRef<any>();
  const keyboardNumbers = getKeyboardNumbers();
  return (
    <>
      <Bank>
        <img src={imgKakaoBank} alt="" width="120" height="30" />
      </Bank>
      <RegisterCardWrapper>
        <CardNumber>
          <Title>카드번호</Title>
          <InputForm>
            <LinkedInput ref={first} type="tel" maxLength={4} inputWidth={50} next={second} />
            <CardDashDiv>
              <CardDash />
            </CardDashDiv>
            <LinkedInput ref={second} type="tel" maxLength={4} inputWidth={50} next={third} />
            <CardDashDiv>
              <CardDash />
            </CardDashDiv>
            <LinkedInputUsingKeyboard
              ref={third}
              title="third-card-number"
              keyboardNumbers={keyboardNumbers}
              placeholder="0000"
              maxLength={4}
              inputWidth={50}
              next={fourth}
            />
            <CardDashDiv>
              <CardDash />
            </CardDashDiv>
            <LinkedInputUsingKeyboard
              ref={fourth}
              title="fourth-card-number"
              keyboardNumbers={keyboardNumbers}
              placeholder="0000"
              maxLength={4}
              inputWidth={50}
              next={expirationPeriod}
            />
          </InputForm>
        </CardNumber>
        <CardInfo>
          <ExpirationPeriod>
            <Title>유효기간</Title>
            <LinkedInputUsingKeyboard
              ref={expirationPeriod}
              title="expiration-period-number"
              keyboardNumbers={keyboardNumbers}
              placeholder="MMYY"
              maxLength={4}
              next={cvc}
            />
          </ExpirationPeriod>
          <CVC>
            <Title>CVC</Title>
            <LinkedInputUsingKeyboard
              ref={cvc}
              title="cvc-number"
              keyboardNumbers={keyboardNumbers}
              placeholder="카드 뒷면 3자리 숫자"
              maxLength={3}
              next={cardPassword}
            />
          </CVC>
        </CardInfo>
        <CardPassword>
          <Title>카드 비밀번호</Title>
          <LinkedInputUsingKeyboard
            ref={cardPassword}
            title="card-password-number"
            keyboardNumbers={keyboardNumbers}
            placeholder="비밀번호 앞 2자리 숫자"
            maxLength={2}
            next={first}
          />
        </CardPassword>
      </RegisterCardWrapper>
    </>
  );
};

export default RegisterCard;
