import { AdRecord } from "../records/ad.record";
import { AdEntity } from "../types";
import { pool } from "../utils/db";
import { defaultObject } from "./ad-record.test";

afterAll(async ()=>{
    await pool.end()
})

test('AdRecord.getOne returns data from database for one entry.', async () => {

    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('TestowyName');

});

test('AdRecord.getOne returns null from database for unexisting record', async ()=>{
    const ad = await AdRecord.getOne('----------')
    expect(ad).toBeNull()
})

test('AddRecord.findAll returns array of found entries', async ()=>{
    const ad = await AdRecord.findAll('')

    expect(ad).not.toEqual([])
    expect(ad[0].id).toBeDefined()
})

test('AddRecord.findAll returns smaller amount of data', async ()=>{
    const ad = await AdRecord.findAll('')

    expect((ad[0] as AdEntity).price).toBeUndefined()
    expect((ad[0] as AdEntity).description).toBeUndefined()
})

test('AdRecord.insert returns new UUID', async ()=>{
    const ad = new AdRecord(defaultObject)

    await ad.insert()

    expect(ad.id).toBeDefined()
    expect(typeof ad.id).toBe('string')
})

test('AdRecord.insert returns new UUID', async ()=>{
    const ad = new AdRecord(defaultObject)
    await ad.insert()

    expect(ad.id).toBeDefined()
    expect(typeof ad.id).toBe('string')
})

test('AdRecord.insert inserts data to databse', async ()=>{
    const ad= new AdRecord(defaultObject)
    await ad.insert()

    const foundAd = await AdRecord.getOne(ad.id)

    expect(foundAd).toBeDefined()
    expect(foundAd).not.toBeNull()
    expect(foundAd.id).toBe(ad.id)
})