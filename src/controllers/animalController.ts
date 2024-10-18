import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Animal } from "../entities/Animal";

export const getAnimals = async (req: Request, res: Response): Promise<Response> => {
    const animals = await getRepository(Animal).find();
    return res.json(animals);
};

export const createAnimal = async (req: Request, res: Response): Promise<Response> => {
    const newAnimal = getRepository(Animal).create(req.body);
    const result = await getRepository(Animal).save(newAnimal);
    return res.json(result);
};

// Agrega otras operaciones como update y delete
