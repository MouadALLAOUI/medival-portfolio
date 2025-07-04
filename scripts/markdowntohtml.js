function applyRegex(text, regex, replacement) {
  return text.replace(regex, replacement);
}

function parseCodeBlocks(markdown) {
  return applyRegex(markdown, /```([a-z]*)\n([\s\S]*?)\n```/gim, (match, lang, code) => {
    const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang}">${escapedCode}</code></pre>`;
  });
}

function processCurrentBlock(currentBlock, outputLines) {
  if (currentBlock.length === 0) return;
  const blockContent = currentBlock.join("\n");
  if (blockContent.match(/^######\s/)) {
    outputLines.push(applyRegex(blockContent, /^###### (.*$)/gim, '<h6>$1</h6>'));
  } else if (blockContent.match(/^#####\s/)) {
    outputLines.push(applyRegex(blockContent, /^##### (.*$)/gim, '<h5>$1</h5>'));
  } else if (blockContent.match(/^####\s/)) {
    outputLines.push(applyRegex(blockContent, /^#### (.*$)/gim, '<h4>$1</h4>'));
  } else if (blockContent.match(/^###\s/)) {
    outputLines.push(applyRegex(blockContent, /^### (.*$)/gim, '<h3>$1</h3>'));
  } else if (blockContent.match(/^##\s/)) {
    outputLines.push(applyRegex(blockContent, /^## (.*$)/gim, '<h2>$1</h2>'));
  } else if (blockContent.match(/^#\s/)) {
    outputLines.push(applyRegex(blockContent, /^# (.*$)/gim, '<h1>$1</h1>'));
  } else if (blockContent.match(/^(.*)\n={3,}\s*$/gim)) {
    outputLines.push(blockContent.replace(/^(.*)\n={3,}\s*$/gim, '<h1>$1</h1>'));
  } else if (blockContent.match(/^(.*)\n-{3,}\s*$/gim)) {
    outputLines.push(blockContent.replace(/^(.*)\n-{3,}\s*$/gim, '<h2>$1</h2>'));
  } else if (blockContent.match(/^[\-\*_]{3,}\s*$/gim)) {
    outputLines.push('<hr>');
  } else {
    outputLines.push(`<p>${blockContent.trim().replace(/\n/g, '<br>')}</p>`);
  }
  currentBlock.length = 0;
}

function handleBlockquote(line, trimmedLine, state, currentBlock, outputLines) {
  if (!state.inBlockquote) {
    processCurrentBlock(currentBlock, outputLines);
    outputLines.push('<blockquote>');
    state.inBlockquote = true;
  }
  currentBlock.push(trimmedLine.substring(2));
}

function closeBlockquoteIfNeeded(trimmedLine, state, currentBlock, outputLines, line) {
  processCurrentBlock(currentBlock, outputLines);
  outputLines.push('</blockquote>');
  state.inBlockquote = false;
  if (trimmedLine !== '') {
    currentBlock.push(line);
  }
}

function handleList(line, trimmedLine, isUnorderedListItem, isOrderedListItem, state, currentBlock, outputLines) {
  if (!state.inList) {
    processCurrentBlock(currentBlock, outputLines);
    state.listType = isUnorderedListItem ? 'ul' : 'ol';
    outputLines.push(`<${state.listType}>`);
    state.inList = true;
  } else if ((state.listType === 'ul' && isOrderedListItem) || (state.listType === 'ol' && isUnorderedListItem)) {
    outputLines.push(`</${state.listType}>`);
    state.listType = isUnorderedListItem ? 'ul' : 'ol';
    outputLines.push(`<${state.listType}>`);
  }
  let listItemContent = isUnorderedListItem
    ? trimmedLine.substring(2)
    : trimmedLine.replace(/^\d+\.\s/, '');
  outputLines.push(`<li>${listItemContent}</li>`);
}

function closeListIfNeeded(state, outputLines) {
  if (state.inList) {
    outputLines.push(`</${state.listType}>`);
    state.inList = false;
    state.listType = '';
  }
}

function parseBlockLevel(html) {
  const outputLines = [];
  let currentBlock = [];
  const state = {
    inList: false,
    listType: '',
    inBlockquote: false
  };
  const lines = html.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    const isUnorderedListItem = /^[*-]\s/.test(trimmedLine);
    const isOrderedListItem = /^\d+\.\s/.test(trimmedLine);
    const isBlockquoteLine = trimmedLine.startsWith('> ');

    if (isBlockquoteLine) {
      handleBlockquote(line, trimmedLine, state, currentBlock, outputLines);
    } else if (state.inBlockquote) {
      closeBlockquoteIfNeeded(trimmedLine, state, currentBlock, outputLines, line);
      if (!isUnorderedListItem && !isOrderedListItem && trimmedLine !== '') {
        currentBlock.push(line);
      }
    } else if (isUnorderedListItem || isOrderedListItem) {
      handleList(line, trimmedLine, isUnorderedListItem, isOrderedListItem, state, currentBlock, outputLines);
    } else {
      closeListIfNeeded(state, outputLines);
      if (trimmedLine === '') {
        processCurrentBlock(currentBlock, outputLines);
      } else {
        currentBlock.push(line);
      }
    }
  }
  processCurrentBlock(currentBlock, outputLines);
  if (state.inBlockquote) {
    outputLines.push('</blockquote>');
  }
  closeListIfNeeded(state, outputLines);
  return outputLines.join('\n');
}

function parseInline(html) {
  html = applyRegex(html, /\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = applyRegex(html, /__(.*?)__/gim, '<strong>$1</strong>');
  html = applyRegex(html, /\*(.*?)\*/gim, '<em>$1</em>');
  html = applyRegex(html, /_(.*?)_/gim, '<em>$1</em>');
  html = applyRegex(html, /~~(.*?)~~/gim, '<del>$1</del>');
  html = applyRegex(html, /\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
  html = applyRegex(html, /!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1">');
  html = applyRegex(html, /`(.*?)`/gim, '<code>$1</code>');
  return html;
}

export function markdownToHtml(markdown) {
  let html = parseCodeBlocks(markdown);
  html = parseBlockLevel(html);
  html = parseInline(html);
  return html;
}
