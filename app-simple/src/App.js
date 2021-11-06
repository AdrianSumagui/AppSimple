import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {

    todoTitle: '',
    todoDescription: '',
    todos: []

  };

  // Recoger los datos desde la base de datos.

  componentDidMount = () => { // Llamo a la función getData() cuando el componente haya cargado. -> componentDidMount()

    this.getData();

  };

  // Recibe los datos de la base de datos.

  getData = () => {

    axios.get('/api')

      .then((response) => {

        const data = response.data;
        this.setState({todos: data})
        console.log('Los datos han sido recibidos correctamente. :D');

      })

      .catch(() => {

        alert('Error. Los datos no se han recibido. D:');

      });

  };

  handleChange = (event) => {

    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({

      [name]: value

    });

  };

  submit = (event) => {

    event.preventDefault();

    const payload = {

      todoTitle: this.state.todoTitle,
      todoDescription: this.state.todoDescription

    };

    axios({

      url:'/api/save',
      method: 'POST',
      data: payload

    })

    .then(() => {

      console.log('Los datos se han enviado al servidor. :D');
      this.resetInput();
      this.getData();

    })
    
    .catch(() => {

      console.log('Los datos no se han enviado al servidor. D:');

    })

  };

// Reseteo los inputs para que el usuario pueda añadir más.

  resetInput = () => { 

    this.setState({

      todoTitle: '',
      todoDescription: ''

    });

  };

  // Mostrar los datos recibidos desde la base de datos.

  showData = (todos) => {

    if (!todos.length) return null;

      return todos.map((todoss, index) => (
      <div key={index}>
        <h3>{todoss.todoTitle}</h3>
        <p>{todoss.todoDescription}</p>
      </div>

    ));
  }


  render() {

    console.log('State: ', this.state);

    return(

      <React.Fragment>

      <header className="titular">

        <h1>Todo App</h1>

      </header>

      <div>

        <h2>Mantén tus tareas organizadas añadiéndolas a esta lista. :D</h2>

      <article>

       <p>Recuerda que tienes la opción de editar o eliminar tareas.</p>

      </article>

      <br/>

      <form onSubmit={this.submit}>
        
        <div className="form-input">

          <input type="text" name="todoTitle" placeholder="Título" value={this.state.todoTitle} onChange={this.handleChange}/>

        </div>

        <br/>

        <div className="form-input">

          <input type="text" name="todoDescription" placeholder="Descripción" value={this.state.todoDescription} onChange={this.handleChange}/>

        </div>

        <br/>

        <button>AÑADIR TAREA</button>

      </form>



      <br/>

      <h2>Lista de tareas pendientes</h2>

      <br/>


      <div className = "listado">

        {this.showData(this.state.todos)}

      </div>


      </div>

      </React.Fragment>

      );

    }

};

export default App;
