import { Router } from "express";

import { createCharacter,getCharacterFromDb,updateCharacter ,getCharacterById, deleteCharacter} from "../controllers/charactersControllers.js";

const router = Router()

router.post('/character', createCharacter)
router.get('/character', getCharacterFromDb)
router.get('/character/:id', getCharacterById)
router.put('/character/:id',updateCharacter)
router.delete('/character/:id',deleteCharacter)


export default router;