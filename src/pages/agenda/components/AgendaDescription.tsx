import { Flex } from "@chakra-ui/react"
import {marked} from 'marked';
import * as DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import html from 'remark-html';
import { remark } from 'remark';

type AgendaDescriptionType = {
  description: string
}

export const AgendaDescription = (args: AgendaDescriptionType) => {
  const { description } = args
  const [content, setContent] = useState('')
  
  useEffect(() => {
    async function fetch() {
      // const result = await remark().use(html).process(description);
      // const htmld = { __html: result.toString()}
      const a = await marked(description)
      const b = DOMPurify.sanitize(await a)
      setContent(b);
      
    }

    fetch()
  }, [description])

  // function createMarkup() {
  //   return {__html: content};
  // }

  // console.log((content))
  return (
    <Flex 
      w={'100%'} 
      flexDir={'column'} 
      fontSize={'14px'}
      fontWeight={'normal'}
      mt={'15px'}
      whiteSpace={'pre-wrap'}
    >
      {/* {description} */}
      {/* {content} */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={description}
      />
        
    </Flex>
  )
}