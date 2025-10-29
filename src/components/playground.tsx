'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const defaultHtml = `<h1>Hello, World!</h1>
<p>This is your playground.</p>
`;

const defaultCss = `body {
  font-family: sans-serif;
  color: #333;
}
h1 {
  color: hsl(var(--primary));
}
`;

const defaultJs = `console.log("Welcome to the playground!");
`;

export function Playground() {
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [cssCode, setCssCode] = useState(defaultCss);
  const [jsCode, setJsCode] = useState(defaultJs);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <Card className="shadow-lg w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Playground</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <Tabs defaultValue="html">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
          </TabsList>
          <TabsContent value="html">
            <Textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              className="font-code h-48"
              aria-label="HTML code editor"
            />
          </TabsContent>
          <TabsContent value="css">
            <Textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              className="font-code h-48"
              aria-label="CSS code editor"
            />
          </TabsContent>
          <TabsContent value="js">
            <Textarea
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              className="font-code h-48"
              aria-label="JavaScript code editor"
            />
          </TabsContent>
        </Tabs>

        <div>
          <h3 className="font-headline text-lg mb-2">Live Preview</h3>
          <div className="border rounded-md bg-white">
            <iframe
              srcDoc={srcDoc}
              title="Live Preview"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
