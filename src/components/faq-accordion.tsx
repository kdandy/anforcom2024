import { IQuestionData } from '@/constants/questions-data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui'

export default function FaqAccordion({ data }: { data: IQuestionData }) {
  return (
    <Accordion type='single' collapsible className='flex flex-col space-y-2 md:space-y-4'>
      {data.map((item) => (
        <AccordionItem value={item.question} key={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
