import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Services } from './Services';
import { Platform } from './Platform';

@Index('name', ['name'], { unique: true })
@Entity('categories')
export class Categories {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    unique: true,
    length: 255,
  })
  name: string | null;
  
  @Column('int', { name: 'platform_id', unsigned: true, default: () => "'0'" })
  platformId: number;

  @Column('tinyint', {
    name: 'type',
    comment:
      '1= General,2= Comment',
    width: 1,
    default: () => "'1'",
  })
  type: number;

  @Column('tinyint', { name: 'status', width: 1, default: () => "'1'" })
  status: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

    @OneToMany(
    () => Services,
    (service) => service.category
  )
  service: Services[];

  @ManyToOne(type =>Platform, platform => platform.id,{
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn({ name: "platform_id", referencedColumnName: "id" })
  platform: Platform;
}