import { Router } from 'express'
import testController from './Controllers/testController'
import userController from './Controllers/userController'
import categoriaController from './Controllers/categoriaController'
import statusController from './Controllers/statusController'
import tarefaController from './Controllers/tarefaController'

const routes = Router()
routes.get("/health-check", testController.healthCheck)
routes.get("/usuarios", userController.getUser)
routes.post("/usuarios", userController.createUser)
routes.post("/usuarios/login", userController.loginUser)

routes.post("/categorias", categoriaController.createCategoria)
routes.get("/categorias", categoriaController.getCategorias)
routes.get("/categorias/:id", categoriaController.getCategoriaById)
routes.put("/categorias/:id", categoriaController.updateCategoriaById)
routes.delete("/categorias/:id", categoriaController.deleteCategoriaById)

routes.post("/status/", statusController.createStatus)
routes.get("/status/", statusController.getStatus)
routes.get("/status/:id", statusController.getStatusById)
routes.put("/status/:id", statusController.UpdateStatusById)
routes.delete("/status/:id", statusController.deleteStatusById)

routes.post("/tarefas/", tarefaController.createTerafa)
routes.get("/tarefas/", tarefaController.getTarefas)
routes.get("/tarefas/:id", tarefaController.getTarefaById)
routes.put("/tarefas/:id", tarefaController.updateTarefaById)
routes.delete("/tarefas/:id", tarefaController.deleteTarefaById)
export {
    routes
} 