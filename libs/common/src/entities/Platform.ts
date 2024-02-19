import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categories } from './Categories';

@Entity('platform')
export class Platform {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string | null;

  @Column('tinyint', {
    name: 'status',
    comment:
      '0= INACTIVE, 1= ACTIVE',
    width: 1,
    default: () => "'1'",
  })
  status: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => Categories,
    (category) => category.platform
  )
  category: Categories[];
}
