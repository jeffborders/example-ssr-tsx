import Template from '../models/Template';
const isProduction = (process.env.NODE_ENV === 'production');
const reactMode = isProduction ? 'production.min' : 'development';

export default ({ body, title, entry }: Template) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/dist/css/todo-thestylesheet.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/dist/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/dist/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/dist/favicon/favicon-16x16.png">
        <link rel="manifest" href="/dist/favicon/site.webmanifest">
        <link rel="mask-icon" href="/dist/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#000000">
        <meta name="theme-color" content="#ffffff">
      </head>

      <body>
        <main id="main">${body}</main>
      </body>

      <script src="/node_modules/react/umd/react.${reactMode}.js"></script>
      <script src="/node_modules/react-dom/umd/react-dom.${reactMode}.js"></script>
      <script src="/dist/${entry}.js"></script>
    </html>
  `;
};
