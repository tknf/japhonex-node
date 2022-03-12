import { japhonex } from "../japhonex";

/** pattern */
const DIG_2 = `00-0000-0000`;
const DIG_3 = `000-000-0000`;
const DIG_4 = `0000-00-0000`;
const DIG_5 = `00000-0-0000`;
const FREE_D_DIG_1 = `0120-0-00000`;
const FREE_D_DIG_2 = `0120-00-0000`;
const FREE_D_DIG_3 = `0120-000-000`;
const FREE_D_DIG_4 = `0120-0000-00`;
const FREE_D_DIG_5 = `0120-00000-0`;
const FREE_D_DIG_6 = `0120-000000`;
const MOBILE_D = `090-0000-0000`;

/** miss patterns */
const MISS_DIG_ANY_LAST = `00-0000-000`;
const MISS_DIG_2_MIDDLE = `00-00000-0000`;
const MISS_DIG_3_MIDDLE = `000-000000-0000`;
const MISS_DIG_4_MIDDLE = `0000-000-0000`;
const MISS_DIG_5_MIDDLE = `00000-00-0000`;
const MISS_FREE_D_LAST = `0120-00-000000`;
const MISS_FREE_D_MIDDLE = `0120-0000000-0`;
const MISS_MOBILE_D_LAST = `090-0000-00000`;
const MISS_MOBILE_D_MIDDLE = `090-00000-0000`;

/** no hyphen */
const NO_HYPHEN_DIG_9 = `000000000`;
const NO_HYPHEN_DIG_10 = `0000000000`;
const NO_HYPHEN_DIG_11 = `00000000000`;
const NO_HYPHEN_DIG_12 = `000000000000`;

