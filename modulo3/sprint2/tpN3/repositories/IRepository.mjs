class IRepository {
    obtenerPorId(id) {
      throw new Error("Método 'obtenerPorId()' no implementado");
    }
  
    obtenerTodos() {
      throw new Error("Método 'obtenerTodos()' no implementado");
    }
  
    buscarPorAtributo(atributo, valor) {
      throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
  
    obtenerMayoresDe30() {
      throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }
  }
  
  export default IRepository;
  




  // Define una clase interfaz (abstracta) llamada IRepository que contiene métodos no implementados para obtener datos, los cuales deberán ser definidos por las clases que hereden de ella.
