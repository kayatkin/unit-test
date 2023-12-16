import sortHeroes from '../sortHeroes';

test('should sort heroes by health in descending order', () => {
  const unsortedHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = sortHeroes(unsortedHeroes);

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});
