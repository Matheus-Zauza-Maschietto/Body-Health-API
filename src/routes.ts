import { Router } from 'express'
import testController from './Controllers/testController'
import userController from './Controllers/userController'
import peopleController from './Controllers/peopleController'
import personalTrainerController from './Controllers/personalTrainerController'
import sessionsController from './Controllers/sessionsController'

const routes = Router()
routes.get("/health-check", testController.healthCheck)
// routes.get("/usuarios", userController.getUsers)
// routes.get("/usuarios/:id", userController.getUserById)
// routes.post("/usuarios", userController.createUser)
routes.post("/usuarios/login", userController.loginUser)

routes.get("/pessoa/:id", peopleController.getPeopleById)
routes.post("/pessoa", peopleController.createPeople)

routes.post("/personal", personalTrainerController.createPersonalTrainer)
routes.get("/personal/:id", personalTrainerController.getPersonalTrainerById)
routes.get("/personal", personalTrainerController.getPersonalTrainers)

routes.post("/session", sessionsController.createSession)
routes.get("/session", sessionsController.getSessionsByUser)

export {
    routes
} 