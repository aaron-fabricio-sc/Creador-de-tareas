import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { tareas } from "./tareas.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  handleAddTodo(todo) {
    this.setState({
      tareas: [...this.state.tareas, todo],
    });
  }

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4 carta">
            <div className="card-header">
              <h2>{tarea.titulo}</h2>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.prioridad}
              </span>
            </div>
            <div className="card-body">
              <h3 className="text-uppercase">{tarea.responsable}</h3>
              <p>{tarea.descripcion}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <Header name="tareas" number={this.state.tareas.length}></Header>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <Formulario onAddTodo={this.handleAddTodo}></Formulario>
            </div>
            <div className="col-md-8">
              <div className="row">{tareas}</div>
            </div>
          </div>
        </div>

        <div className=" contenedor-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
