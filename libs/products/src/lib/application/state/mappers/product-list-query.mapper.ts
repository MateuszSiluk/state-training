import { ProductListQuery } from '../../ports/primary/query/product-list.query';
import { ProductContext } from '../../ports/secondary/context/product.context';

export const maprFromProductContext = (
  context: ProductContext
): ProductListQuery =>
  new ProductListQuery(context.all.map((p) => `${p.name} for $${p.price}`));
