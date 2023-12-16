import getHealthStatus from "../healthStatus";

test.each([
    [55, 'Маг', 'healthy'],
    [30, 'Эльф', 'wounded'],
    [10, 'Дварф', 'critical'],
  ])('testing HealthStatus func with %i health and %s name', (health, name, expectedLabel) => {
    const result = getHealthStatus({ health, name });
    expect(result).toBe(expectedLabel);
  });
  