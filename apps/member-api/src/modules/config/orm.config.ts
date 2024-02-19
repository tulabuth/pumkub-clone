import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { Users } from '@app/common/entities/Users';
import { Languages } from '@app/common/entities/Language';
import { Categories } from '@app/common/entities/Categories';
import { Services } from '@app/common/entities/Services';
import { Platform } from '@app/common/entities/Platform';


export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    replication: {
      master: {
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      slaves: [
        {
          host: process.env.DB_HOST_READ,
          port: 3306,
          username: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
        },
      ],
    },
    entities: [
      Users,
      Languages,
      Platform,
      Categories,
      Services
    ],
    timezone: '+07:00',
    synchronize: true,
  }),
);
