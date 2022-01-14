import './App.css';
import { Tiptap } from './TipTap';

function App() {
  return (
    <div className="demo-layout">
      <nav className="demo-nav">
        <div className="demo-nav-header">
          <span className="material-icons">test</span>
        </div>
      </nav>
      <div className="demo-sidebar">
        <div className="demo-sidebar-header">
          <div>DEMO</div>
          <div>demo</div>
        </div>
        <div className="demo-sidebar-content">
          <p>demo</p>
        </div>
      </div>
      <div className="demo-main">
        <header className="demo-main-header">
          <div>CONTENTS</div>
          <div>contents</div>
        </header>
        <section className="demo-main-contents">
          <div className="demo-main-content">
            <Tiptap />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
