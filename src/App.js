import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// 다른 js파일과 연결하는 코드 (다른 화면으로 넘어가는)
// Routes를 씌워서 원하는 경로에 해당되는 컴포넌트만 표시되게 함 (사용하지 않으면 여러 컴포넌트가 해당 경로에 렌더링 될 수 있음)
// 동적 주소 할당을 위해 path에 ':id'를 사용하면 id를 동적으로 할당할 수 있음
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
