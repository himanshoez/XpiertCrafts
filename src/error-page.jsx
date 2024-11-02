// ErrorPage.js
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  // Default error message
  let errorMessage = "An unexpected error occurred.";

  // Check if the error is related to a 404 (Not Found)
  if (error.status === 404) {
    errorMessage = "Page not found. The page you are looking for does not exist.";
  } else if (error.statusText) {
    errorMessage = error.statusText;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-black">Error {error.status || 'Unknown'}</h1>
      <p className="text-lg mt-4">{errorMessage}</p>
      <a href="/" className="mt-6 text-blue-500 underline">
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
