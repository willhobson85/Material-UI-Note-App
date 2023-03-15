import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      {/* app bar */}

      {/* side drawer */}
      <div 
        sx={{
          background: '#f9f9f9',
          width: '100%'
        }}
      >
        {children}
      </div>
    </div>
  )
}