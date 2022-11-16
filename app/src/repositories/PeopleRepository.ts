import { db } from '../db';
import { People } from '../model/People';
export const create = (people: People) => {
    const queryString = "INSERT INTO people (name) VALUES (?)"
  
    return new Promise((resolve, reject) => {
      db.query(
      queryString,
      [ people.name],
      (err, result) => {
        const insertId = (<People> result).insertId;
        if (err) reject(err);

        resolve(insertId);
      });
    });
};

export const  readAll = (): Promise<People> => {
  return new Promise((resolve, reject) => {
    db.query<People>("SELECT * FROM people", (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}