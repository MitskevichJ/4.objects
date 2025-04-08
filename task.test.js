const Student = require('./task'); 

describe('Student', () => {
  let student;

  beforeEach(() => {
    student = new Student("Василиса", "женский", 19);
  });

  test('создает объект Student с заданными свойствами', () => {
    expect(student.name).toBe("Василиса");
    expect(student.gender).toBe("женский");
    expect(student.age).toBe(19);
    expect(student.marks).toEqual([]); 
  });

  test('устанавливает предмет для студента', () => {
    student.setSubject("Algebra");
    expect(student.subject).toBe("Algebra");
  });

  describe('addMarks', () => {
    test('добавляет оценки в массив marks', () => {
      student.addMarks(4, 5, 4, 5);
      expect(student.marks).toEqual([4, 5, 4, 5]);
    });

    test('не ломается, если marks не существует (например, после exclude)', () => {
      student.exclude("причина");
      student.addMarks(3, 3, 3); 
      expect(student.marks).toBeUndefined();
    });
  });

  describe('getAverage', () => {
    test('возвращает 0, если нет оценок', () => {
      expect(student.getAverage()).toBe(0);
    });

    test('возвращает среднее арифметическое оценок', () => {
      student.addMarks(4, 5, 4, 5);
      expect(student.getAverage()).toBe(4.5);
    });
  });

  describe('exclude', () => {
    test('удаляет subject и marks и добавляет свойство excluded с указанной причиной', () => {
      student.setSubject("Math");
      student.addMarks(5, 5, 5);
      student.exclude("плохая учёба");

      expect(student.subject).toBeUndefined();
      expect(student.marks).toBeUndefined();
      expect(student.excluded).toBe("плохая учёба");
    });
  });
});