const Engineer = require("../lib/Engineer");

test("should allow you to enter a name, id, and email, and github username", () => {
  const eng = new Engineer("Jeralyn", 30, "jbairoso@gmail.com", "jbairoso");

  expect(eng.name).toBe("Jeralyn");
  expect(eng.id).toBe(30);
  expect(eng.email).toBe("jbairoso@gmail.com");
  expect(eng.github).toBe("jbairoso");
  expect(eng.getName()).toBe("Jeralyn");
  expect(eng.getId()).toBe(30);
  expect(eng.getEmail()).toBe("jbairoso@gmail.com");
  expect(eng.getGithub()).toBe("jbairoso");
  expect(eng.getRole()).toBe("Engineer");
});
