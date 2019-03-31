import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="small text-center text-muted">
          Copyright &copy; {new Date().getFullYear()} CryptoInvestors.All Rights
          Reserved.
        </h1>
      </div>
    </footer>
  );
};
