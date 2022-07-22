import React from 'react';
import fs from 'fs';
import { getPosts } from '.././services';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://rununublog.vercel.app',
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: 'pages',
        production: './',
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '_error.js',
        'sitemap.xml.js',
        'category',
        'post',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const data = await getPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- We'll render the URLs for our sitemap here. -->
        ${staticPages
          .map((url) => {
            return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>daily</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
          })
          .join('')}
          ${data
            .map(({ node: { slug, updatedAt } }) => {
              return `
                  <url>
                    <loc>${baseUrl}/post/${slug}</loc>
                    <lastmod>${updatedAt}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>1.0</priority>
                  </url>
                `;
            })
            .join('')}
      </urlset>
    `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
