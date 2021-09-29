const too = 2;
const twos = [2,2];
const toos = [2,2] as const;


function tap<T>(arg: T, fn: (x:T) => void): T{
    fn(arg);
    return arg;
}

const arrayWithoutLast = tap([1, 2, 3, 4], function (array) {
  // Pop always returns the value it removed from the end of the array.
  return array.pop();
});