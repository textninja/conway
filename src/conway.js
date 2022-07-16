export function conway(a) {
  return a.map((row,y) => {
    return row.map((cell,x) => {
      switch (numActiveNeighbours(a, [y, x])) {
        case 3:
          return 1;
        case 2:
          return cell;
        default:
          return 0;
      }
    });
  });
}

export function numActiveNeighbours(grid, point) {
  return gridvals(grid, neighbours(grid, point)).filter(x=>x).length;
}

export function gridvals(grid, points) {
  return points.map(([y, x]) => grid[y][x]);
}

export function neighbours(grid, [y, x]) {
  const result = [];

  for (const dy of [-1, 0, 1]) {
    for (const dx of [-1, 0, 1]) {
      if (!dy && !dx) continue;
      const ny = y+dy;
      const nx = x+dx;
      if (ny >= grid.length || ny < 0) continue;
      if (nx >= grid[0].length || nx < 0) continue;
      result.push([ny, nx]);
    }
  }

  return result;
}
