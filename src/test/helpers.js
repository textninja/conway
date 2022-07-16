export function a(s) {
  s = typeof s === 'string' ? s : s.map(l => l.join('')).join('\n');
  const lines = s.split("\n");
  return lines.map(line => {
    return line.replace(/\s+$/, '').split('').filter(x=>x).map(s => s === ' ' ? 0 : 1);
  });
}
