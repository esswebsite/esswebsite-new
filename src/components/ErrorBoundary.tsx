import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Karama Business Center portal:', error, errorInfo);
  }

  private handleReset = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8FAFA] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="w-16 h-16 bg-teal-50 border border-teal-200 text-[#128B94] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              KBC
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">Karama Business Center Portal</h1>
            <p className="text-sm text-slate-600 mb-6">
              A temporary interface issue occurred while loading this view. You can safely return to the home page or reload the session.
            </p>
            {this.state.error?.message && (
              <div className="text-left bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono text-slate-700 mb-6 overflow-auto max-h-32">
                {this.state.error.message}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#0E6C73] text-white font-medium text-sm transition-colors shadow-sm"
              >
                Reload Portal
              </button>
              <a
                href="/"
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = '/';
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
