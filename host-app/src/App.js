import React from "react";

const RemoteApp = React.lazy(() => import("Remote/App"));

function App() {
  return (
    <div className="App">
      <RemoteApp />
    </div>
  );
}

export default App;
