const Button = (props) => {
    const {children, color="bg-white", onClick = () => {}, type="button" } = props;
    return (
      <button className={`${color} rounded-lg p-2 font-semibold text-white`} 
      type={type}
      onClick={onClick} >
        {children}
      </button>
    )
  }

export default Button;