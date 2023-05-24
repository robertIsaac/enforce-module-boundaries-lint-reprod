import { Injectable } from '@nestjs/common';
import { User } from '.prisma/client';
//                    ^
// import { User } from '@prisma/client'; // this will work
//                       ^

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user: User = {
      id: 0,
      username: ''
    };
    console.log(user);
    return { message: 'Hello API' };
  }
}
