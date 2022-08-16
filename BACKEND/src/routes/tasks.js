// Definimos las rutas
import { Router } from 'express';    // Definimos la clase Router de express
import { getTasks } from '../controllers/tasks'

const router = Router()     // Definimos la constante que devolvera lo que ejecute Router

router.get('/tasks',getTasks)

router.get('/tasks/count')  

router.get('/tasks/:id')

router.post('/tasks/')

router.delete('/tasks/:id')

router.put('/tasks/:id')

export default router;