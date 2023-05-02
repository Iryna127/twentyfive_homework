import useDeleteRecords from '../hooks/useDeleteRecords';
import usePutRecords from '../hooks/usePutRecords';
import { useState } from 'react';
import '../css/phoneCard.css';
const PhoneCard = ({ recordCard, recordId }) => {
  const [editText, setEditText] = useState(false);
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState('Fios2');
  const [userPhone, setUserPhone] = useState('+380730000000');
  const { changeRecord } = usePutRecords();
  const { delRecord } = useDeleteRecords();

  console.log(recordCard, recordId);
  console.log(data, recordId);

  const deleteHandler = (recordId) => {
    delRecord(recordId);
  };

  const changeHandle = (recordId) => {
    setEditText(!editText);
    console.log(recordId, data);
  };

  const changeFieldName = (e) => {
    setUserName(e.target.value);
    setData({ name: userName, phone: userPhone });
  };
  const changeFieldPhone = (e) => {
    setUserPhone(e.target.value);
    setData({ name: userName, phone: userPhone });
  };

  const changeHandleSave = (recordId) => {
    changeRecord(recordId, data);
    setEditText(!editText);
    console.log(recordId, data);
  };
  return (
    <>
      
      <div className='wrapper'>
        <div className='wrapper__div'>
{!editText ? (
          <div className="phone-card">
            {recordCard.name} : {recordCard.phone}
          </div>
        ) : (
          <>
            <div className="phone-card__input">
              <input value={userName} onChange={changeFieldName}></input> 
              <input value={userPhone} onChange={changeFieldPhone}></input>
            </div>
          </>
        )}
        <button onClick={() => deleteHandler(recordId)}>Delete</button>
        {!editText ? (
          <button onClick={() => changeHandle(recordId)}>Edit</button>
        ) : (
          <button onClick={() => changeHandleSave(recordId)}>Save</button>
        )}
        </div>
        
      </div>
    </>
  );
};
export default PhoneCard;
