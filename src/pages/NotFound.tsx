
// import React from 'react';

// const NotFound = () => {
//   return (
//     <div className="todo-app">
//       <div className="todo-container">
//         <div className="todos-container">
//           <div style={{ padding: '3rem', textAlign: 'center' }}>
//             <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🔍</div>
//             <h1 style={{ 
//               fontSize: '3rem', 
//               color: '#4f46e5',
//               marginBottom: '1rem',
//               fontWeight: 'bold'
//             }}>
//               404
//             </h1>
//             <h2 style={{ 
//               color: '#1f2937', 
//               fontSize: '1.5rem', 
//               marginBottom: '1rem' 
//             }}>
//               Page Not Found
//             </h2>
//             <p style={{ 
//               color: '#6b7280', 
//               marginBottom: '2rem',
//               fontSize: '1.1rem',
//               lineHeight: '1.6'
//             }}>
//               Sorry, the page you're looking for doesn't exist. 
//               It might have been moved, deleted, or you entered the wrong URL.
//             </p>

//             <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
//               <a 
//                 href="/"
//                 className="add-todo-btn"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 🏠 Go Home
//               </a>
//               <button 
//                 onClick={() => window.history.back()}
//                 className="pagination-btn"
//               >
//                 ⬅️ Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;











// pages/NotFound.tsx
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="todo-app">
      <div className="todo-container">
        <div className="todos-container">
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🔍</div>
            <h1 style={{ 
              fontSize: '3rem', 
              color: '#4f46e5',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              404
            </h1>
            <h2 style={{ 
              color: '#1f2937', 
              fontSize: '1.5rem', 
              marginBottom: '1rem' 
            }}>
              Page Not Found
            </h2>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '2rem',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Sorry, the page you're looking for doesn't exist. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a 
                href="/"
                className="add-todo-btn"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                🏠 Go Home
              </a>
              <button 
                onClick={() => window.history.back()}
                className="pagination-btn"
              >
                ⬅️ Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;