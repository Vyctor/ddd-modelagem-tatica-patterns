import Product from '../../domain/entity/product';
import product from '../../domain/entity/product';
import ProductRepositoryInterface from '../../domain/repository/product-repository.interface';
import ProductModel from '../database/sequelize/model/product.model';

class ProductRepository implements ProductRepositoryInterface {
  async create(entity: product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });
  }

  async update(entity: product): Promise<void> {
    await ProductModel.update(
      {
        name: entity.name,
        price: entity.price,
      },
      {
        where: {
          id: entity.id,
        },
      },
    );
  }

  async delete(id: string): Promise<void> {
    await ProductModel.destroy({
      where: {
        id,
      },
    });
  }

  async find(id: string): Promise<product> {
    const product = await ProductModel.findOne({ where: { id } });

    return new Product(product.id, product.name, product.price);
  }

  async findAll(): Promise<product[]> {
    const products = await ProductModel.findAll();

    return products.map((productModel) => new Product(productModel.id, productModel.name, productModel.price));
  }
}

export default ProductRepository;
