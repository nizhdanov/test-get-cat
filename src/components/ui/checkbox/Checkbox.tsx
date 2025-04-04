interface CheckboxProps extends React.ComponentProps<'input'> {
  title: string;
}

export const Checkbox = ({ title, ...props }: CheckboxProps) => {
  return (
    <label>
      <input type='checkbox' {...props} />
      <span>{title}</span>
    </label>
  );
};
