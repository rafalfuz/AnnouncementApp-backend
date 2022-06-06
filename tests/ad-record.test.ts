import { AdRecord } from "../records/ad.record"

export const defaultObject = {
        name: 'Test name',
        description: 'haha',
        url: 'https://www.fbi.gov',
        price: 100,
        lat: 9,
        lon: 9
}

test("Can build AdRecord", ()=>{
    const ad = new AdRecord(defaultObject);
    
    expect(ad.name).toBe('Test name')
    expect(ad.description).toBe('haha')
    expect(ad.price).toBe(100)
    expect(ad.url).toBe('https://www.fbi.gov')
})