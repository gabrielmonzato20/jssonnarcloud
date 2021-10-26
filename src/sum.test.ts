const sum = require("./sum");

test("ADD 1000 PLUS 1000 EQUAL A 2000 EXPECT",()=>{
  expect(sum(1000,1000)).toBe(2000);
})
