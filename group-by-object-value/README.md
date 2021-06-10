# Group by object value

Input:

    [
      {step: 1, data: 'step 1'},
      {step: 4, data: 'step 4'},
      {step: 2, data: 'step 2'},
      {step: 3, data: 'step 3'},
      {step: 3, data: 'step 3'},
      {step: 1, data: 'step 1'},
    ]
    
Output:

    {
      '1': [ { step: 1, data: 'step 1' }, { step: 1, data: 'step 1' } ],
      '2': [ { step: 2, data: 'step 2' } ],
      '3': [ { step: 3, data: 'step 3' }, { step: 3, data: 'step 3' } ],
      '4': [ { step: 4, data: 'step 4' } ]
    }
