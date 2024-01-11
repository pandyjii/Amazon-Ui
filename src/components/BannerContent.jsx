import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerContent = () => {
  const [imageId, setImageId] = useState(0);

  const ImageData = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/May/HSS_3000x1200-PC-1._CB589991128_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q2/PC_Hero_VG_BAU_Consoles_Apr1st-week_Unrec_2x._CB592233658_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/SummerSale/GW/D81067155_WLD_SummerSale_Design_SIM_DesktopTallHero_3000x1200._CB589999476_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Skincare_BVD_pc_hero_3000x1200eg._CB588348871_.jpg",
    },
  ];

  const carousel = () => {
    setTimeout(() => {
      setImageId(Math.floor(Math.random() * 5));
    }, 3000);
  };
  useEffect(() => {
    return carousel();
  }, [imageId]);

  return (
    <BannerWrapper>
      <LazyLoadImage
        src={ImageData[imageId]?.image}
        alt="/public/screen.jpg"
        effect="blur"
      />
      <Gradient />
    </BannerWrapper>
  );
};

export default BannerContent;

const BannerWrapper = styled.div`
  position: relative;
  color: rgb(0, 0, 0);
  display: flex;
  width: 100%;
  img {
    margin: 0 auto;
  }
`;

const Gradient = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  @media (max-width: 768px) {
    height: 100px;
  }
`;
