import { FieldPacket } from "mysql2";
import Pool from "mysql2/typings/mysql/lib/Pool";
import PoolCluster from "mysql2/typings/mysql/lib/PoolCluster";
import { AdEntity, NewAdEntity } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";


type AdRecordResults = [AdEntity[], FieldPacket[]]

export class AdRecord implements AdEntity {
    
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: NewAdEntity){
        if(!obj.name || obj.name.length > 100){
            throw new ValidationError('Nazwa ogloszenia nie moze byc pusta ani przekraczac 100 znakow'
            )
        }

        if(obj.description.length > 1000){
            throw new ValidationError('tresc ogloszenia nie moze byc dluzsza niz 1000 znakow')
        }

        if(obj.price < 0 || obj.price > 9999999){
            throw new ValidationError('Cena nie moze być mniejsza niż 0 oraz większa niż 9 999 999')
        }

        this.name = obj.name,
        this.description = obj.description,
        this.price = obj.price,
        this.url = obj.url,
        this.lat = obj.lat,
        this.lon = obj.lon
    }

    static async getOne(id: string):Promise<AdRecord | null> {
        const [result] = await pool.execute("SELECT * FROM `ads` WHERE id = :id",{
            id
        }) as AdRecordResults
        return new AdRecord(result[0])
    }
}