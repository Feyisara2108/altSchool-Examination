// import React from 'react';

// const Layout = ({ children }) => {
//   return (
//     <div className="app-layout">
//       {/* Optional: Add navigation bar here */}
//       <nav style={{ 
//         background: 'white', 
//         padding: '1rem 2rem', 
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         marginBottom: '0'
//       }}>
//         <div style={{ 
//           maxWidth: '1000px', 
//           margin: '0 auto', 
//           display: 'flex', 
//           gap: '2rem', 
//           alignItems: 'center' 
//         }}>
//           <a 
//             href="/" 
//             style={{ 
//               textDecoration: 'none', 
//               fontWeight: '600', 
//               color: '#4f46e5',
//               fontSize: '1.2rem'
//             }}
//           >
//             🏠 Home
//           </a>
//           <a 
//             href="/error-test" 
//             style={{ 
//               textDecoration: 'none', 
//               color: '#6b7280',
//               fontSize: '1rem'
//             }}
//           >
//             🚨 Error Test
//           </a>
//         </div>
//       </nav>
      
//       <main>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

















// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <nav style={{ 
        background: 'white', 
        padding: '1rem 2rem', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '0'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          <a 
            href="/" 
            style={{ 
              textDecoration: 'none', 
              fontWeight: '600', 
              color: '#4f46e5',
              fontSize: '1.2rem'
            }}
          >
            🏠 Home
          </a>
          <a 
            href="/error-test" 
            style={{ 
              textDecoration: 'none', 
              color: '#6b7280',
              fontSize: '1rem'
            }}
          >
            🚨 Error Test
          </a>
        </div>
      </nav>

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
