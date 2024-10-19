import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usersAttributes {
  email: string;
  username?: string;
  password: string;
  token?: string;
  rememberme?: boolean;
  verify?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  id: number;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "username" | "token" | "rememberme" | "verify" | "createdAt" | "updatedAt" | "deletedAt" | "id";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  email!: string;
  username?: string;
  password!: string;
  token?: string;
  rememberme?: boolean;
  verify?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rememberme: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
