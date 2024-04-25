"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Product } from "@/types";

interface PageData {
  frontmatter: {
    enable?: boolean;
    title: string;
    description: string;
    products: Array<Product>;
  };
}

const PartnersComponent = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section-xs">
          <div className="container py-8">
            <div className="mx-auto text-center md:col-10">
              <h5
                dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                className="mb-4 text-dark-grey"
              />
              <p
                dangerouslySetInnerHTML={markdownify(
                  data.frontmatter.description!,
                )}
              />
            </div>

            <div className="flex flex-wrap justify-center">
              {data.frontmatter.products.map((product: Product, index) => (
                <div
                  key={index}
                  //   className="flex justify-center items-center w-1/2 md:w-1/3 lg:w-1/5 p-4"
                  className="flex justify-center items-center text-center w-[124px] px-4 py-2 m-3"
                >
                  <div className="flex flex-col">
                    <ImageFallback
                      height={product.height}
                      width={product.width}
                      src={product.image}
                      alt={product.alt}
                      className="sm:w-[100px] w-[90px]"
                    />
                    <p
                      className="text-dark-green sm:text-sm text-md pt-1"
                      dangerouslySetInnerHTML={markdownify(product.title!)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PartnersComponent;
