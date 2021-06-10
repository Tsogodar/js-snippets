const arr = [
  {step: 1, data: 'step 1'},
  {step: 4, data: 'step 4'},
  {step: 2, data: 'step 2'},
  {step: 3, data: 'step 3'},
  {step: 3, data: 'step 3'},
  {step: 1, data: 'step 1'},
];

const mapped = arr.reduce((acc, val) => {
  const key = val['step'];
  if (acc[key] === undefined) {
    acc[key] = [];
  }
  acc[key].push(val);
  return acc;
}, {});

console.log(mapped);