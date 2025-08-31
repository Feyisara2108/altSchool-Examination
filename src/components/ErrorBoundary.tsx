// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Error Boundary caught an error:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="todo-app">
//           <div className="todo-container">
//             <div className="todos-container">
//               <div style={{ padding: '3rem', textAlign: 'center' }}>
//                 <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😵</div>
//                 <h2 style={{ 
//                   color: '#dc2626', 
//                   fontSize: '2rem', 
//                   marginBottom: '1rem',
//                   fontWeight: 'bold'
//                 }}>
//                   Oops! Something went wrong
//                 </h2>
//                 <p style={{ 
//                   color: '#6b7280', 
//                   marginBottom: '2rem',
//                   fontSize: '1.1rem',
//                   lineHeight: '1.6'
//                 }}>
//                   The application encountered an error and couldn't continue. 
//                   This error has been logged for our development team.
//                 </p>
                
//                 {/* Error Details */}
//                 <div style={{ 
//                   background: '#fef2f2', 
//                   border: '1px solid #fecaca',
//                   borderRadius: '8px',
//                   padding: '1rem',
//                   marginBottom: '2rem',
//                   textAlign: 'left'
//                 }}>
//                   <h3 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Error Details:</h3>
//                   <code style={{ 
//                     color: '#991b1b',
//                     fontSize: '0.875rem',
//                     wordBreak: 'break-word'
//                   }}>
//                     {this.state.error?.toString()}
//                   </code>
//                 </div>

//                 <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
//                   <button 
//                     onClick={() => window.location.reload()}
//                     className="add-todo-btn"
//                   >
//                     🔄 Reload Page
//                   </button>
//                   <a 
//                     href="/"
//                     className="pagination-btn"
//                     style={{ 
//                       textDecoration: 'none',
//                       color: 'inherit',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.5rem'
//                     }}
//                   >
//                     🏠 Go Home
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;









// components/ErrorBoundary.tsx
import { Component, ReactNode, ErrorInfo } from 'react';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="todo-app">
          <div className="todo-container">
            <div className="todos-container">
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😵</div>
                <h2 style={{ 
                  color: '#dc2626', 
                  fontSize: '2rem', 
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  Oops! Something went wrong
                </h2>
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '2rem',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  The application encountered an error and couldn't continue. 
                  This error has been logged for our development team.
                </p>

                <div style={{ 
                  background: '#fef2f2', 
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '2rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Error Details:</h3>
                  <code style={{ 
                    color: '#991b1b',
                    fontSize: '0.875rem',
                    wordBreak: 'break-word'
                  }}>
                    {this.state.error?.toString()}
                  </code>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button 
                    onClick={() => window.location.reload()}
                    className="add-todo-btn"
                  >
                    🔄 Reload Page
                  </button>
                  <a 
                    href="/"
                    className="pagination-btn"
                    style={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    🏠 Go Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;