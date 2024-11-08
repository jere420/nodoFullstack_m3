import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, 
    buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } 
    from '../services/superheroesService.mjs';
  import { renderizarSuperheroe, renderizarListaSuperheroes } 
    from '../views/responseView.mjs';
  
  export async function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
  
    if (superheroe) {
      res.send(renderizarSuperheroe(superheroe));
    } else {
      res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }
  }
  
  export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
  }
  
  export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
  
    if (superheroes.length > 0) {
      res.send(renderizarListaSuperheroes(superheroes));
    } else {
      res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
    }
  }
  
  export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = await obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
  }
  


/*Este archivo implementa el controlador para gestionar las solicitudes HTTP, llamando a los
servicios correspondientes y utilizando las vistas para presentar los datos. 
 */