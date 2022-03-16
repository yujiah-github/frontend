import {
  GOOGLE_LOGIN_URL,
  KAKAO_LOGIN_URL,
  NAVER_LOGIN_URL,
} from '../../constants/loginUrl';
import kakaoIcon from '../../images/kakao-icon.png';
import naverIcon from '../../images/naver-icon.png';
import googleIcon from '../../images/google-icon.png';
import styled from 'styled-components';

const SocialLoginWrapper = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  h2 {
    font-size: 23px;
    margin: 2rem 0 1rem;
    font-weight: normal;
    text-align: center;
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

const SocialLoginHeading = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  h2 {
    position: relative;
    top: -20px;
    font-size: 23px;
    font-weight: normal;
    background-color: #fff;
    margin: 0;
    border-left: 20px solid #fff;
    border-right: 20px solid #fff;
  }
`;

const SocialLoginLinks = styled.ul`
  display: flex;
  justify-content: center;
`;

const SocialLoginLink = styled.li`
  margin: 0 0.8rem;
  border-radius: 50%;
  button {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

function SocialLogin() {
  const onLogin = (href) => window.location.assign(href);
  return (
    <SocialLoginWrapper>
      <SocialLoginHeading>
        <h2>Social Login</h2>
      </SocialLoginHeading>
      <SocialLoginLinks>
        <SocialLoginLink>
          <button onClick={() => onLogin(KAKAO_LOGIN_URL)}>
            <img src={kakaoIcon} />
          </button>
        </SocialLoginLink>
        <SocialLoginLink>
          <button onClick={() => onLogin(NAVER_LOGIN_URL)}>
            <img src={naverIcon} />
          </button>
        </SocialLoginLink>
        <SocialLoginLink>
          <button onClick={() => onLogin(GOOGLE_LOGIN_URL)}>
            <img src={googleIcon} />
          </button>
        </SocialLoginLink>
      </SocialLoginLinks>
    </SocialLoginWrapper>
  );
}

export default SocialLogin;
