import React from 'react';
import Qs from 'qs';

function Queryabout({location}) {
    const query = Qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail==='true';

    return (
        <>
            <h1>쿼리 라우터 소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 랍니다</p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p> }
        </>
    );
}

export default Queryabout;
