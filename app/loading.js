"use client";
export default function Loading() {
  return (
    <>
      <style jsx>{`
        .loader {
          margin: 0px;
          position: absolute;
          top: 50%;
          left: 50%;
          border: 10px solid #f3f3f3;
          border-top: 10px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 2s linear infinite;
          margin: auto;
        }

        .container {
          height: 100%;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="container">
        <div className="loader"></div>
      </div>
    </>
  );
}
