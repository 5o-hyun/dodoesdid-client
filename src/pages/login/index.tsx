import { ReactComponent as Logo } from '@assets/images/common/logo.svg';
import { ReactComponent as GoogleIcon } from '@assets/images/login/google.svg';
import { ReactComponent as KakaoIcon } from '@assets/images/login/kakao.svg';

import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="bg-primary h-lvh flex flex-col justify-between">
      <div className="pt-[126px] flex flex-col items-center gap-[12px]">
        <p className="text-white font-semibold text-[17px]">
          친구들과 함께 하는 1일 1다짐
        </p>
        <Logo />
        <img src="http://via.placeholder.com/262x215" alt="임시이미지" />
      </div>
      <div className="pb-[50px] flex flex-col items-center px-[16px]">
        <button className="w-full h-[52px] rounded-[8px] bg-[#fee500] text-black text-[16px] font-semibold flex items-center justify-center gap-[8px] mb-[12px]">
          <KakaoIcon />
          <p>카카오 계정으로 로그인</p>
        </button>
        <button className="w-full h-[52px] rounded-[8px] bg-white text-black text-[16px] font-semibold flex items-center justify-center gap-[8px] mb-[36px]">
          <GoogleIcon />
          <p>Goole 계정으로 로그인</p>
        </button>
        <p className="text-white text-[16px] ">
          <Link to={'/login-email'}>이메일로 로그인</Link> /{' '}
          <Link to={'/join'}>회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;