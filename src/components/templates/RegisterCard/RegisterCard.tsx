import React, { useRef } from 'react';
import styled from 'styled-components';
import LinkedInput from '../../molecules/LinkedInput';
import LinkedInputUsingKeyboard from '../../molecules/LinkedInputUsingKeyboard';
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

const RegisterCard: React.FC = () => {
  const first = useRef<any>();
  const second = useRef<any>();
  const third = useRef<any>();
  const fourth = useRef<any>();
  const expirationPeriod = useRef<any>();
  const cvc = useRef<any>();
  const cardPassword = useRef<any>();

  return (
    <>
      <Bank>kakao bank</Bank>
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
