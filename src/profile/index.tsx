import MetaTag from '@/common/MetaTag';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    const viewPage = (str:string) => {
        navigate(str);
    }
    return (
        <div>
            <MetaTag title={'yoonzeen-profile'} descrition={'yoonzeen profile page 입니다'} imgsrc={'https://raw.githubusercontent.com/yoonzeen/seo-test/master/public/og.jpg'} url={'https://yoonzeen-seo-test.netlify.app/profile'} />
            <ul>
                <li onClick={() => viewPage('/')}>HOME</li>
                <li onClick={() => viewPage('/intro')}>INTRO</li>
                <li onClick={() => viewPage('/intro/hobby')}>HOBBY</li>
                <li onClick={() => viewPage('/profile')}>PROFILE</li>
            </ul>
            <h1>PROFILE ~!?</h1>
        </div>
    );
};

export default ProfilePage;