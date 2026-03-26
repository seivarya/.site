// for basic styling /styles/mdx.css will do just fine! but when implementing things such
// as custom components, lazy loading this mdx/ components override is required otherwise 
// its just overengineering things (i dont think i'll use them for now)

import BlockQuote from './BlockQuote.astro';
import Bold from './Bold.astro';
import CodeBlock from './CodeBlock.astro';
import Emphasis from './Emphasis.astro';
import Heading1 from './Heading1.astro';
import Heading2 from './Heading2.astro';
import Heading3 from './Heading3.astro';
import Heading4 from './Heading4.astro';
import Heading5 from './Heading5.astro';
import Heading6 from './Heading6.astro';
import HyprLink from './HyprLink.astro';
import Img from './Img.astro';
import InlineCode from './InlineCode.astro';
import Para from './Para.astro';
import ThematicBreak from './ThematicBreak.astro';

export const mdxOverrides = {
	//img: Img,
	blockquote: BlockQuote,
	em: Emphasis,
	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	h4: Heading4,
	h5: Heading5,
	h6: Heading6,
	hr: ThematicBreak,
};
