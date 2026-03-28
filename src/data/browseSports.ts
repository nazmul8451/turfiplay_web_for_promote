export interface SportCategory {
  id: string;
  name: string;
  fieldsCount: number;
  imagePath: string;
}

export const browseSportsData: SportCategory[] = [
  {
    id: 'football',
    name: 'Football',
    fieldsCount: 12,
    imagePath: '/assets/images/sports/football.png', // Replace with your actual image path
  },
  {
    id: 'cricket',
    name: 'Cricket',
    fieldsCount: 8,
    imagePath: '/assets/images/sports/cricket.png', // Replace with your actual image path
  },
  {
    id: 'badminton',
    name: 'Badminton',
    fieldsCount: 5,
    imagePath: '/assets/images/sports/badminton.png', // Replace with your actual image path
  },
  {
    id: 'basketball',
    name: 'Basketball',
    fieldsCount: 3,
    imagePath: '/assets/images/sports/basketball.png', // Replace with your actual image path
  },
];
