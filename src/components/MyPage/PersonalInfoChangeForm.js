import styled from 'styled-components';
import React, {useState} from 'react';

const RegisterWrapper = styled.registerWrapper`

`;

const Title = styled.title`
    
`;

const IdForm = styled.idForm`
    color: red;
    font-size: small;
`;


const Password = styled.password`
    color: red;
    font-size: small;
`;

const PasswordCheck = styled.passwordCheck`

`;

function PesonalInfoChangeForm(){
    const [nickname , setNickname] = useState(" ");
    const [password , setPassword] = useState(" ");
    const [confirmPassword , setConfirmPassword] = useState(" ");
    const [phoneNo , setPhoneNo] = useState(" ");
    const [email , setEmail] = useState(" ");
    const [gender] = useState(" ");

const onNicknameHandler = (event) => { //닉네임 재설정
    setNickname(event.currentTarget.value)
}

const onPasswordHandler = (event) => { //비밀번호 재설정
    setPassword(event.currentTarget.value)

}

const onConfirmPasswordHandler = (event) => { //비밀번호 재설정 확인
    setConfirmPassword(event.currentTarget.value)
}

const onPhoneNoHandler = (event) => { //핸드폰 번호 재설정
    setPhoneNo(event.currentTarget.value)
}

const onEmailHandler = (event) => { //이메일 재설정
    setEmail(event.currentTarget.value)
}

const onGenderlHandler = (event) => { //성별 재설정
    setGender(event.currentTarget.value)
}

function onSubmit(event){ 
    //비밀번호와 변경한 비밀번호가 같은지 확인
    event.preventDefault()
    if(password !== confirmPassword) {
      document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
      document.getElementById('check').style.color='red';
    }
    

  }


//주소는 저번 회의 때 이야기 했던 대로, 제외
    return(
        /*비밀번호 변경, 닉네임 변경, 핸드폰 번호 변경, 이메일 변경, 성별 변경 가능*/
        <div class="personalinfochangeform">
            <Title>개인정보 변경</Title>
            <form>
                <div>비밀번호: <input type="password" placeholder='비밀번호' value={password} onChange={onPasswordHandler} />
                <Password>비밀번호는 영어, 숫자, 특수문자를 모두 포함해 작성해주세요</Password>
                </div>
                <div>비밀번호 재확인: <input type="password" placeholder='비밀번호 재확인' value={confirmPassword} onChange={onConfirmPasswordHandler} />
                &nbsp;
                <span id="check"></span></div>
                <div>닉네임: <input type="text" placeholder='닉네임' value={nickname} onChange={onNicknameHandler} /></div>
                <div>핸드폰 번호: <input type="text" placeholder='핸드폰 번호' maxlength="13" value={phoneNo} onChange={onPhoneNoHandler} /></div>
                <div>이메일: <input type="text" placeholder='이메일' value={email} onChange={onEmailHandler} /></div>
                <div>성별: <input type="radio" placeholder='성별' value={gender} onChange={onGenderlHandler} /></div>
                <div><button type="submit" onSubmit={onSubmit} class="personalinfochangeform_button">개인정보 변경하기</button></div>
            </form>
        </div>
    );
}

export default PersonalInfoChangeForm;