import {
    Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('username', ['username', 'email'], { unique: true })
@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar',{name: 'username',length: 191})
  username: string;

  @Column('varchar',{name: 'email',length: 191})
  email: string;

  @Column('varchar',{name: 'phone',length: 191})
  phone: string;

  @Column('varchar',{name: 'password',length: 191})
  password: string;

  @Column('varchar',{name: 'firstname',length: 191, nullable:true})
  firstname: string | null;

  @Column('varchar',{name: 'lastname',length: 191, nullable:true})
  lastname: string | null;

  @Column('varchar',{name: 'api_key',length: 191, nullable:true})
  api_key: string | null;

  @Column('varchar',{name: 'country_code',length: 191, nullable:true})
  country_code: string | null;

  @Column({type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  balance:  number;

  @Column('varchar', { name: 'image', nullable: true, length: 255 })
  image: string | null;

  @Column('text', {
    name: 'address',
    nullable: true,
    comment: 'contains full address',
  })
  address: string | null;

  @Column('tinyint', {
    name: 'ev',
    comment: '0: email unverified, 1: email verified',
    width: 1,
    default: () => "'0'",
  })
  ev: boolean;

  @Column('tinyint', {
    name: 'sv',
    comment: '0: mobile unverified, 1: mobile verified',
    width: 1,
    default: () => "'0'",
  })
  sv: boolean;

  @Column('tinyint', {
    name: 'profile_complete',
    width: 1,
    default: () => "'0'",
  })
  profileComplete: boolean;

  @Column('varchar', { name: 'remember_token', nullable: true, length: 255 })
  rememberToken: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
