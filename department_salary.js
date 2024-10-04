//Task 1 
const company = {
        departments: [
        {
            departmentName: 'Engineering',
             employees: [  {
                 name: 'Mark',
                     salary: 100000,
                   subordinates: [
                      {
                              name: 'Steve',
                             salary: 70000,
                            subordinates: [
                            {
                                     name: 'Lena',
                                     salary: 50000,
                                       subordinates: []
                               }
                             ]
                          }
         ]
                  },
               {
              name: 'Greg',
                   salary: 95000,
             subordinates: []
             }
            ]
        },
           {
              departmentName: 'Sales',
          employees: [
         {
                   name: 'Boone',
                     salary: 70000,
                 subordinates: [
                        {
                         name: 'Pete',
                                salary: 55000,
                              subordinates: []
                      }
]}, {
                   name: 'Grace',
               salary: 80000,
               subordinates: []
           }]}]};
