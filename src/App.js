import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
