import markdownItCodeLineNumber from '@vuepress/markdown/lib/lineNumbers';

const extendMarkdown = function (mdParser) {
  if (mdParser) {
    mdParser.use(markdownItCodeLineNumber);
  }
};

export default function () {
  return {
    extendMarkdown,
    install(VMdEditor) {
      VMdEditor.extendMarkdown(extendMarkdown);
    },
  };
}
