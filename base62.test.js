const Base62 = require("./base62");

describe("Base62 Algorithm", () => {
  test("should encode and decode correctly the numbers", () => {
    expect(Base62.encode(11157)).toEqual("2TX");
    expect(Base62.decode("2TX")).toEqual(11157);

    expect(Base62.encode(123456789089898)).toEqual("z3wBXxG2");
    expect(Base62.decode("z3wBXxG2")).toEqual(123456789089898);
  });

  test("should throw an exeception for invalid number in encode", () => {
    expect(() => {
      expect(Base62.encode("fake"));
    }).toThrow(new Error("The value has to be a number"));
  });

  test("should throw an exeception for invalid string in decode", () => {
    expect(() => {
      expect(Base62.decode(undefined));
    }).toThrow(new Error("The value has to be a string"));
  });
});
