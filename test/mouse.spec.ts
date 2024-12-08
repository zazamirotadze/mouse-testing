import { assert } from "chai";
import mouse from "../src/mouse.js";
import rightMouse from "./rightMouse.js";
import MouseMath from "../mousemath/mouseMath.js";


describe(`Validate if it is really ${rightMouse.name} ${rightMouse.surname}`, () => 
{
   it(`It should be ${rightMouse.color} and has a name ${rightMouse.name} ${rightMouse.surname}`, () => 
   {
      assert.deepStrictEqual(mouse.name, rightMouse.name, `Name must be ${rightMouse.name}`)
      assert.deepStrictEqual(mouse.surname, rightMouse.surname, `Surname must be ${rightMouse.surname}`)
      assert.deepStrictEqual(mouse.color, rightMouse.color, `Color must be ${rightMouse.color}`)
   });
   it('Validate if it is identical', () =>
   {
      assert.deepStrictEqual(mouse, rightMouse, 'They are not idenical')
   });
});

describe('Validate Custom MouseMath class', ()=>{
   it('Validate add Method', ()=>{
      assert.deepStrictEqual(MouseMath.add(2, 4), 6, 'Value must be 6')
   })
})