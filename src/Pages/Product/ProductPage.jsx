import React from "react";
import "./Product.css";

import img1 from "../../assets/Product/FullGrain.jpg";
import img2 from "../../assets/Product/TopGrain.jpg";
import img3 from "../../assets/Product/Vegetable-Tanned.jpg";
import img4 from "../../assets/Product/SuedeGoat.jpg";
import img8 from "../../assets/Product/BuffaloOilPull.jfif";
import img9 from "../../assets/Product/CowFullGrain.jfif";
import img10 from "../../assets/Product/CowTopGrain.jfif";
import { ProductCard } from "./ProductCard";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="products">
        <div className="title">{t("productTitle")}</div>
        <div className="mainTitle">{t("productMainTitle")}</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="ProductContent">
          <ProductCard
            img={img3}
            title={t("productCardTitle1")}
            paragraph={t("productCardContent1")}
          />

          <ProductCard
            img={img4}
            title={t("productCardTitle2")}
            paragraph={t("productCardContent2")}
          />

          <ProductCard
            img={img8}
            title={t("productCardTitle3")}
            paragraph={t("productCardContent3")}
          />

          <ProductCard
            img={img9}
            title={t("productCardTitle4")}
            paragraph={t("productCardContent4")}
          />

          <ProductCard
            img={img10}
            title={t("productCardTitle5")}
            paragraph={t("productCardContent5")}
          />

          <ProductCard
            img={img1}
            title= {t('productCardTitle6')}
            paragraph= {t('productCardContent6')}
          />

          <ProductCard
            img={img2}
            title= {t('productCardTitle7')}
            paragraph= {t('productCardContent7')}
          />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
