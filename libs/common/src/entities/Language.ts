import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index('code', ['code','name'], { unique: true })
@Entity('languages')
export class Languages {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: number;

  @Column('varchar',{name: 'name',length: 191})
  name: string;

  @Column('varchar',{name: 'code',length: 191})
  code: string;

  @Column('tinyint', {
    name: 'is_default',
    comment: '0: not default language, 1: default language',
    width: 1,
    default: () => "'0'",
  })
  isDefault: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}