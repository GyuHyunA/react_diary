import React from 'react';

const profileDate = {
    Leemit:{
        name : '안규현',
        description:
        'Frontend Enginner @ Laftel Inc. 재미있는 것만 골라서 하는 개발자'
    },
    gildong:{
        name : '홍길동',
        description : 
        '아따 이것이 뭔지 모르겠다야'
    }
}

function Profile({match}) {
    const {username} = match.params;
    const profile = profileDate[username];
    if(!profile) {
        return <div>존재하지 않는 유저</div>
    }

    return (
        <>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </>
    );
}

export default Profile;
