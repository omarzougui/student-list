import { IStudents } from '../models/students.model';

/**
 * @todo replace constant mock with mockserver librery
 * @see https://www.npmjs.com/package/mockserver
 */
export const STUDENTS: IStudents[] = [
  {
    id: '1',
    firstName: 'Pierre',
    lastName: 'Poljaq',
    age: 17
  },
  {
    id: '2',
    firstName: 'Paul',
    lastName: 'Poussin',
    age: 16
  },
  {
    id: '3',
    firstName: 'Michelle',
    lastName: 'Dumont',
    age: 18
  },
  {
    id: '4',
    firstName: 'Michel',
    lastName: 'Dumond',
    age: 19
  },
  {
    id: 'cinq',
    firstName: 'Thierry',
    lastName: 'Lafronde',
    age: 20
  },
];
