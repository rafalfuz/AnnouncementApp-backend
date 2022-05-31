import { AdRecord } from "../records/ad.record"

test("Can build AdRecord", ()=>{
    const ad = new AdRecord({
        name: 'Test name',
        description: 'haha',
        url: 'https://www.google.pl',
        price: 100,
        lat: 9,
        lon: 9
    });
    expect(ad.name).toBe('Test name')
    expect(ad.description).toBe('haha')
    expect(ad.price).toBe(100)
})