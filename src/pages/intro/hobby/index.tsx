import MetaTag from '@/common/MetaTag';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HobbyPage = () => {
    const navigate = useNavigate();
    const viewPage = (str:string) => {
        navigate(str);
    }
    return (
        <div>
            <MetaTag title={'yoonzeen-hobby'} description={'yoonzeen hobby page 입니다'} imgsrc={'https://raw.githubusercontent.com/yoonzeen/seo-test/master/public/og.jpg'} url={'https://yoonzeen-seo-test.netlify.app/intro/hobby'} />
            <ul>
                <li onClick={() => viewPage('/')}>HOME</li>
                <li onClick={() => viewPage('/intro')}>INTRO</li>
                <li onClick={() => viewPage('/intro/hobby')}>HOBBY</li>
                <li onClick={() => viewPage('/profile/abcd')}>PROFILE</li>
                <li onClick={() => viewPage('/category/1')}>CATEGORY1</li>
                <li onClick={() => viewPage('/category/2')}>CATEGORY2</li>
                <li onClick={() => viewPage('/category/3')}>CATEGORY3</li>
            </ul>
            <h1>HOBBY~~</h1>
        </div>
    );
};

export default HobbyPage;