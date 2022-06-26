export class ProductListQuery {
  constructor(public readonly items: string[]) {}
  static fromPriceAndTet(
    data: { price: number; text: string }[]
  ): ProductListQuery {
    return new ProductListQuery(
      data.map((item) => `${item.text} for $${item.price}`)
    );
  }
}
