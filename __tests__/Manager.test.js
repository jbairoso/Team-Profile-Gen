const Employee = require('../lib/Manager');

test('should allow you to enter a name, id, and email and office number', () => {
  const mangr = new Employee("Jeralyn", 30, "jbairoso@gmail.com", 20);

  expect(mangr.name).toBe("Jeralyn");
  expect(mangr.id).toBe(30);
  expect(mangr.email).toBe("jbairoso@gmail.com");
  expect(mangr.officeNumber).toBe(20)
  expect(mangr.getName()).toBe("Jeralyn");
  expect(mangr.getId()).toBe(30);
  expect(mangr.getEmail()).toBe("jbairoso@gmail.com");
  expect(mangr.getRole()).toBe("Manager");
});