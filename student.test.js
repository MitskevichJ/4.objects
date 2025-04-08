const Student = require('./student'); 

describe('Student', () => {
  let student;

  beforeEach(() => {
    student = new Student("Василиса", "женский", 19);
  });

  it('should create a Student object with correct properties', () => {
    expect(student.name).toBe("Василиса");
    expect(student.gender).toBe("женский");
    expect(student.age).toBe(19);
    expect(student.marks).toEqual([]);
  });

  it('should set subject correctly', () => {
    student.setSubject("Algebra");
    expect(student.subject).toBe("Algebra");
  });

  it('should add marks correctly', () => {
    student.addMarks(4, 5, 4, 5);
    expect(student.marks).toEqual([4, 5, 4, 5]);
  });

  it('should calculate average mark correctly', () => {
    expect(student.getAverage()).toBe(0); 

    student.addMarks(4, 5, 4, 5);
    expect(student.getAverage()).toBe(4.5);
  });

  it('should return 0 for average mark if no marks are added', () => {
    expect(student.getAverage()).toBe(0);
  });

  it('should exclude student correctly', () => {
    student.setSubject("Geometry");
    student.addMarks(2, 3);
    student.exclude('плохая учёба');

    expect(student.subject).toBeUndefined();
    expect(student.marks).toBeUndefined();
    expect(student.excluded).toBe('плохая учёба');
  });
});