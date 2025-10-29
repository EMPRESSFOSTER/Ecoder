import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { cache } from 'react';

const contentDirectory = path.join(process.cwd(), 'content');

export type Lesson = {
  slug: string;
  topic: string;
  title: string;
  order: number;
};

export type LessonWithContent = Lesson & {
  contentHtml: string;
};

export type Topic = {
    id: string;
    name: string;
    lessons: Lesson[];
};

export const getTopics = cache((): Topic[] => {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  const topicDirs = fs.readdirSync(contentDirectory).filter(file => 
    fs.statSync(path.join(contentDirectory, file)).isDirectory()
  );

  const topics = topicDirs.map(topicDir => {
    const topicPath = path.join(contentDirectory, topicDir);
    const lessonFiles = fs.readdirSync(topicPath).filter(f => f.endsWith('.md'));

    const lessons: Lesson[] = lessonFiles.map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(topicPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        topic: topicDir,
        title: data.title || 'Untitled',
        order: data.order || 0,
      };
    });

    return {
      id: topicDir,
      name: topicDir.charAt(0).toUpperCase() + topicDir.slice(1),
      lessons: lessons.sort((a, b) => a.order - b.order),
    };
  });

  return topics;
});

export const getLessonData = cache(async (topic: string, slug: string): Promise<LessonWithContent | null> => {
  const filePath = path.join(contentDirectory, topic, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    topic,
    contentHtml,
    title: matterResult.data.title,
    order: matterResult.data.order,
  };
});
