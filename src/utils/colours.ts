const colours = [
  '#FBEA9F',
  '#C7EAF0',
  '#ffb763',
  '#83D3B2',
  '#FCA5A5',
  '#E5D9FF',
  '#FFCBDE'
]


export function getColourFromInitials(initials: string): string|undefined {
  const value = (initials.toUpperCase().charCodeAt(0) || 0) + (initials.toUpperCase().charCodeAt(1) || 0)
  
  return colours[value % colours.length]
}