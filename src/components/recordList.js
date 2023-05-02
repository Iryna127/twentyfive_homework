import PhoneCard from './phoneCard';


const RecordList = (props) => {


  return (
    <div>
      {props.recordList?.data &&
        props.recordList.data.map((record, index) => (
          <PhoneCard recordCard={record} recordId={index} />
         
        ))}
    </div>
  );
};
export default RecordList;
