import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parses Markdown into an AST
    .use(remarkRehype, { allowDangerousHtml: true }) // Converts to HTML AST, keeping raw HTML
    .use(rehypeRaw) // Parses the raw HTML strings within the Markdown
    .use(rehypeStringify) // Compiles the AST down to an HTML string
    .process(markdown);

  console.log(result)
  return result.toString();
}

