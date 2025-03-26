import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Here you would typically log to your error tracking service
    // e.g., Sentry, LogRocket, etc.
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-atlas-black flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Something went wrong
            </h2>
            <p className="text-atlas-gray-400">
              We're working on fixing this issue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-atlas-teal text-white rounded-lg hover:bg-atlas-teal/90 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
