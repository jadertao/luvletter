// export const colorSet = [
//   '#68bde1', '#ffd96a', '#bcdbdf', '#84f2d6', '#ecffc1', '#1fe5bd', '#ff2400', '#f7d3ba', '#12e6c8', '#dcb5ff',
//   '#ff8364', '#f4a9c7', '#363434', '#cc99f9', '#35d0ba', '#c86b85', '#a6ed8e',
// ];
export const colorSet = [
  'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
];
export function getRandomColor(number) {
  return Array.from({ length: number }, () => colorSet[Math.floor(colorSet.length * Math.random())]);
}
