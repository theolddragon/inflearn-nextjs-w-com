import React from 'react';

const AfterLoginLayout = async ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            애프터 로그인 레이아웃
            {children}
        </div>
    );
};

export default AfterLoginLayout;
