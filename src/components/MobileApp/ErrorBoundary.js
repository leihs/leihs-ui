import React from 'react'

// https://reactjs.org/docs/error-boundaries.html
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="alert alert-primary overflow-scroll">
          <h2>Something went wrong</h2>
          <button className="btn btn-primary btn-sm me-3" onClick={() => document.location.reload()}>
            Reload current page
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => (document.location.href = '/')}>
            Go to start page
          </button>
          <details style={{ whiteSpace: 'pre-wrap', fontSize: '0.75rem', marginTop: '1rem' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {/* NOTE: stacktrace has absolute paths in snapshot tests, which breaks them! */}
            {process.env.NODE_ENV === 'development' && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children === undefined ? null : this.props.children
  }
}
