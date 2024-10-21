import { BreadCrumbs } from "@arthur.eudeline/starbucks-tp-kit/components/breadcrumbs";
import { Button } from "@arthur.eudeline/starbucks-tp-kit/components/button";
import { ProductCardLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-card-layout";
import { ProductGridLayout } from "@arthur.eudeline/starbucks-tp-kit/components/products/product-grid-layout";
import { SectionContainer } from "@arthur.eudeline/starbucks-tp-kit/components/section-container";
import { PRODUCTS_CATEGORY_DATA } from "@arthur.eudeline/starbucks-tp-kit/data";

const categories = PRODUCTS_CATEGORY_DATA;

// Type pour aider à typer les pages
type NextPageProps<T = Record<string, string>> = {
  /**
   * The path parameters received 
   * e.g. : app/[slug] --> params.slug
   */
  params: T
}

type Props = {
	slug: string
}

export default async function Page({params} : NextPageProps<Props>) {
    const rechercherProduitCategorie = categories.find((reponse) => reponse.slug === params.slug);
    console.log(params.slug);
    console.log("Liste des catégories : ", categories);
    console.log("Catégorie trouvée : ", rechercherProduitCategorie);

    if (!rechercherProduitCategorie) {
        return(
            <main>
                <SectionContainer>
                    <BreadCrumbs
                        items={[
                        {
                            label: 'Accueil',
                            url: '/'
                            },
                            {
                                label: `${params.slug}`,
                                url: "#"
                            }
                        ]}
                    />

                    <p>CATEGORIE NON TROUVEE</p>
                </SectionContainer>
            </main>
        );
    }

    else {
        return(
            <main>
                <SectionContainer>
                    <BreadCrumbs
                        items={[
                        {
                            label: 'Accueil',
                            url: '/'
                            },
                            {
                                label: `${rechercherProduitCategorie.name}`,
                                url: "#"
                            }
                        ]}
                    />
    
                    <br></br>

                    {/* Afficher tous les produits de la catégorie */}
                    <ProductGridLayout products={rechercherProduitCategorie.products}>
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
                </SectionContainer>
            </main>
        );
    }
}