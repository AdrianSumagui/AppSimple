import React from 'react';

class App extends React.Component {

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

          <input type="text" name="todoTitle" placeholder="Título" value="" onChange={this.updateChange}/>

        </div>

        <br/>

        <div className="form-input">

          <input type="text" name="todoDescription" placeholder="Descripción" value="" onChange={this.updateChange}/>

        </div>

        <br/>

        <button>REGISTRARSE</button>

      </form>

      <br/>

      <h2>Lista de participantes</h2>

      <br/>

      <div className="listado">



      </div>

      </div>

      </React.Fragment>

      );

    }

};

export default App;
