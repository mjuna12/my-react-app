const AuthLayout = (props)=> {
    const { children, title } = props;
 return (
  <div className="flex justify-center min-h-screen items-center">
    <div className='w-full max-w-xs'>
        <h1 className='font-bold text-3xl text-blue-500 mb-2'>{title}</h1>
        <p className='font-medium text-slate-500 mb-8'>
          Welcome, Please enter your details!
        </p>
        {children}
      </div>
  </div>
 )
}

export default AuthLayout;