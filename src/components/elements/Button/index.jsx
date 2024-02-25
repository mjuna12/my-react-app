const Button = (props) => {
    const {children, color="bg-white"} = props;
    return (
      <button className={`${color} rounded-lg p-2 font-semibold text-white`}>
        {children}
      </button>
    )
  }

export default Button;