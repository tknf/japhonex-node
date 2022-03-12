import { REQUIRE_JA_TEL_REGEX, NO_HYPHEN_JA_TEL_REGEX, OPTIONAL_HYPHEN_JA_TEL_REGEX } from "./regex";

type HyphenArg = "require" | "optional" | false;

export function japhonex(opts: { hyphen?: HyphenArg } = { hyphen: "optional" }) {
  const { hyphen } = opts;

  if (hyphen === "require") {
    return REQUIRE_JA_TEL_REGEX;
  } else if (hyphen === "optional") {
    return OPTIONAL_HYPHEN_JA_TEL_REGEX;
  }

  return NO_HYPHEN_JA_TEL_REGEX;
}

export function validatePhoneNumber(phoneNumber: string, hyphen?: HyphenArg) {
  const regex = japhonex({ hyphen });

  return regex.test(phoneNumber);
}
