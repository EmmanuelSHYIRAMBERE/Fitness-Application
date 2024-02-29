import { Link, Outlet } from "react-router-dom";

const products = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'accent chair',
    image:
      'https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681749482/react-comfy-store-products/iuYyO9RP_o_upinxq.jpg',
  },
  {
    id: 'recEHmzvupvT8ZONH',
    name: 'albany sectional',
    image:
      'https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750782/react-comfy-store-products/product-2_lusrzx.jpg',
  },
  {
    id: 'rec5NBwZ5zCD9nfF0',
    name: 'albany table',
    image:
      'https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750874/react-comfy-store-products/product-3_znpiqa.jpg',
  },
  {
    id: 'recd1jIVIEChmiwhe',
    name: 'armchair',
    image:
      'https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681750929/react-comfy-store-products/product-4_ebl6q1.jpg',
  },
  {
    id: 'recoM2MyHJGHLVi5l',
    name: 'bar stool',
    image:
      'https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681751026/react-comfy-store-products/product-5_n184nu.jpg',
  },
];

const Products = () => {
  return (
    <div className="flex gap-2">
      <div className='flex flex-col gap-2'>
        {products.map(product=>
          <Link key={product.id} to={`products/${product.id}`}>
            Product {product.name}
          </Link>
      )}
      </div>
      <div>

      <Outlet />
      </div>
    </div>
  );
};

export default Products;
