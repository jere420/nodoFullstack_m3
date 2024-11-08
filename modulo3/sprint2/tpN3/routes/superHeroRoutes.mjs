import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

export default router;















/* 
Este código define una serie de rutas de la API usando express.Router()
 y asigna controladores específicos para cada una de las rutas. Las rutas permiten obtener todos los superhéroes,
  buscar por ID, buscar por un atributo específico y obtener los superhéroes mayores de 30 años.



Funcionalidad: Este archivo define las rutas necesarias para cada operación del controlador. */