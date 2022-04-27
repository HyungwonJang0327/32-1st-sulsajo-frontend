import React from 'react';
import './Subscribe.scss';
const Subscribe = () => {
  return (
    <div className="mainWrap">
      <div className="topWrap">
        <p className="firstComment">한달에 한 번, 찾아오는 인생술 만나보세요</p>
      </div>
      <div className="scrollEvent">구독이 망설여진다면 ?</div>

      <div className="imageBox">
        <div className="leftCell">
          <img
            className="leftImage"
            src="./images/damhwabox_basic.png"
            alt="왼쪽이미지"
          />
          <div className="leftComment">
            <div className="leftBox">
              <div className="header">
                <span className="box">담와박스</span>
                <span className="price">39,000원 / 월</span>
                {/* <div>O</div> */}
              </div>
              <div className="boxComment">
                다양한 주종을 경험할 수 있는 담화박스
              </div>
              <div className="hipoon" />
            </div>
            <div className="date">
              <div className="buyDate">결제일 : 12월 25일</div>
              <div className="arriveDay">도착일 : 1월 28일</div>
            </div>
            <div className="hintBox">
              <button className="hintOpen">힌트공개</button>
            </div>
          </div>
        </div>
        <div className="rightCell">
          <img
            className="rightImage"
            src="./images/damhwabox_soju.png"
            alt="우측이미지"
          />
          {/* <div className="rightComment"> */}
          <div className="rightComment">
            <div className="rightBox">
              <div className="header">
                <span className="box">증류주 담와박스</span>
                <span className="price">49,000원 / 월</span>
                {/* <div>O</div> */}
              </div>
              <div className="boxComment">
                다양한 주종을 경험할 수 있는 담화박스
              </div>
              <div className="hipoon" />
            </div>
            <div className="date">
              <div className="buyDate">결제일 : 12월 25일</div>
              <div className="arriveDay">도착일 : 1월 28일</div>
            </div>
            <div className="hintBox">
              <button className="hintOpen">힌트공개</button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="mainBanner">
        <img className="mainBannerImg" src="./images/landing-banner-pc1.png" />
      </div>
      <div className="firstMainText">한 달을 특별하게 해주는</div>
      <div className="secondMainText">가장 편리한 방법</div>
      <button className="subscribeButton">구독하러 가기</button>
      <div className="firstSubscribeText">전통주 구독을</div>
      <div className="secondSubscribeText">술담화로 시작해야 하는 이유</div>
      <div className="landingBanner">
        <img src="./images/landing-banner-pc2.png" />
      </div>
      <div className="descriptionWrapper">
        <div className="landingIcon">
          <img src="./images/landing-icon1.png" />
          <div className="firstDescription">
            유일하게 문 앞 배송이 가능한 술
          </div>
          <div className="secondDescription">편리한 홈술</div>
          <div className="thirdDescription">일상 속 소중한 담화</div>
        </div>
        <div className="landingIcon">
          <img src="./images/landing-icon2.png" />
          <div className="firstDescription">술에 진심인 소믈리에 픽</div>
          <div className="secondDescription">
            전국 1,200개 이상의 양조장 술 중
          </div>
          <div className="thirdDescription">잠재적 ‘인생술’만 골라 받기</div>
        </div>
        <div className="landingIcon">
          <img src="./images/landing-icon3.png" />
          <div className="firstDescription">가성비도 잊지 않았어요!</div>
          <div className="secondDescription">단품 구매보다</div>
          <div className="thirdDescription">평균 12% 더 저렴한 술로 구성</div>
        </div>
      </div>
      <div className="dontWorry">걱정 마세요!</div>
      <div className="dontWorryWrapper">
        <div className="leftIcon">
          <button />
        </div>
        <div className="dontWorryBox">
          <img src="./images/landing-slide-icon2.png" />
          <div>노련한 소믈리에들이</div>
          <div>매달 블라인드 테이스팅을 통해</div>
          <div>누군가의 '인생술'이 될 수 있는 술들을 선별합니다.</div>
        </div>
        <div className="rightIcon">
          <button />
        </div>
      </div>
      <ul className="buttonWrapper">
        <li className="slideButton" />
        <li className="slideButton" />
        <li className="slideButton" />
      </ul>
      <div className="recentlyText">최근 담화, 함께 볼까요?</div>
      <div className="recentylBox">
        <div>한달에 한번씩</div>
        <div>나에게 주는 선물</div>
        <div>HyeongJoon</div>
      </div>
      <div className="converSationWrapper">
        <img src="./images/bubble_conversation.png" />
      </div>
      <div className="tripDescription">
        자, 이제 나만의 '인생술 찾기 여정'을
      </div>
      <div className="startDescription">시작할 준비 되셨나요?</div>
      <button className="subscribeButton">구독하러 가기</button>
    </div>
  );
};

export default Subscribe;
