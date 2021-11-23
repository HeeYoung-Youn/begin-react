import ErrorBoundary from './ErrorBoundary';
import User from './User';

const ErrorCatchApp = () => {
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
};

export default ErrorCatchApp;
