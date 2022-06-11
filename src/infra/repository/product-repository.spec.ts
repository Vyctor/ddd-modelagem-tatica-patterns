import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../database/sequelize/model/product.model';

let sequelize: Sequelize;

describe('Product repository test', () => {
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
});
