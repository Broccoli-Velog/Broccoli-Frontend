import axios from "axios";

// 회원가입----------------------------------
// axios.post('http://localhost:3000/auth/register', {
//     "email": "tes@aa",
//     "password": "aaaa",
//     "nickname": "sxgfw"
// }
// ).then(res=>console.log(res.data))
// .catch(err=>{
//     console.log(err.response.data);
// })
// .finally(() => console.log('axios 실행'))

// 로그인--------------------------------------
// axios.post('http://localhost:3000/auth/login', {
//     "email": "tes@3333",
//     "password": "2434f"
// }
// ).then(res=>console.log(res.data))
// .catch(err=>{
//     console.log(err.response.data);
// })
// .finally(() => console.log('axios 실행'))

// 토큰-----------------------------------------
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5pY2tuYW1lIjoibm5mZmRhbWUiLCJpYXQiOjE2NTk1MjEwNTd9.3hI3mpf-JBNBwOlzTvFMfMFftmt52UF1yjMbWGGGRio"

// 로컬 스토리지
// localStorage.setItem('key', 'token-vlaue');
// localStorage.getItem('key');
// ------------------------------------------------

// 전체 노트-------------------------------
axios.get('http://localhost:3000/note', {
}
).then(res=>{
    console.log(res.data.result.queryResult)
})
.catch(err=>{
    console.log(err.response.data);
})
.finally(() => console.log('axios 실행'))
