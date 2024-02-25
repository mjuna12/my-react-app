import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col bg-blue-100">
        <h1 className="text-5xl font-black text-blue-900">Oops!</h1>
        <p className="my-5 text-xl font-semibold">Sorry, an unexpected error has occured</p>
        <p className="text-lg font-medium">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;