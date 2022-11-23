import React from 'react';

const Input: React.FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: ()=>void;
  icon: JSX.Element;
}> = ({type, placeholder, onChange, value, icon}) => {
  return (
    <div style={{
      border: '1px #000000 solid',
      borderRadius: '6px',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <input type="text" style={{
        width: '100%'
      }} /> {icon}
    </div>
  );
};

export default Input;