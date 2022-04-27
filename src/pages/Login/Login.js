import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
const Login = () => {
  const navigate = useNavigate();

  const [idInput, setIdInput] = useState('');
  const handleIdInput = event => {
    setIdInput(event.target.value);
  };
  const [pwInput, setPwInput] = useState('');

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const goToLogin = e => {
    e.preventDefault();
    if (idInput && pwInput) {
      fetch('아이피주소', {
        method: 'POST',
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            alert('환영합니다!');
            navigate('/main');
          } else {
            alert('확인해주세요');
          }
        });
    } else {
      alert('이메일 및 비밀번호를 확인해 주세요');
    }
  };

  const isBtnActive =
    idInput.includes('@') && pwInput.match(/^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/);

  return (
    <div>
      <div className="loginWrap">
        <p className="topLogin">로그인</p>
        <form className="inputWrap" onSubmit={goToLogin}>
          <div className="topEmail">이메일</div>
          <div className="loginWrapper">
            <input
              className="inputId"
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={handleIdInput}
            />
            <span className="separator" />
          </div>
          <div className="topEmail">비밀번호</div>
          <div className="loginWrapper">
            <input
              className="inputPw"
              type="password"
              placeholder="비밀번호을 입력해주세요"
              onChange={handlePwInput}
            />
            <span className="separator" />
          </div>

          <button
            className={isBtnActive ? 'loginButtonActive ' : 'loginButton'}
          >
            로그인
          </button>
        </form>
        <div className="socialLogin">
          <button className="kakaoLoginButton">
            <i class="fa-regular fa-1x fa-comment" />
            카카오 로그인
          </button>
          <button className="naverLoginButton">
            <i class="fa-brands fa-1x fa-neos" />
            네이버 로그인
          </button>
          <button className="googleLoginButton">
            <i class="fa-brands fa-1x fa-google" />
            구글 로그인
          </button>
        </div>
        <div className="linkWrap">
          <a className="findId" href="">
            아이디 찾기
          </a>
          <a className="findPw" href="">
            비밀번호 찾기
          </a>
          {/* <button className="memberJoin" onClick={goToSignUp}>
            회원가입
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
