import Image from "next/image";
import { PRODUCTS_CATEGORY_DATA } from "@arthur.eudeline/starbucks-tp-kit/data";
import { BreadCrumbs } from "@arthur.eudeline/starbucks-tp-kit/components/breadcrumbs";
import { ProductGridLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-grid-layout";
import { ProductCardLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-card-layout";
import { Button } from "@arthur.eudeline/starbucks-tp-kit/components/button";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {
  console.log(categories);
  return (
    <main>
      {/* <BreadCrumbs> */}
      
      {/* </BreadCrumbs> */}
      <ProductGridLayout products={categories[0].products}>
        {(product) => (
            <ProductCardLayout
              product={product}
              button={
                <Button variant={"ghost"} fullWidth>
                  Ajouter au panier
                </Button>
              }
        />)}
      </ProductGridLayout>
    </main>
  );
}
