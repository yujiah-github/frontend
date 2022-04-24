import { useState } from 'react';
import { FormInput } from '../common/FormInput';
import { useForm } from '../../hooks';
import styled, { css } from 'styled-components';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const GoalInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.5rem 10px;
  input {
    font-size: 15px;
    padding: 0.5rem 0;
    &::placeholder {
      font-size: 15px;
    }
  }
  p {
    font-size: 15px;
  }
  .editBtn {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }
  &:hover {
    ${({ isEdit }) =>
      !isEdit &&
      css`
        &:hover .editBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            background-color: #000;
            color: #fff;
            padding: 0.3rem;
            border-radius: 10px;
          }
        }
      `}
  }
`;

function MoneyLogAssetGoal() {
  const { form, onChange } = useForm({
    goal: '',
  });
  const [isEdit, setIsEdit] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.goal === '') return;
    if (isEdit) {
      setIsEdit(false);
    }
  };
  return (
    <GoalInput isEdit={isEdit}>
      {isEdit ? (
        <>
          <FormInput
            value={form.goal}
            onChange={onChange}
            name="goal"
            placeholder="이번달 자산관리 목표를 작성해보세요"
          />
          <button onClick={onSubmit} className="submitBtn">
            <DriveFileRenameOutlineOutlinedIcon />
          </button>
        </>
      ) : (
        <>
          <p>🎯 {form.goal}</p>
          <div className="editBtn">
            <button onClick={() => setIsEdit(true)}>수정하기</button>
          </div>
        </>
      )}
    </GoalInput>
  );
}

export default MoneyLogAssetGoal;
