/* eslint-disable @typescript-eslint/no-unused-vars */

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      {/* <input type="text" value={value} onChange={handleInputChange} /> */}
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
