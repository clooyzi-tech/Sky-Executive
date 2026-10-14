import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  markdownContent: string;
}

export default function LegalPageLayout({ title, markdownContent }: LegalPageLayoutProps) {
  // Simple markdown parser to handle mammoth's output (paragraphs, headers, lists, links, bold)
  const renderMarkdown = (text: string) => {
    const blocks = text.split('\n\n');
    
    return blocks.map((block, index) => {
      let trimmed = block.trim();
      if (!trimmed) return null;

      // Handle anchor tags from mammoth (e.g., <a id="..."></a>)
      const anchorMatch = trimmed.match(/^<a id="([^"]+)"><\/a>([\s\S]*)$/);
      let id = '';
      if (anchorMatch) {
        id = anchorMatch[1];
        trimmed = anchorMatch[2].trim();
      }

      // Handle Headers
      if (trimmed.startsWith('# ')) {
        return <h1 key={index} id={id} className="text-3xl font-serif font-bold text-[#1e234c] mb-6 mt-8">{formatInline(trimmed.replace(/^# /, ''))}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={index} id={id} className="text-2xl font-serif font-bold text-[#2A241C] mb-4 mt-8">{formatInline(trimmed.replace(/^## /, ''))}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} id={id} className="text-xl font-semibold text-[#2A241C] mb-3 mt-6">{formatInline(trimmed.replace(/^### /, ''))}</h3>;
      }

      // Handle Lists (basic bullet points)
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map(item => item.replace(/^- /, '').trim());
        return (
          <ul key={index} className="list-disc pl-5 mb-5 space-y-2 text-[#4A453F] leading-relaxed">
            {items.map((item, i) => (
              <li key={i}>{formatInline(item)}</li>
            ))}
          </ul>
        );
      }

      // Default to paragraph
      return (
        <p key={index} id={id || undefined} className="mb-5 text-[#4A453F] leading-relaxed text-[15px]">
          {formatInline(trimmed)}
        </p>
      );
    });
  };

  const formatInline = (text: string) => {
    // Handle mammoth's escaped bold `__text__`
    const parts = text.split(/__(.*?)__/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) return <strong key={i} className="font-bold text-[#2A241C]">{part}</strong>;
      
      // Handle escaped asterisks `\**` or similar if mammoth produces them
      const subParts = part.replace(/\\\*/g, '*').replace(/\\\./g, '.').replace(/\\-/g, '-').split(/\[(.*?)\]\((.*?)\)/g);
      
      // Handle basic links [text](url)
      if (subParts.length > 1) {
        const linkElements = [];
        for (let j = 0; j < subParts.length; j += 3) {
          linkElements.push(<React.Fragment key={j}>{subParts[j]}</React.Fragment>);
          if (j + 1 < subParts.length) {
            linkElements.push(
              <a key={j+1} href={subParts[j+2]} className="text-[#A67C37] hover:underline font-medium">
                {subParts[j+1]}
              </a>
            );
          }
        }
        return linkElements;
      }
      
      return part.replace(/\\\*/g, '*').replace(/\\\./g, '.').replace(/\\-/g, '-');
    });
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-20">

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 mt-12 bg-white rounded-2xl shadow-sm border border-[#E5DEC9] p-8 md:p-12">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#B38E46]" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1e234c] uppercase tracking-wider">{title}</h1>
            <div className="w-12 h-[2px] bg-[#B38E46]" />
          </div>
        </div>
        
        <div className="prose max-w-none">
          {renderMarkdown(markdownContent)}
        </div>
      </article>
      

    </main>
  );
}
