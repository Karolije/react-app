import "./App.css";
import Form from "./components/Form/Form";
import { colors } from "./theme";
function App() {
  return (
    <div
      style={{
        padding: "2rem",
        background: colors.background,
        height: "100vh",
      }}
    >
      <Form />{" "}
    </div>
  );
}

export default App;
