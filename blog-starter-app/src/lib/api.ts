import { Post } from "@/interfaces/post";
import { withBasePath, withBasePathInContent } from "@/lib/base-path";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const postData = data as Partial<Post>;

  return {
    ...postData,
    slug: realSlug,
    content: withBasePathInContent(content),
    coverImage: withBasePath(postData.coverImage || ""),
    ogImage: postData.ogImage?.url
      ? { ...postData.ogImage, url: withBasePath(postData.ogImage.url) }
      : postData.ogImage,
  } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
