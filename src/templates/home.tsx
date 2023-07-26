import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import React from "react";
import BigImage from "../components/BigImage";
import CenteredContainer from "../components/CenteredContainer";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import FeaturedBlog from "../components/FeaturedBlog";
import { HelpArticle } from "../types/autogen";
import ComplexHeader from "../components/ComplexHeader";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "c_coverPhoto",
      "c_heading",
      "c_subHeading",
      "slug",
      "c_featuredArticles.id",
      "c_featuredArticles.name",
      "c_featuredArticles.slug",
      // "blogStarter_featuredBlogs.primaryPhoto",
      // "blogStarter_featuredBlogs.blogStarter_description",
      "c_featuredArticles.externalArticlePostDate",
    ],
    filter: { entityTypes: ["helpstarter_homePage"] },
  },
};
export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Help Site Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Home({ document, __meta }: TemplateProps) {
  return (
    <MainLayout templateData={{ __meta, document }} backgroundColor="#FFFFFF">
      <ComplexHeader
        backgroundColor="#FFFFFF"
        textColor="#000000"
        logo="https://a.mktgcdn.com/p/Y-dxorWO3d3dNLcW0aW6ht5grsUUTyxMwFGzL-4k0GQ/300x300.png"
        link1="#"
        link2="#"
        link3="#"
        label1="About"
        label2="Membership"
        label3="Contribute"
        companyScreenReaderText="Yext"
        hoverColor="light"
      />
      <CenteredContainer>
        <VerticalStack
          spacing="8"
          topMargin="10"
          bottomMargin="10"
          leftMargin="2"
          rightMargin="2"
          alignment="left"
        >
          <BigImage
            src={document.c_coverPhoto.image.url}
            alt={document.c_coverPhoto.image.alternateText}
          />
          <Title
            value="Featured Articles"
            fontWeight="bold"
            textSize="4xl"
            topMargin="0"
            bottomMargin="0"
            textColor="#000000"
          />
          {document.c_featuredArticles.map(
            (item: HelpArticle, index: string) => (
              <FeaturedBlog
                name={item.name}
                slug={item.slug}
                // src={item.primaryPhoto?.image.url}
                // alt={item.primaryPhoto?.image.alternateText}
                // blogStarter_description={item.blogStarter_description}
                datePosted={item.externalArticlePostDate}
                key={index}
                textColor="#000000"
              />
            )
          )}
        </VerticalStack>
      </CenteredContainer>
      <Footer
        label1="Privacy"
        link1="#"
        label2="Terms"
        link2="#"
        label3="Settings"
        link3="#"
        label4="Help"
        link4="#"
        backgroundColor="#FFFFFF"
        textColor="#000000"
        hoverColor="light"
      />
    </MainLayout>
  );
}
