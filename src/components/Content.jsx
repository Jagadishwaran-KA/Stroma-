import React from 'react'
import hero from "../assets/hero.png";


function Content() {


     const faq_data = [
  {
    "question": "What are stem cells?",
    "answer": "Stem cells are undifferentiated cells that have the unique ability to develop into various specialized cell types in the body. They are characterized by their capacity for self-renewal and differentiation into specific cell types."
  },
  {
    "question": "What types of stem cells exist, and how do they differ?",
    "answer": "There are several types of stem cells, including embryonic stem cells, adult stem cells, and induced pluripotent stem cells (iPSCs). Embryonic stem cells are derived from embryos, while adult stem cells are found in various tissues throughout the body. iPSCs are created in the lab by reprogramming adult cells to behave like embryonic stem cells."
  },
  {
    "question": "Where do stem cells come from?",
    "answer": "Stem cells can be sourced from different areas, including embryos (embryonic stem cells), bone marrow, adipose tissue, umbilical cord blood, and even certain adult tissues like the liver or skin."
  },
  {
    "question": "What is the importance of stem cells in medicine and research?",
    "answer": "Stem cells have significant potential in medical research and treatment. They offer opportunities for studying diseases, screening drugs, and developing regenerative therapies to repair or replace damaged tissues and organs."
  },
  {
    "question": "How are stem cells used in treating diseases and medical conditions?",
    "answer": "Stem cells can be used in regenerative medicine to treat various conditions like leukemia, spinal cord injuries, heart disease, and diabetes. They have the potential to regenerate and repair tissues and organs."
  },

]

    const fmq_data = [
        {
            "question": "Are there any ethical concerns associated with stem cell research and use?",
            "answer": "Ethical concerns primarily revolve around the use of embryonic stem cells, as their extraction involves the destruction of embryos. However, alternative methods like iPSCs have reduced these ethical concerns."
        },
        {
            "question": "Can anyone donate their stem cells, and how does the donation process work?",
            "answer": "Depending on the type of donation (bone marrow, peripheral blood, or cord blood), individuals can register as donors. Matching donors are identified, and the cells are collected through a relatively straightforward and safe process."
        },
        {
            "question": "What are the potential risks or side effects of stem cell therapies or treatments?",
            "answer": "Risks can vary depending on the specific treatment. Potential risks include immune system reactions, tumor formation, or complications related to the procedure. However, most stem cell therapies are considered safe and are continually being improved."
        },
        {
            "question": "What ongoing research is being conducted in the field of stem cells?",
            "answer": "Ongoing research involves exploring new ways to manipulate stem cells, understanding their behavior in specific environments, improving transplantation techniques, and developing more effective therapies for various diseases and conditions."
        },
        {
                "question": "What is the process of harvesting or obtaining stem cells?",
                "answer": "Harvesting methods depend on the type of stem cells. Embryonic stem cells are obtained from embryos, while adult stem cells can be collected from bone marrow, blood, or other tissues through minimally invasive procedures."
        },
    ]

   




  return ( 
   

    <div className='m-16 flex flex-col items-center justify-center '>
        
        <h1 className='font-display text-2xl font-medium '>“Wherever the art of medicine is loved, there is also a love for humanity.” – Hippocrates</h1>
        <div className='flex mt-10 justify-evenly items-center '>
            <div className='space-y-4'>
            <h1 className='font-light font-mono text-4xl'>Be a Lifesaver: Donate Stem Cells Today</h1>
            <p className='font-medium text-2xl'>Join the Movement to Save Lives through Stem Cell Donation</p>
            <p className='font-normal text-base'>Stem cell donation offers hope and healing to those battling life-threatening diseases.<br></br> Your simple act of donating stem cells can make a profound difference.
</p>
            </div>
            <img className='w-[35%]' src= {hero} />
        </div>
        
        <div className='w-full mt-7 ml-14 flex justify-between'>
            <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl font-semibold text-black ">Frequently asked questions</h2>
            <div class="grid pt-8 text-left border-t  md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                   {faq_data.map((item) => (
                        <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium ">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                {item.question}
                            </h3>
                            <p>{item.answer}</p>
                        </div>
                   ))}
                </div>
                <div>
                    {fmq_data.map((item) => (
                            <div class="mb-10">
                            <h3 class="flex items-center mb-4 text-lg font-medium ">
                                <svg class="flex-shrink-0 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                {item.question}
                            </h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
          </section>
          </div>
    </div>

  )
}

export default Content