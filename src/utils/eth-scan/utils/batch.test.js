import{BigNumber}from"@ethersproject/bignumber";import{batch,chunk}from"./batch";describe("chunk",()=>{const a=["foo","bar","baz","qux"];it("should create chunks of an array",()=>{const b=chunk(a,2);expect(b).toHaveLength(2),expect(b[0][0]).toBe("foo"),expect(b[1][0]).toBe("baz")}),it("should keep uneven items",()=>{const b=chunk(a,3);expect(b).toHaveLength(2),expect(b[0]).toHaveLength(3),expect(b[1]).toHaveLength(1)})}),describe("batch",()=>{it("should batch function calls",async()=>{const a=jest.fn().mockImplementation(async(a)=>a.map(()=>BigNumber.from(1))),b=await batch(a,2,["0x0","0x1","0x2","0x3"]);expect(b).toHaveLength(4),expect(a).toHaveBeenCalledTimes(2),expect(a).toHaveBeenNthCalledWith(1,["0x0","0x1"]),expect(a).toHaveBeenNthCalledWith(2,["0x2","0x3"])})});
//# sourceMappingURL=batch.test.js.map