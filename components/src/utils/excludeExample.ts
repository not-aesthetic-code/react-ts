type VerticalAlignment = 'top' | 'center' | 'bottom';
type HorizonalAlignment = 'left' | 'center' | 'right';
type Alignment = Exclude<
  `${VerticalAlignment}-${HorizonalAlignment} | center`,
  'center-center'
>;
type Box = {
  x: number;
  y: number;
  alignment: Alignment; // Let's make this better.
};

const a: Box = {
  x: 10,
  y: 10,
  alignment: 'top-center',
};

const b: Box = {
  x: 20,
  y: 20,
  alignment: 'bottom-right',
};

const shouldBreak: Box = {
  x: 20,
  y: 20,
  alignment: 'center-center',
};

const shouldBreakAtFirstButEventuallyWork: Box = {
  x: 100,
  y: 100,
  alignment: 'center-center',
};
