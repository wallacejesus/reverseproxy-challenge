import { create, readAll } from '../repositories/PeopleRepository';
import { People } from '../model/People';
import {default as names}  from '../assets/names.json';
export async function createPeople(): Promise<{success: boolean; error?: any, peoples?: any}> {
    try{

        const name:string = `${names[Math.floor(Math.random() * names.length - 1)]} ${names[Math.floor(Math.random() * names.length - 1)]}`
        await create({ name: name } as People);
        const peoples = await readAll();
        return {success: true, peoples};
    }
    catch(err) {
        return {success: false, error: err};
    }
}