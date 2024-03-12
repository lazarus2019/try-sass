// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Option = ({ value }: { value: any }) => {
  console.log({ value });
  return <option value={value}>{value}</option>;
};
