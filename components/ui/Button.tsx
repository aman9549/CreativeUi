type ButtonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({name, onClick, className , disabled}:ButtonProps) => {
  return (
    <div className="bg-gradient-blue px-[30px] py-[15px] text-white para rounded-md" >{name}</div>
  )
}

export default Button