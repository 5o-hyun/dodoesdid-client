import { profile } from '@lib/api/user';
import useDarkMode from '@lib/hooks/useDarkMode';
import useInput from '@lib/hooks/useInput';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { ReactComponent as CameraDarkIcon } from '@assets/images/home/camera-white.svg';
import { ReactComponent as CameraIcon } from '@assets/images/home/camera.svg';

import { useMutation } from '@tanstack/react-query';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePersonalPage = () => {
  const navigate = useNavigate();
  const isDarkMode = useDarkMode();
  const [nickname, onChangeNickname] = useInput('');
  const imgRef = useRef<HTMLInputElement>(null);
  const [previewImgPath, setPreviewImgPath] = useState<null | string>(null);
  const [info, setInfo] = useState<{
    image: File | null;
    nickname: string | null;
  }>({
    image: null,
    nickname: null,
  });

  const profileMutation = useMutation({
    mutationFn: profile,
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {},
  });

  const onClickSuccess = () => {
    profileMutation.mutate(info as { image: File; nickname: string });
  };

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      setInfo((prev) => ({ ...prev, image: img }));

      //이미지 미리보기 기능
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setPreviewImgPath(reader.result as string);
      };
    }
  };

  useEffect(() => {
    setInfo((prev) => ({ ...prev, nickname: nickname }));
  }, [nickname]);

  return (
    <div className="px-[16px]">
      <TopBar title="나의 프로필 만들기" onClickBack={() => navigate(-1)} />
      <label
        htmlFor="photo"
        className="bg-gray-30 w-[146px] h-[146px] rounded-full flex justify-center items-center cursor-pointer mb-[45px] mx-auto overflow-hidden dark:bg-[#2a2a2a]"
      >
        {!previewImgPath ? (
          isDarkMode ? (
            <CameraDarkIcon />
          ) : (
            <CameraIcon />
          )
        ) : (
          <img src={previewImgPath} alt="이미지 미리보기" />
        )}
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept=".png, .jpeg, .jpg"
        ref={imgRef}
        onChange={previewImage}
        hidden
      />
      <Input
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={onChangeNickname}
      />
      <Button
        disabled={!info.image || info.nickname === '' ? true : false}
        buttonType={
          !info.image || info.nickname === ''
            ? 'disabled-semibold'
            : 'fill-semibold'
        }
        name="다음"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onClick={onClickSuccess}
      />
    </div>
  );
};

export default ProfilePersonalPage;