

// import React, { useState } from 'react';

// const ErrorTest = () => {
//   const [shouldThrowError, setShouldThrowError] = useState(false);

//   // This will trigger the Error Boundary when state is true
//   if (shouldThrowError) {
//     throw new Error('This is a test error to demonstrate the Error Boundary!');
//   }

//   const triggerError = () => {
//     setShouldThrowError(true);
//   };

//   return (
//     <div className="todo-app">
//       <div className="todo-container">
//         {/* Header */}
//         <div className="todo-header">
//           <h1 className="todo-title">🚨 Error Test Page</h1>
//           <p className="todo-subtitle">Test the Error Boundary component</p>
//         </div>

//         {/* Error Test Card */}
//         <div className="todos-container">
//           <div className="todos-header">
//             <h2 className="todos-title">Error Boundary Test</h2>
//           </div>
          
//           <div style={{ padding: '2rem', textAlign: 'center' }}>
//             <div style={{ marginBottom: '1.5rem' }}>
//               <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
//               <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
//                 Click the button below to trigger an error and test the Error Boundary component. 
//                 This will demonstrate how errors are handled in the application.
//               </p>
//             </div>

//             <button 
//               onClick={triggerError}
//               className="add-todo-btn"
//               style={{ 
//                 backgroundColor: '#dc2626',
//                 fontSize: '1.1rem',
//                 padding: '1rem 2rem'
//               }}
//             >
//               <span>💥</span>
//               Trigger Error
//             </button>

//             <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
//               <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}>
//                 <strong>Note:</strong> This will intentionally break the page to test error handling. 
//                 The Error Boundary should catch it and display a fallback UI.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="pagination-container">
//           <div className="pagination-wrapper" style={{ justifyContent: 'center' }}>
//             <a 
//               href="/" 
//               className="pagination-btn"
//               style={{ textDecoration: 'none', color: 'inherit' }}
//             >
//               ⬅️ Back to Home
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorTest;



















//  pages/ErrorTest.tsx
import React, { useState } from 'react';

const ErrorTest: React.FC = () => {
  const [shouldThrowError, setShouldThrowError] = useState<boolean>(false);

  // This will trigger the Error Boundary when state is true
  if (shouldThrowError) {
    throw new Error('This is a test error to demonstrate the Error Boundary!');
  }

  const triggerError = (): void => {
    setShouldThrowError(true);
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        <div className="todo-header">
          <h1 className="todo-title">🚨 Error Test Page</h1>
          <p className="todo-subtitle">Test the Error Boundary component</p>
        </div>

        <div className="todos-container">
          <div className="todos-header">
            <h2 className="todos-title">Error Boundary Test</h2>
          </div>

          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Click the button below to trigger an error and test the Error Boundary component. 
                This will demonstrate how errors are handled in the application.
              </p>
            </div>

            <button 
              onClick={triggerError}
              className="add-todo-btn"
              style={{ 
                backgroundColor: '#dc2626',
                fontSize: '1.1rem',
                padding: '1rem 2rem'
              }}
            >
              <span>💥</span>
              Trigger Error
            </button>

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
              <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}>
                <strong>Note:</strong> This will intentionally break the page to test error handling. 
                The Error Boundary should catch it and display a fallback UI.
              </p>
            </div>
          </div>
        </div>

        <div className="pagination-container">
          <div className="pagination-wrapper" style={{ justifyContent: 'center' }}>
            <a 
              href="/" 
              className="pagination-btn"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              ⬅️ Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorTest;