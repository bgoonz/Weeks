PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      [
        "pln",
        /^[\d\t a-gi-z\xa0]+/,
        null,
        "\t �\xa0abcdefgijklmnopqrstuvwxyz0123456789",
      ],
      ["pun", /^[*=[\]^~]+/, null, "=*~^[]"],
    ],
    [
      ["lang-wiki.meta", /(?:^^|\r\n?|\n)(#[a-z]+)\b/],
      ["lit", /^[A-Z][a-z][\da-z]+[A-Z][a-z][^\W_]+\b/],
      ["lang-", /^{{{([\S\s]+?)}}}/],
      ["lang-", /^`([^\n\r`]+)`/],
      ["str", /^https?:\/\/[^\s#/?]*(?:\/[^\s#?]*)?(?:\?[^\s#]*)?(?:#\S*)?/i],
      ["pln", /^(?:\r\n|[\S\s])[^\n\r#*=A-[^`h{~]*/],
    ]
  ),
  ["wiki"]
);
PR.registerLangHandler(
  PR.createSimpleLexer([["kwd", /^#[a-z]+/i, null, "#"]], []),
  ["wiki.meta"]
);