describe("Japhonex", () => {
  describe("require hyphen", () => {
    const reg = japhonex({ hyphen: "require" });

    /** any digits */
    test("miss: any digits", () => {
      expect(reg.test(MISS_DIG_ANY_LAST)).toBe(false);
    });

    /** 2 digits */
    test("pass: 2 digits", () => {
      expect(reg.test(DIG_2)).toBe(true);
    });
    test("miss: 2 digits", () => {
      expect(reg.test(MISS_DIG_2_MIDDLE)).toBe(false);
    });

    /** 3 digits */
    test("pass: 3 digits", () => {
      expect(reg.test(DIG_3)).toBe(true);
    });
    test("miss: 3 digits", () => {
      expect(reg.test(MISS_DIG_3_MIDDLE)).toBe(false);
    });

    /** 4 digits */
    test("pass: 4 digits", () => {
      expect(reg.test(DIG_4)).toBe(true);
    });
    test("miss: 4 digits", () => {
      expect(reg.test(MISS_DIG_4_MIDDLE)).toBe(false);
    });

    /** 5 digits */
    test("pass: 5 digits", () => {
      expect(reg.test(DIG_5)).toBe(true);
    });
    test("miss: 5 digits", () => {
      expect(reg.test(MISS_DIG_5_MIDDLE)).toBe(false);
    });

    /** free dial - pass */
    test("free dial - pass: 1 digits", () => {
      expect(reg.test(FREE_D_DIG_1)).toBe(true);
    });
    test("free dial - pass: 2 digits", () => {
      expect(reg.test(FREE_D_DIG_2)).toBe(true);
    });
    test("free dial - pass: 3 digits", () => {
      expect(reg.test(FREE_D_DIG_3)).toBe(true);
    });
    test("free dial - pass: 4 digits", () => {
      expect(reg.test(FREE_D_DIG_4)).toBe(true);
    });
    test("free dial - pass: 5 digits", () => {
      expect(reg.test(FREE_D_DIG_5)).toBe(true);
    });
    test("free dial - pass: 6 digits", () => {
      expect(reg.test(FREE_D_DIG_6)).toBe(true);
    });

    /** free dial - miss */
    test("free dial - miss: last digits", () => {
      expect(reg.test(MISS_FREE_D_LAST)).toBe(false);
    });
    test("free dial - miss: middle digits", () => {
      expect(reg.test(MISS_FREE_D_MIDDLE)).toBe(false);
    });

    /** mobile pass */
    test("mobile - pass", () => {
      expect(reg.test(MOBILE_D)).toBe(true);
    });

    /** mobile miss */
    test("mobile - miss: last digits", () => {
      expect(reg.test(MISS_MOBILE_D_LAST)).toBe(false);
    });
    test("mobile - miss: middle digits", () => {
      expect(reg.test(MISS_MOBILE_D_MIDDLE)).toBe(false);
    });
  });

  describe("no hyphen", () => {
    const reg = japhonex({ hyphen: false });

    test("pass: 10 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_10)).toBe(true);
    });
    test("pass: 11 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_11)).toBe(true);
    });
    test("miss: 9 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_9)).toBe(false);
    });
    test("miss: 12 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_12)).toBe(false);
    });
  });

  describe("optional hyphen", () => {
    const reg = japhonex();

    /** any digits */
    test("miss: any digits", () => {
      expect(reg.test(MISS_DIG_ANY_LAST)).toBe(false);
    });

    /** 2 digits */
    test("pass: 2 digits", () => {
      expect(reg.test(DIG_2)).toBe(true);
    });
    test("miss: 2 digits", () => {
      expect(reg.test(MISS_DIG_2_MIDDLE)).toBe(false);
    });

    /** 3 digits */
    test("pass: 3 digits", () => {
      expect(reg.test(DIG_3)).toBe(true);
    });
    test("miss: 3 digits", () => {
      expect(reg.test(MISS_DIG_3_MIDDLE)).toBe(false);
    });

    /** 4 digits */
    test("pass: 4 digits", () => {
      expect(reg.test(DIG_4)).toBe(true);
    });
    test("miss: 4 digits", () => {
      expect(reg.test(MISS_DIG_4_MIDDLE)).toBe(false);
    });

    /** 5 digits */
    test("pass: 5 digits", () => {
      expect(reg.test(DIG_5)).toBe(true);
    });
    test("miss: 5 digits", () => {
      expect(reg.test(MISS_DIG_5_MIDDLE)).toBe(false);
    });

    /** free dial - pass */
    test("free dial - pass: 1 digits", () => {
      expect(reg.test(FREE_D_DIG_1)).toBe(true);
    });
    test("free dial - pass: 2 digits", () => {
      expect(reg.test(FREE_D_DIG_2)).toBe(true);
    });
    test("free dial - pass: 3 digits", () => {
      expect(reg.test(FREE_D_DIG_3)).toBe(true);
    });
    test("free dial - pass: 4 digits", () => {
      expect(reg.test(FREE_D_DIG_4)).toBe(true);
    });
    test("free dial - pass: 5 digits", () => {
      expect(reg.test(FREE_D_DIG_5)).toBe(true);
    });
    test("free dial - pass: 6 digits", () => {
      expect(reg.test(FREE_D_DIG_6)).toBe(true);
    });

    /** free dial - miss */
    test("free dial - miss: last digits", () => {
      expect(reg.test(MISS_FREE_D_LAST)).toBe(false);
    });
    test("free dial - miss: middle digits", () => {
      expect(reg.test(MISS_FREE_D_MIDDLE)).toBe(false);
    });

    /** mobile pass */
    test("mobile - pass", () => {
      expect(reg.test(MOBILE_D)).toBe(true);
    });

    /** mobile miss */
    test("mobile - miss: last digits", () => {
      expect(reg.test(MISS_MOBILE_D_LAST)).toBe(false);
    });
    test("mobile - miss: middle digits", () => {
      expect(reg.test(MISS_MOBILE_D_MIDDLE)).toBe(false);
    });

    /** no hyphen */
    test("pass: 10 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_10)).toBe(true);
    });
    test("pass: 11 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_11)).toBe(true);
    });
    test("miss: 9 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_9)).toBe(false);
    });
    test("miss: 12 digit", () => {
      expect(reg.test(NO_HYPHEN_DIG_12)).toBe(false);
    });
  });
});
