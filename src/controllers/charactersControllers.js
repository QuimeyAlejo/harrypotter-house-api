import { Character } from "../models/Characters.js";

export const createCharacter = async (req, res) => {
    const {name,lastName,house} = req.body

    if(!name || !lastName ||!house){
        return res.status(400).json({message: 'Datos incompletos'})
    }

    const newCharacter = await Character.create({
        name,
        lastName,
        house
    })
    res.json(newCharacter)
}
export const getCharacterFromDb = async (req,res) => {
    try {
        const character = await Character.findAll()
        res.status(200).json(character)
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    res.status(500).json({ message: "Error al obtener los personajes", error: error.message });
    }
}
export const updateCharacter = async (req, res) => {
    const {id} = req.params;

    const {name,lastName,house} = req.body
try {
    
    const character = await Character.findByPk(id);
    if (!character)
        return res.status(404).json({message:'Personaje no encontrado'})
    
    await character.update({
        name,
        lastName,
        house
    })
    await character.save()
    res.send(character)
} catch (error) {
    console.error(error)
}
    
}
export const getCharacterById =async(req,res) => {
    const {id} = req.params
    const character = await Character.findOne({where:{id}}
    )
    if(!character)
        res.status(400).send({message: "character not found"})
    res.send(character)
}
export const deleteCharacter = async(req,res)=> {
    const {id} = req.params;
    
    try {
        
        const character = await Character.findByPk(id)
    
        if(!character){
    
           return res.status(404).send({message: "character not found"})
        }
        await character.destroy();
        res.send( `El personaje con el ${id} ha sido eliminado`)
    } catch (error) {
        console.error("Error al eliminar personaje:", error);
        res.status(500).json({ message: "Error al eliminar el personaje",error: error.message  });
    }
}