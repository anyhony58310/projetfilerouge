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
      {/* Récupérations des données de chaques categories */}
      {categories.map((category) => (
        <div key={category.id}>
          <h2 className="font-bold">{category.name} ({category.id})</h2> 
          
          {/* Affichage de chaque produits pour chaque catégorie après avoir affiché sa catégorie et son ID */}
          <ProductGridLayout products={category.products}>
            {(product) => (
              <ProductCardLayout
                key={product.id}
                product={product}
                button={
                  <Button variant={"ghost"} fullWidth>
                    Ajouter au panier
                  </Button>
                }
              />
            )}
          </ProductGridLayout>
        </div>
      ))}
    </main>
  );
}
