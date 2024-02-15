import { RouterModule } from '@nestjs/core';

export function getModulesMember() {
  return [
    
    RouterModule.register([
      {
        path: 'member',
        children: [
         
        ],
      },
    ]),
  ];
}
