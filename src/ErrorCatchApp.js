import ErrorBoundary from "./ErrorBoundary";
import User from "./User";

const ErrorCatchApp = () => {
  const user = {
    id: 1,
    usernmae: "heeyoung",
  };

  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
};

export default ErrorCatchApp;
