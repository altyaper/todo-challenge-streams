interface Color {
  hex: string;
}

export const palette = {
  'gray-3': '#e1e1e1',
  'gray-4': '#D7D7D7',
  'gray-5': '#cdcdcd',
  'gray-6': '#BEBEBE',
  'gray-7': '#A5A5A5',
  'gray-8': '#8C8C8C',
  'gray-9': '#787878',
  'gray-10': '#646464',
  'gray-11': '#505050',
  'gray-13': '#323232',
  'gray-14': '#282828',
  'gray-15': '#232323',
  'gray-16': '#1E1E1E',
  'grey-850': '#191919',
  'amber-1': '#F4A921',
  'amber-2': '#EA9C0B',
  'amber-3': '#C38209',
  'amber-4': '#9C6807',
  'amber-5': '#754E06',
  'amber-6': '#4E3404',
  'amber-7': '#271A02',
  'purpure-1': '#AB6FEB',
  'purpure-2': '#964BE7',
  'purpure-3': '#8128E2',
  'purpure-4': '#8128E2',
  'purpure-5': '#6D1BC5',
  'purpure-6': '#5916A2',
  'purpure-7': '#46117E',
  'blue-4': '#288EFF',
  'blue-5': '#0073FF',
  'blue-7': '#0051BA',
  'blue-8': '#004098',
  'blue-9': '#003075',
  'blue-10': '#001f53',
  green: '#50F06E',
  'green-3': '#50F06E',
  'green-7': '#00851C',
  black: '#000000',
  charcoal: '#31343E',
  white: '#FFFFFF',
  'yellow-3': '#FFED66',
  'yellow-5': '#FFE100',
  'red-4': '#FF2C4A',
  'red-6': '#C31834',
};

export const colors = {
  divider: palette['gray-10'],
  text: {
    main: palette['gray-5'],
    disabled: palette['gray-9'],
  },
  amber: palette['amber-5'],
  black: palette['black'],
  white: palette['white'],
  'black-hover': palette['gray-16'],
  blue: palette['blue-8'],
  'blue-hover': palette['blue-7'],
  siderbar: palette['gray-4'],
  'nav-bg': palette['grey-850'],
  disabled: '#505050',
  disabledBackground: palette['gray-15'],
  error: palette['red-4'],
  errorBackground: palette['red-6'],
  warning: {
    main: palette['yellow-5'],
    cellBackground: palette['yellow-3'],
  },
  'warning-hover': '#FDEC66',
  active: '#0073FF',
  focus: '#0073FF',
  border: {
    main: '#5A5A5A',
    hover: '#787878',
    active: '#0073FF',
    error: '#C31834',
    warning: '#FFE100',
    disabled: '#505050',
  },
  success: {
    main: palette['green-3'],
    cellBackground: palette['green-7'],
  },
};