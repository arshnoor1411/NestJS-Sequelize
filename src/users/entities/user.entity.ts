import { DataTypes } from 'sequelize';
import { Column } from 'sequelize-typescript';

export class User {
  @Column({ type: DataTypes.STRING })
  id: string;

  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.STRING })
  password: string;

  @Column({ type: DataTypes.STRING })
  email: string;

  @Column({ type: DataTypes.DATE })
  created_at: Date;

  @Column({ type: DataTypes.DATE })
  updated_at: Date;

  @Column({ type: DataTypes.DATE })
  deleted_at: Date;
}
