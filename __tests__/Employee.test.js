const Employee = require('../lib/Employee');

test('should allow you to enter a name, id, and email', () => {
  const worker = new Employee("Jeralyn", 30, "jbairoso@gmail.com");

  expect(worker.name).toBe("Jeralyn");
  expect(worker.id).toBe(30);
  expect(worker.email).toBe("jbairoso@gmail.com");
  expect(worker.getName()).toBe("Jeralyn");
  expect(worker.getId()).toBe(30);
  expect(worker.getEmail()).toBe("jbairoso@gmail.com");
  expect(worker.getRole()).toBe("Employee");
});
