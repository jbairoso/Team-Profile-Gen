const Employee = require('../lib/Intern');

test('should allow you to enter a name, id, and email and school', () => {
  const intrn = new Employee("Jeralyn", 30, "jbairoso@gmail.com", "UCD");

  expect(intrn.name).toBe("Jeralyn");
  expect(intrn.id).toBe(30);
  expect(intrn.email).toBe("jbairoso@gmail.com");
  expect(intrn.school).toBe("UCD")
  expect(intrn.getName()).toBe("Jeralyn");
  expect(intrn.getId()).toBe(30);
  expect(intrn.getEmail()).toBe("jbairoso@gmail.com");
  expect (intrn.getSchool()).toBe("UCD");
  expect(intrn.getRole()).toBe("Intern");
});